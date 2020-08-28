<template>
    <!-- <div> -->
        <div class="col-xl-4 col-sm-6 mb-5 productCardCol">
            <div class="productCard card rounded-0">
                <!-- <img :src="thisProduct.imageUrl[0]" class="productCard__img card-img-top img-fluid" alt="..."
                    @click="openSingleProudct(thisProduct.id)"
                > -->
                <div class="p-2">
                  <div class="productCard__imgWrapper bg-cover"
                    :style="{
                      backgroundImage:`url(${thisProduct.imageUrl[0]})`
                    }"
                  >
                    <span class="productCard__imgWrapper__badge badge badge-primary">{{productTag}}</span>
                  </div>
                </div>
                <div class="productCard__body card-body pt-1">
                    <h5 class="card-title font-weight-bold"
                        @click="openSingleProudct"
                    >
                        {{thisProduct.title}}
                    </h5>
                    <p class="card-text text-truncate text-nowrap">
                        {{thisProduct.content}}
                    </p>
                    <div class="d-flex align-items-end mb-2">
                      <div class="__price h3 mb-0 mr-2 font-weight-bold">
                        NT{{thisProduct.price | dollars}}
                      </div>
                      <div class="text-muted">
                        <del>
                          NT{{thisProduct.origin_price | dollars}}
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
                            <select class="__num form-control form-control-sm"
                            v-model="thisProduct.num"
                            >
                                <option :value="1" selected >1</option>
                                <option v-for="i in 5" :key="'num'+i"
                                :value="i+1"
                                >{{i+1}}</option>
                            </select>
                        </div>
                        <a href="#" class="__cart flex-1 btn btn-secondary btn-sm py-1 ml-auto"
                        @click.prevent="addToCart(thisProduct,thisProduct.num)"
                        >加入購物車</a>

                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import { mapState } from 'vuex';

export default {

  props: {
    // item:Object,//@@奇怪的right-hand-side報錯後來又正常
    // item:{},
    thisProduct: {
      type: Object,
      required: true,
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
      const hasInCartItem = this.carts.find((cartItem) => cartItem.product.id === item.id);
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
    openSingleProudct(id) {
      // console.log(id);
      this.$router.push({
        path: `/products/${id}`,
      });
    },
  },
};
</script>

<style lang="scss">

</style>
