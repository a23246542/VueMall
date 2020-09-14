import { instanceCus } from '@/api/https';

export default {
  state: {
    cartTotal: 0,
    coupon: {}, // 購物車暫時查詢計算的coupon
    customerInfo: {}, // 訂單建立前暫存的訂單顧客資訊
    // ----訂單成立之後的------
    thisOrder: {},
  },
  getters: {
    // orderTotal:(state) => {
    //   // return state.CusOrders.cartTotal * 9;//##只有vuex模塊內不用分模塊
    //   return state.cartTotal * state.coupon.percent / 100;
    // }

    // amountAll(){
    amountAll(state) { // %%參數要代state
      if (state.coupon.percent) {
        return state.cartTotal * state.coupon.percent / 100;
      }
      return state.cartTotal;
    },
    discountAmount: (state, getters) => { // ##
      return getters.amountAll - state.cartTotal;
    },
  },
  mutations: {
    CART_TOTAL(state, payload) {
      // state.orderTotal = state.getters.cartTotal
      state.cartTotal = payload;
      // state.CusOrders.orderTotal = payload;
    },
    COUPON(state, payload) {
      state.coupon = payload;
    },
    GET_ORDER(state, payload) {
      state.thisOrder = payload;
    },
  },
  actions: {
    setOrderCartTotal(context) { // ##拿來拿別的模塊資料
      // context等同于store
      // console.log(context.getters.cartTotal);

      // console.log(rootGetters['']);
      if (context.getters.cartTotal) {
        context.commit('CART_TOTAL', context.getters.cartTotal);
      } else {
        context.dispatch('getCart').then(() => {
          setTimeout(() => {
            context.commit('CART_TOTAL', context.getters.cartTotal);
          }, 0);// @@看是否能在getter之後執行
        });
      }
    },
    getSingleOrder(context, orderId) {
      return new Promise((resolve, reject) => {
        const api = `ec/orders/${orderId}`;

        // this.$instanceCus.get(api)
        instanceCus.get(api) // @@改用context?
          .then((res) => {
            context.commit('GET_ORDER', res.data.data);
            // ##改成小大寫createAt
            resolve();
          }).catch((err) => {
          });
      });
    },
    // setThisOrderData({ dispatch, commit}){
    //   return dispatch('getSingleOrder').then(() => {
    //     commit('')
    //   });
    // }
  },
};
