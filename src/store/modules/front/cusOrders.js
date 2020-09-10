import { instanceCus } from '@/api/https';

export default {
  state:{
    cartTotal:0,
    coupon:{},
    discountAmount:0,
    orderTotal:0,
    customerInfo:{}
  },
  mutations: {
    CART_TOTAL(state, payload){

      // state.orderTotal = state.getters.cartTotal
      state.cartTotal = payload;
      // state.CusOrders.orderTotal = payload;
    },
    COUPON(state, payload){
      state.coupon = payload;
    },
    ORDER_TOTAL(state, payload){
      if(state.coupon.percent){
        state.orderTotal = state.cartTotal * state.coupon.percent / 100;
      }else{
        state.orderTotal = state.cartTotal;
      }
    },
    ORDER_TOTAL2(state, payload){
      state.orderTotal = state.cartTotal * state.coupon.percent / 100;
    }

  },
  getters:{
    // orderTotal:(state) => {
    //   // return state.CusOrders.cartTotal * 9;//##只有vuex模塊內不用分模塊
    //   return state.cartTotal * state.coupon.percent / 100;
    // }
  },
  actions: {
    getCartTotal(context){
      // context等同于store
      // console.log(context.getters.cartTotal);

      // console.log(rootGetters['']);
      context.commit('CART_TOTAL',context.getters.cartTotal);
    },
    getOrderTotal(context){
      context.commit('ORDER_TOTAL');
    },
    getOrderTotal2(context){
      context.commit('ORDER_TOTAL2');
    }
  }
}