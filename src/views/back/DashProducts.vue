<template>
  <div id="dashProducts">
    <div class="mt-4 text-right">
      <button
        type="button"
        class="newBtn btn btn-primary"
        @click="openModal('new')"
      >
        新增產品
      </button>
    </div>
    <div class="table-responsive">
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">
              分類
            </th>
            <th>產品名稱</th>
            <th width="120">
              原價
            </th>
            <th width="120">
              售價
            </th>
            <th width="100">
              是否啟用
            </th>
            <th width="120">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item) in products"
            :key="item.id"
          >
            <td>{{ item.category.split(">")[0] }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">
              {{ item.origin_price }}
            </td>
            <td class="text-right">
              {{ item.price }}
            </td>
            <td style="vertical-align: middle">
              <label class="toggle-control">
                <input
                  v-model="item.enabled"
                  type="checkbox"
                  @change="enabledProduct(item)"
                >
                <span class="control" />
              </label>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal('edit',item)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal('delete',item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-right">
      <button
        disabled
        type="button"
        class="btn btn-danger mr-5"
        @click="openDelAllProducts"
      >
        刪除本頁產品
      </button>
    </div>
    <BasePagination
      :pages="pagination"
      @change-page="getProducts"
    />
    <!---------- Modal ---------------------->
    <DashProductModal
      ref="dashProductModal"
      :is-new="isNew"
      @update="getProducts"
      @cancel="clearModal"
    />
    <DashDelProductModal
      ref="dashDelProductModal"
      :temp-product.sync="tempProduct"
      @update="getProducts"
    />
    <DashOtherModal
      id="delAll"
      :title="'刪除此頁商品'"
      :modal-use="'delete'"
      @delete="delAllProducts"
    >
      <template v-slot:delete>
        <div class="p-3 fz-35">
          確認刪除此頁所有商品
        </div>
      </template>
    </DashOtherModal>
  </div>
</template>
<script>
import $ from 'jquery';
import DashOtherModal from '@/components/admin/DashOtherModal.vue';
import DashProductModal from '@/components/DashProductModal.vue';
import DashDelProductModal from '@/components/DashDelProductModal.vue';
import BasePagination from '@/components/BasePagination.vue';

import { instanceAdmin } from '../../api/https';

export default {
  components: {
    DashProductModal,
    DashDelProductModal,
    BasePagination,
    DashOtherModal,
  },
  /**
     * @param products 放當頁產品的object list
     * @param pagination 取得產品列表時存下的分頁資料
     * @param isNew 使用者點擊的是否是新增產品
     * @param tempProduct 傳送要編輯或刪除的產品是什麼
     */
  data() {
    return {
      products: [],
      pagination: {},
      isNew: true,
      tempProduct: {
        imageUrl: [],
        options: {
          stock: 0,
          delivery: '',
          specification: '',
        },
      },
      currentPage: '0',
    };
  },
  created() {
    this.currentPage = this.$route.query.page;
    this.getProducts(this.currentPage);
  },
  methods: {
    getProducts(page = 1, paged = 10, orderBy = 'created_at', sort = 'desc') {
      this.$router.push({
        query: { page },
      })
        .catch(() => {});
      const vm = this;
      vm.$store.commit('LOADING', true);
      this.tempProduct = {
        imageUrl: [],
      };
      instanceAdmin.get(`ec/products?page=${page}&paged=${paged}&orderBy=${orderBy}&sort=${sort}`)// 500 err
        .then((res) => {
          vm.products = res.data.data;
          vm.pagination = res.data.meta.pagination;
          vm.$store.commit('LOADING', false);
        });
    },
    openModal(action, item) {
      switch (action) {
        case 'new':
          this.isNew = true;
          this.$refs.dashProductModal.openNewModal();
          break;// %%往下執行
        case 'edit':
          this.tempProduct = JSON.parse(JSON.stringify(item));
          this.isNew = false;
          this.$refs.dashProductModal.openEditModal(this.tempProduct.id);
          break;
        case 'delete':
          this.tempProduct = JSON.parse(JSON.stringify(item));
          this.$refs.dashDelProductModal.openDelModal();
          break;
        default:
          break;
      }
    },
    clearModal() {
      // 清空tempProduct modal 恢復原狀
      this.tempProduct = {
        imageUrl: [],
      };
    },
    enabledProduct(item) {
      this.$store.commit('LOADING', true);
      const api = `ec/product/${item.id}`;
      this.$instanceAdmin.patch(api, item)
        .then(() => {
          this.$store.commit('LOADING', false);
        });
    },
    delAllProducts() {
      this.$store.commit('LOADING', true);
      const productIds = this.products.map((prdItem) => prdItem.id);
      this.$http.all(productIds.map((id) => {
        const api = `ec/product/${id}`;
        return this.$instanceAdmin.delete(api);
      }))
        .then(() => {
          this.$store.commit('LOADING', false);
          this.getProducts();
        });
    },
    openDelAllProducts() {
      $('#delAll').modal('show');
    },
  },
};
</script>

<style lang="scss">
  #dashProducts{
    .table{
      min-width: 800px;
    }
  }
</style>
