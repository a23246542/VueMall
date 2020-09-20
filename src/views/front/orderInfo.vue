<template>
  <div class="orderInfo">
    <div class="container mb-5">
      <div class="row">
        <div class="orderInfo__content col-lg-8">
          <CustomerForm
            class=""
            @emitForm="createOrder"
          />
        </div>
        <div class="orderInfo__aside col-lg-4 d-none d-lg-block">
          <div class="cartSummary card mb-45">
            <div class="cartSummary__header card-header">
              購物清單
            </div>
            <div class="card-body">
              <tr v-for="(item,index) in carts" :key="item.product.id" class="d-flex"
                  :class="{'mb-2':index!==carts.length-1}"
              >
                <!-- <td class="flex-1 align-middle">@@div垂直置中無用 -->
                <td class="flex-1 d-flex align-items-center">
                  <div class="bg-cover w-100"
                       :style="{
                         backgroundImage:`url(${item.product.imageUrl[0]})`,
                         minWidth:'80px',
                         height:'80px',
                       }"
                  />
                </td>
                <!-- <td class="flex-1 align-middle text-right">x{{ item.quantity }}</td> -->
                <!-- <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td> -->
                <td class="flex-2 p-2 pl-3">
                  <div>
                    {{ item.product.title }}
                  </div>
                  <small>
                    {{ item.quantity }} {{ item.product.unit }}
                  </small>
                  <!-- ## -->
                  <div>
                    {{ (item.quantity*item.product.price) | dollars }}
                  </div>
                </td>
              </tr>
            </div>
          </div>
          <div class="cartSummary card">
            <div class="cartSummary__header card-header">
              訂單摘要
            </div>
            <div class="cartSummary__body card-body">
              <div class="d-flex justify-content-between mb-2">
                <span>小計</span>
                <span>NT{{ cartTotal | dollars }}</span>
              </div>
              <div v-if="discountAmount" class="d-flex justify-content-between mb-3 text-red">
                <span>折扣金額</span>
                <span>-NT{{ discountAmount | dollars }}</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span>運費</span>
                <span>NT{{ 0 | dollars }}</span>
              </div>
              <div class="d-flex justify-content-between mb-3" style="font-size:18px">
                <span>總計</span>
                <span>NT{{ amountAll | dollars }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-secondary1-light mt-5"
              @click="$router.go(-1)"
      >
        上一頁
      </button>
    </div>
  </div>
</template>
<script>
import CustomerForm from '@/components/CustomerForm.vue';
import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    CustomerForm,
  },
  data() {
    return {
      form: {},
    };
  },
  computed: {
    // ...mapState(['cart.carts'])
    ...mapState({
      carts: (state) => state.Cart.cart.carts,
      pagination: (state) => state.Cart.cart.pagination,
      coupon: (state) => state.CusOrders.coupon,
    }),
    ...mapGetters(['cartTotal', 'discountAmount', 'amountAll']),
  },
  watch: {
    // '$store.getters.cartTotal': function () { // @@監聽不到
    //   console.log('監聽cartTotal');
    //   this.$store.dispatch('setOrderCartTotal');
    // },
    cartTotal() {
      this.$store.dispatch('setOrderCartTotal');
    },
  },
  created() {
    this.$store.dispatch('getCart');// %%
    // this.$emit('changPage','orderInfo');
    this.$store.dispatch('changePage', 'order_info');
  },
  mounted() {
    // setTimeout(() => {
    //   this.$emit('changPage', 1);
    // }, 1000);
  },
  methods: {
    createOrder(customerForm) {
      // console.log(customerForm);
      this.$store.commit('LOADING', false);
      this.form = customerForm;
      if (this.coupon.code) {
        this.$set(this.form, 'coupon', this.coupon.code);
      }

      const api = 'ec/orders';
      const vm = this;
      this.$instanceCus.post(api, this.form)
        .then((res) => {
          this.$store.commit('LOADING', false);
          const orderId = res.data.data.id;
          vm.$router.push({
            name: '最後確認',
            query: { orderId },
          });
        }).catch(() => {

        });
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
