<template>
  <div id="dashOrders" class="table-responsive">
  <!-- ## !因沒設data會報錯 -->
    <table class="table mt-4" v-if="orders.length">
      <thead>
          <tr>
          <th width="120">訂單時間</th>
          <th width="120">訂單編號</th>
          <th>產品品項</th>
          <th width="100">訂單金額</th>
          <th width="100">付款方式</th>
          <th width="100">付款狀態</th>
          <th width="120">操作</th>
          </tr>
      </thead>
      <tbody>
          <tr
          v-for="item in orders"
          :key="item.id"
          >
            <!-- <td>{{ item.create_at | date }}</td> -->
            <td>{{item.created.timestamp | date}}</td>
            <td>{{item.id.slice(-16)}}</td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i" class="d-flex">
                  <span class="flex-1 mr-2">
                    {{ product.product.title }}
                  </span>
                  <span>
                    數量：{{ product.quantity }}{{ product.product.unit }}
                  </span>
                </li>
              </ul>
            </td>
            <td class="text-right">
                {{ item.amount | dollars }}
                (折扣率{{item.coupon.percent+'%'}})
            </td>
            <td>{{item.payment}}</td>
            <td>
                <strong v-if="item.paid" class="text-success">已付款</strong>
                <span v-else class="text-danger">未付款</span>
            </td>
            <td>
              <button class="btn btn-outline-primary btn-sm" @click="openEditModal(item)">
                編輯
              </button>
            </td>
          </tr>
      </tbody>
    </table>

    <!--分頁開始-->
    <Pagination :pages="pagination" @change-page="getOrders" />
    <!-- 分頁結束 -->

    <!-- 談窗開始 -->
    <!-- <DashModal id="dashOrderModal" -->
    <DashModal id="dashOrderModal" v-if="tempOrder.id"
      :title="modalTitle"
      :modalUse="modalUse"
      @submit="updateOrder"
    >
      <template v-slot:update>
        <div class="row mb-2">
            <div class="col-md-6">
                <div class="pl-3">
                    <p>
                        <!-- <span>訂單時間：</span><span>{{tempOrder.created.timestamp | date}}</span> -->
                        <span>訂單時間：</span><span>{{tempOrder.created.datetime}}</span>
                    </p>
                    <div class="d-flex overflow-y-auto"
                    style="max-height:280px"
                    >
                        <p>產品品項：</p>
                        <ul class="list-unstyled flex-1">
                            <li class="d-flex"
                            v-for="(prdData,i) in tempOrder.products" :key="i+prdData.product.title"
                            >
                                <span class="flex-2 mr-3">
                                  {{prdData.product.title}}
                                </span>
                                <span class="flex-1">
                                  數量：{{prdData.quantity}}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <p>購買人：{{tempOrder.user.name}}</p>
                <p>訂單金額：{{tempOrder.amount}}</p>
                <p v-if="tempOrder.coupon.code">折扣率：{{tempOrder.coupon.percent+'%'}}  活動：{{tempOrder.coupon.title}}</p>
                <p v-else >折扣：無</p>
                <p>付款方式：{{tempOrder.payment}}</p>
                <!-- ##付款後面會多一格空格 -->
                <div>付款：
                    <div class="custom-control custom-checkbox d-inline-block">
                        <!-- <span>付款：</span> %%-->
                        <input type="checkbox" class="custom-control-input" id="paidCheck"
                        v-model="tempOrder.paid"
                        >
                        <label v-if="tempOrder.paid" class="custom-control-label text-success" for="paidCheck">已付款</label>
                        <label v-else class="custom-control-label text-danger" for="paidCheck">未付款</label>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm-6">
                <div class="pl-3">
                    <div class="form-group form-row">
                        <label for="name" class="col-sm-2 col-form-label">姓名：</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="name"
                            v-model="tempOrder.user.name"
                            >
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <label for="email" class="col-sm-2 col-form-label">信箱：</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="email"
                            v-model="tempOrder.user.email"
                            >
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <label for="tel" class="col-sm-2 col-form-label">電話：</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="tel"
                            v-model="tempOrder.user.tel"
                            >
                        </div>
                    </div>
                    <div class="form-group form-row">
                        <label for="address" class="col-sm-2 col-form-label">地址：</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="address"
                            v-model="tempOrder.user.address"
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <p class="mb-2">訂單留言：</p>
                <textarea name="" id="" cols="30"
                class="w-100 p-3 border-radius"
                style="height:140px;border-color:#ced4da"
                v-model="tempOrder.message"
                ></textarea>
            </div>
        </div>
      </template>
    </DashModal>
    <!-- 談窗結束 -->
  </div>
</template>
<script>
import Pagination from '@/components/BasePagination';
import DashModal from '@/components/admin/DashOtherModal';
import Vue from 'vue';

export default {
  components: {
    Pagination,
    DashModal,
  },
  data() {
    return {
      orders: [],
      pagination: {},
      orderId: '',
      tempOrder: {},
      modalTitle: '編輯訂單',
      modalUse: 'update',
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    openEditModal(orderItem) {
      this.orderId = orderItem.id;
      this.getSingleOrder()
        .then(() => {
          console.dir($('#dashOrderModal'));
          Vue.nextTick(() => {
            $('#dashOrderModal').modal('show');
          });
        });
      // $("#dashOrderModal").modal("show");
    },
    async getOrders(page = 1) {
      this.$store.commit('LOADING', true);
      const api = `ec/orders?page=${page}`;
      await this.$instanceAdmin.get(api)
        .then((res) => {
          this.orders = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.$store.commit('LOADING', false);
        });
    },
    async getSingleOrder() {
      this.$store.commit('LOADING', true);
      const api = `ec/orders/${this.orderId}`;// @@mock重複
      // const api = `ec/orders/id`;
      await this.$instanceAdmin.get(api)
        .then((res) => {
          this.tempOrder = res.data.data;
          this.$store.commit('LOADING', false);
        });
    },
    updateOrder() {
      this.$store.commit('LOADING', true);
      const api = `ec/orders/${this.orderId}`;
      this.$instanceAdmin.patch(api, this.tempOrder)
        .then(() => {
          this.getOrders()
            .then(() => {
              $('#dashOrderModal').modal('hide');
            });
        });
    },
    setOrderPaid(tempOrderPaid, tempOrderId) {
      this.$store.commit('LOADING', true);
      let api = `ec/orders/${tempOrderId}/paid`;
      if (!tempOrderPaid) {
        api = `ec/orders/${tempOrderId}/unpaid`;
      }
      this.$instanceAdmin.patch(api)
        .then((res) => {
          this.getOrders();
        });
    },
  },
};
</script>

<style lang="scss">
#dashOrders{
  min-height:calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .table{
          min-width: 870px;
  }
}
</style>
