import { instanceCus } from '@/api/https';

export default {
  state: {
    cart: {
      carts: [],
      pagination: {},
      // total: 0
    },
  },
  getters: {
    cartTotal: (state) => {
      const total = state.cart.carts
        .reduce((prev, item) => prev + (item.product.price * item.quantity), 0);
      // total = total*
      return total;
    },
  },
  mutations: {
    CART(state, resData) {
      state.cart.carts = resData.data.reverse();
      // state.cart.carts = resData.data.sort((a, b) => b.qty - a.qty);
      state.cart.pagination = resData.meta.pagination;
    },
  },
  actions: {
    getCart(context) {
      return new Promise((resolve) => {
        context.commit('LOADING', true);
        const api = 'ec/shopping';
        // Vue.$instanceCus.get(api)//@@
        instanceCus.get(api)
          .then((res) => {
            // console.log('上面是取得購物車');
            // this.carts = res.data.data.reverse();
            // this.cartPagination = res.data.meta.pagination;
            context.commit('CART', res.data);
            // this.$emit('emitCart',this.carts)
            // @@是否會傳參考
            context.commit('LOADING', false);
            // context.commit('ORDER_TOTAL');
            resolve();
          });
      });
    },
    addToCart(context, { productId, qty }) {
      return new Promise((resolve) => {
        const api = 'ec/shopping';
        const cartItem = { product: productId, quantity: qty };

        // this.$instanceCus.post(api, cartItem)@@this有效嗎
        instanceCus.post(api, cartItem)
          .then(() => {
            // this.$refs.cart.getCart();
            context.dispatch('getCart')
              .then(() => {
                resolve();
              });
          });
        // ##這邊判斷post patch會跑兩次api
        // .catch((err) => {
        //     console.dir(err.response.data);
        //     if(err.response.data.errors[0]==="該商品已放入購物車當中。"){
        //         this.$bus.$emit('message:push',`${item.title}已存在購物車`)
        //     }
        // })
      });
    },
    editCart(context, { productId, newQty }) {
      return new Promise((resolve) => {
        // context.commit('LOADING', true);
        // console.log(productId, newQty);

        const api = 'ec/shopping';
        const cartItem = { product: productId, quantity: newQty };
        instanceCus.patch(api, cartItem)
          .then(() => {
            // this.getCart();
            // this.$store.dispatch('getCart');//%%
            // context.dispatch('getCart');

            // context.dispatch('getCart',resolve);
            // resolve();

            context.dispatch('getCart')
              .then(() => {
                resolve();
              });
          });
      });
    },
    delCart(context, productId) {
      // this.$store.commit('LOADING',true);
      return new Promise((resolve) => {
        context.commit('LOADING', true);
        const api = `ec/shopping/${productId}`;
        instanceCus.delete(api)
          .then(() => {
            // this.$bus.$emit('message:push',`${item.product.title} 已刪除`,'success');
            // app.$bus.$emit('message:push',`${item.product.title} 已刪除`,'success');
            // this.getCart();
            resolve();
            context.dispatch('getCart');
          });
      });
    },
    delAllCart(context) {
      context.commit('LOADING', true);
      const api = 'ec/shopping/all/product';
      instanceCus.delete(api)
        .then(() => {
          // this.$bus.$emit('message:push','全部商品已刪除','success')
          context.dispatch('getCart');
        });
    },
  },
};
