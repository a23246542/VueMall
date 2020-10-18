<template>
  <div
    class="productCard card  rounded-0"
    :class="[mb,cardClass]"
  >
    <div class="p-2">
      <div
        class="productCard__imgWrap bg-cover"
        :style="{
          backgroundImage:`url(${thisProduct.imageUrl[0]})`
        }"
      >
        <span class="productCard__imgWrap__badge badge badge-primary">{{ productTag }}</span>
        <span
          class="productCard__favoriteBadge"
          @click="clickHeart($event)"
        >
          <i :class="heartStyle" />
        </span>
      </div>
    </div>
    <div class="productCard__body card-body pt-1">
      <h5
        class="productCard__title limit-2-line mb-1 card-title font-weight-bold"
        @click="openSingleProudct()"
      >
        {{ thisProduct.title }}
      </h5>
      <div>
        <p class="productCard__content text-truncate text-nowrap text-muted">
          {{ thisProduct.content }}
        </p>
        <div class="d-flex align-items-end mb-2">
          <div class="productCard__price h3 mb-0 mr-2 font-weight-bold">
            NT{{ thisProduct.price | dollars }}
          </div>
          <div class="text-muted">
            <del>
              NT{{ thisProduct.origin_price | dollars }}
            </del>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div class="form-inline mr-2">
            <select
              v-model="thisProduct.num"
              class="productCard__num form-control form-control-sm"
            >
              <option
                :value="1"
                selected
              >
                1
              </option>
              <option
                v-for="i in 5"
                :key="'num'+i"
                :value="i+1"
              >
                {{ i+1 }}
              </option>
            </select>
          </div>
          <a
            href="#"
            class="productCard__cart flex-1 btn btn-secondary btn-sm py-1 ml-auto border-0"
            @click.prevent="addToCart(thisProduct,thisProduct.num)"
          >加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thisProduct: {
      type: Object,
      required: true,
    },
    mb: {
      type: String,
      default: '',
    },
    cardClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    carts() {
      return this.$store.state.Cart.cart.carts;
    },
    productTag() { // 如果有子分類，回傳子分類名稱
      if (this.thisProduct.category.includes('>')) {
        return this.thisProduct.category.split('>')[1];
      }
      return this.thisProduct.category;
    },
    heartStyle() { // ##
      return this.wishItemIdList.indexOf(this.thisProduct.id) === -1
        ? 'far fa-heart'
        : 'fas fa-heart text-primary';
    },
    wishItemIdList() {
      return this.$store.state.WishList.wishItemIdList;
    },
  },
  methods: {
    addToCart(item, qty = 1) {
      this.$store.commit('LOADING', true);
      const cartItem = { productId: item.id, qty };
      const hasInCartItem = this.carts.find((cart) => cart.product.id === cartItem.id);
      if (!hasInCartItem) {
        this.$store.dispatch('addToCart', cartItem)
          .then(() => {
            this.$store.commit('LOADING', false);
            this.$bus.$emit('message:push', `${item.title}已加入購物車`, 'success');
            this.$store.dispatch('getCart');
          });
      } else {
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
    clickHeart(event) {
      if (event.toElement.classList.contains('far')) { // 未加入收藏
        this.$store.commit('ADD_WISH', this.thisProduct.id);
      }

      if (event.toElement.classList.contains('fas')) { // 已加入收藏
        this.$store.commit('REMOVE_WISH', this.thisProduct.id);
      }
    },
    openSingleProudct() {
      this.$router.push({
        path: `/products/${this.thisProduct.id}`,
      }).catch(() => {});
      // console.log('跳頁');
    },
  },
};
</script>

<style lang="scss">

</style>
