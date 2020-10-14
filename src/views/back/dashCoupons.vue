<template>
  <div
    id="dashCoupon"
    class="table-responsive"
  >
    <div>
      <div class="mt-4 text-right">
        <button
          type="button"
          class="btn btn-primary"
          @click="openModal('new')"
        >
          新增產品
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="100">
              優惠券名稱
            </th>
            <th width="120">
              折扣碼
            </th>
            <th width="120">
              折扣百分比
            </th>
            <th width="100">
              是否開放
            </th>
            <th width="120">
              到期日
            </th>
            <th width="120">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item) in coupons"
            :key="item.id"
          >
            <td>{{ item.title }}</td>
            <td>{{ item.code }}</td>
            <td class="text-right">
              {{ item.percent }}
            </td>
            <td>
              <span v-if="item.enabled">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <!-- <td class="text-right">
                          {{item['deadline_at']}}
                      </td> -->
            <td class="text-right">
              {{ item.deadline.datetime.split('').slice(0,10).join('') }}
              <!-- {{showOnlyDate(item.deadline.datetime)}} -->
              <!-- {{compons[index].deadline.datetime}} -->
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
    <BasePagination
      class="BasePagination"
      :pages="pagination"
      @change-page="getCoupons"
    />
    <!---------- Modal ---------------------->
    <!-- 之前的組件 -->
    <!-- <DashProductModal
        ref="dashProductModal"
        :is-new="isNew"
        @update="getProducts"
        @cancel="clearModal"
        />
        <DashDelProductModal
        ref="dashDelProductModal"
        :temp-product.sync="tempProduct"
        @update="getProducts"
        /> -->
    <DashModal
      id="couponModal"
      :title="modalTitle"
      :modal-use="modalUse"
      @submit="updateCoupon"
      @delete="removeCoupon"
    >
      <template v-slot:update>
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="title">優惠券名稱</label>
              <input
                id="title"
                v-model="tempCoupon.title"
                type="text"
                class="form-control"
                placeholder="請輸入優惠券名稱"
              >
            </div>
          </div>
          <div class="col-sm-8">
            <div class="form-group">
              <label for="code">優惠碼</label>
              <input
                id="code"
                v-model="tempCoupon.code"
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
              >
            </div>
            <div class="form-row">
              <div class="form-group col-md-8">
                <label for="dueDate">到期日</label>
                <input
                  id="dueDate"
                  v-model="dueDate"
                  type="date"
                  class="form-control"
                >
              </div>
              <div class="form-group col-md-4">
                <label for="percent">折扣百分比</label>
                <input
                  id="percent"
                  v-model="tempCoupon.percent"
                  type="text"
                  class="form-control"
                  placeholder="請輸入折扣率"
                >
              </div>
            </div>

            <div class="form-group">
              <div class="form-check">
                <!-- <input
                                class="form-check-input"
                                v-model="tempCoupon.enabled"
                                :true-value="1"
                                :false-value="0"
                                type="checkbox"
                                id="is_enabled"
                                /> -->
                <input
                  id="is_enabled"
                  v-model="tempCoupon.enabled"
                  class="form-check-input"
                  type="checkbox"
                >
                <label
                  class="form-check-label"
                  for="is_enabled"
                >是否啟用</label>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:delete>
        <p>
          是否刪除<strong class="text-danger">{{ tempCoupon.title }}</strong>優惠券(刪除後將無法恢復)。
        </p>
      </template>
    </DashModal>
  </div>
</template>
<script>
import BasePagination from '@/components/BasePagination.vue';
import DashModal from '@/components/admin/DashOtherModal.vue';

export default {
  components: {
    BasePagination,
    DashModal,
  },
  data() {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        code: '',
        percent: '',
        enabled: true,
        deadline: { datetime: '' },
      },
      pagination: {},
      isNew: true, // 決定新增還是編輯的api方法
      modalUse: '',
      modalTitle: '',
    };
  },
  computed: {
    dueDate: { // 到期日v-model
      get() {
        // return this.tempCoupon['deadline_at'].split('').slice(0,10).join('');
        return this.tempCoupon.deadline.datetime.split('').slice(0, 10).join('');
      },
      set(value) {
        // this.tempCoupon['deadline_at'] = `${value} 23:59:59`;
        this.tempCoupon.deadline.datetime = `${value} 23:59:59`;// 計算到當天結束為止
      },
    },
  },
  created() {
    this.getCoupons();
  },
  methods: {
    // due(){
    //     var dateControl = document.querySelector('input[type="datetime-local"]');
    //         console.log(dateControl.value);
    // },
    // showOnlyDate(item){
    //     return item.split('').slice(0,10).join('')
    // },
    openModal(action, CouponItem) {
      if (action === 'new') {
        this.isNew = true;
        this.modalUse = 'update';
        this.modalTitle = '新增優惠券';
        // this.tempCoupon = {};//清空err讀取不到
        this.tempCoupon = {
          title: '',
          code: '',
          percent: '',
          enabled: true,
          deadline: { datetime: '' },
          // deadline:{}//computed報錯
        };
      } else if (action === 'edit') {
        this.isNew = false;
        this.modalUse = 'update';
        this.modalTitle = '編輯優惠券';

        this.tempCoupon = { ...CouponItem };
      } else if (action === 'delete') {
        this.modalUse = 'delete';
        this.modalTitle = '刪除優惠券';
        this.tempCoupon = CouponItem;
      }
      $('#couponModal').modal('show');
    },
    async getCoupons(page = 1, cb) {
      // return new Promise((resolve, reject) =>{
      this.$store.commit('LOADING', true);
      const api = `ec/coupons?page=${page}`;
      await this.$instanceAdmin.get(api)
        .then((res) => {
          this.coupons = res.data.data;
          this.pagination = res.data.meta.pagination;
          if (cb) {
            cb();
          }
          this.$store.commit('LOADING', false);
          // resolve();
        });
      // })
    },
    updateCoupon() {
      this.$store.commit('LOADING', true);
      const vm = this;
      let api = 'ec/coupon';
      let apiMethod = 'post';
      if (!this.isNew) {
        api = `ec/coupon/${this.tempCoupon.id}`;
        apiMethod = 'patch';
      }
      const data = { ...this.tempCoupon };
      data.deadline_at = data.deadline.datetime;// ##
      delete data.deadline;
      this.$instanceAdmin[apiMethod](api, data)
      // .then(async () => {
        .then(() => {
          // this.getCoupons(()=>{ //callback
          //     $("#couponModal").modal("hide");
          // });
          // -----
          // await vm.getCoupons();//@@不用加
          // $("#couponModal").modal("hide");
          // -----
          vm.getCoupons()
            .then(() => {
              $('#couponModal').modal('hide');
            });
        });
      // $("#couponModal").modal("hide");
    },
    removeCoupon() {
      this.$store.commit('LOADING', true);
      const api = `ec/coupon/${this.tempCoupon.id}`;
      this.$instanceAdmin.delete(api)
        .then(() => {
          // this.getCoupons(page=1,()=>{@@page not defined
          this.getCoupons(1, () => { // callback作法
            $('#couponModal').modal('hide');
          });
        });
      // .then(() =>{//##只適合用promiseFn的時候
      //     $("#couponModal").modal("hide");
      // })
    },

  },
};
</script>
<style lang="scss">
    #dashCoupon{
      min-height: calc(100vh - 48px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .table{
          min-width: 670px;
      }

    }
</style>

<style lang="scss" scoped>
    // .table{
    //     min-width: 670px;
    // }
</style>
