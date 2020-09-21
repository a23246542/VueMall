export default {
  methods: {
    addToCart(item, qty = 1) {
      this.$store.commit('LOADING', true);
      const api = 'ec/shopping';
      const cartItem = { product: item.id, quantity: qty };
      const hasInCartItem = this.carts.find((cartItem) => cartItem.product.id === cartItem.id);
      if (!hasInCartItem) { // 品項不存在購物車
        this.$instanceCus.post(api, cartItem)
          .then((res) => {
            console.log(res);
            this.$store.commit('LOADING', false);
            this.$bus.$emit('message:push', `${item.title}已加入購物車`, 'success');
            this.$store.dispatch('getCart');
          })
          .catch((err) => {
            console.log(err);
          });
      } else { // 同品項已存在購物車
        const data = {
          productId: hasInCartItem.product.id,
          newQty: hasInCartItem.quantity + qty,
        };
        this.$store.dispatch('editCart', data)
          .then(() => {
            this.$bus.$emit('message:push', `${item.title}已加入購物車`, 'success');
          });
      }
    },
  },
  computed: {
    carts() {
      return this.$store.state.Cart.cart.carts;
    },
  },
};
