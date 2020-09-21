<template>
  <!-- <div class=`col-xl-4 col-sm-6 mb-${mb} productCardCol`
  > //@@代參數-->
  <div class="productCard card rounded-0" :class="[mb]">
    <!-- <img :src="thisProduct.imageUrl[0]" class="productCard__img card-img-top img-fluid" alt="..."
                    @click="openSingleProudct(thisProduct.id)"
                > -->
    <div class="p-2">
      <div class="productCard__imgWrap bg-cover"
           :style="{
             backgroundImage:`url(${thisProduct.imageUrl[0]})`
           }"
      >
        <span class="productCard__imgWrap__badge badge badge-primary">{{ productTag }}</span>
        <span class="productCard__favoriteBadge"
              @click="clickHeart"
        >
          <i :class="heartStyle"></i>
        </span>
      </div>
    </div>
    <div class="productCard__body card-body pt-1">
      <h5 class="productCard__title mb-1 card-title font-weight-bold"
          @click="openSingleProudct()"
      >
        {{ thisProduct.title }}
      </h5>
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
          <!-- ###寫入只能用v-model了 -->
          <!-- <select class="form-control"
                            v-model="product.num"
                            >
                                <option v-for="i in 5" :key="'num'+i"
                                :value="i"
                                >{{i}}</option>
                            </select> -->
          <!-- ##v-model沒有值的話 option預設不會顯示 雙向綁定變空白 -->
          <select v-model="thisProduct.num"
                  class="productCard__num form-control form-control-sm"
          >
            <option :value="1" selected>
              1
            </option>
            <option v-for="i in 5" :key="'num'+i"
                    :value="i+1"
            >
              {{ i+1 }}
            </option>
          </select>
        </div>
        <a href="#" class="productCard__cart flex-1 btn btn-secondary btn-sm py-1 ml-auto border-0"
           @click.prevent="addToCart(thisProduct,thisProduct.num)"
        >加入購物車</a>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {

  props: {
    // item:Object, // @@奇怪的right-hand-side報錯後來又正常
    // item:{},
    thisProduct: {
      type: Object,
      required: true,
    },
    mb: {
      // type: [String, Number],
      type: String,
      default: 'mb-5',
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
    // ...mapState(['wishItemIdList']), // %%
    wishItemIdList() {
      return this.$store.state.WishList.wishItemIdList; // @@放在各別卡片是否更耗效能
    },
  },
  methods: {
    addToCart(item, qty = 1) {
      this.$store.commit('LOADING', true);
      const api = 'ec/shopping';
      const cartItem = { product: item.id, quantity: qty };

      // const ifInCart = this.carts.some((cartItem)=>{
      //         return cartItem.product.id === item.id;
      // })

      // 會是undefine 或{...}
      // @@ todo改掉就錯了 變成同個產品數量重複加
      const hasInCartItem = this.carts.find((cartItem) => cartItem.product.id === cartItem.id);
      // console.log(hasInCartItem,!hasInCartItem);

      if (!hasInCartItem) {
        this.$instanceCus.post(api, cartItem)
          .then((res) => {
            this.$store.commit('LOADING', false);
            this.$bus.$emit('message:push', `${item.title}已加入購物車`, 'success');
            // this.$refs.cartModal.getCart();
            this.$store.dispatch('getCart');
          });
      } else {
        // console.log('已經有了');
        // console.log(hasInCartItem);
        const data = {
          productId: hasInCartItem.product.id,
          newQty: hasInCartItem.quantity + qty,
        };
        // console.dir(data);
        this.$store.dispatch('editCart', data)
          .then(() => {
            this.$bus.$emit('message:push', `${item.title}已加入購物車`, 'success');
          });
      }

      // this.$instanceCus.post(api,cartItem)
      // .then((res) => {
      //     this.$store.commit('LOADING',false);
      //     this.$bus.$emit('message:push',`${item.title}已加入購物車`,'success')
      //     // this.$refs.cartModal.getCart();
      //     this.$store.dispatch('getCart');
      // })
      // // ###這邊判斷post patch缺點會跑兩次api
      // .catch((err) => {
      //     this.$store.commit('LOADING',false);
      //     console.dir(err.response.data);
      //     if(err.response.data.errors[0]==="該商品已放入購物車當中。"){
      //         this.$bus.$emit('message:push',`${item.title}已存在購物車`)
      //     }
      // })
      // this.$store.dispatch('addToCart',{productId,qty})
      // this.$store.dispatch('getCart');//%%
    },
    clickHeart() {
      const posi = this.wishItemIdList.indexOf(this.thisProduct.id);
      if (posi === -1) {
        this.$store.commit('ADD_WISH', this.thisProduct.id);
      } else {
        this.$store.commit('REMOVE_WISH', posi);
      }
    },
    openSingleProudct() {
      // console.log(this.thisProduct.id);
      this.$router.push({
        path: `/products/${this.thisProduct.id}`,
        // path: `products/${this.thisProduct.id}`,
        // path: `${this.thisProduct.id}`,
        // path:`/coupon`
        // name: 'productSingle',
        // params: { prdId: this.thisProduct.id },
      }).catch(() => {});
      // console.log('跳頁');
    },
  },
};
</script>

<style lang="scss">

</style>
