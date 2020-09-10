import { instanceCus } from '@/api/https';

export default {
  state:{
    cartTotal:0,
    coupon:{},
    customerInfo:{}
  },
  getters:{
    // orderTotal:(state) => {
    //   // return state.CusOrders.cartTotal * 9;//##只有vuex模塊內不用分模塊
    //   return state.cartTotal * state.coupon.percent / 100;
    // }

    // amountAll(){
    amountAll(state){//%%參數要代state
      if(state.coupon.percent){
         return state.cartTotal * state.coupon.percent / 100;
      }else{
        return state.cartTotal;
      }
    },
    discountAmount:(state,getters) => {//##
        return getters.amountAll - state.cartTotal;
    }
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
  },
  actions: {
    setOrderCartTotal(context){//##拿來拿別的模塊資料
      // context等同于store
      // console.log(context.getters.cartTotal);

      // console.log(rootGetters['']);
      context.commit('CART_TOTAL',context.getters.cartTotal);
    },
  }
}