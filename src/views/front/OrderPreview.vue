<template>
  <div class="orderPreview">
    <div class="container">
      <div class="row">
        <!-- 購物車 開始 -->
        <div class="col-md-8">
          <div class="mb-4">
            <div class="cart">
              <div class="cart__header p-3">
                <h4 class="mb-0">
                  購物車({{ cart.carts.length }}件)
                </h4>
              </div>
              <div class="cart__body p-4 bg-light">
                <div
                  v-for="(item) in cart.carts"
                  :key="item.product.id"
                  class="cart__item row mb-3"
                >
                  <div class="col-3 col-md-3">
                    <!-- 圖片 -->
                    <img
                      class="img-fluid"
                      :src="item.product.imageUrl[0]"
                      alt=""
                    >
                  </div>
                  <div class="col-9 col-md-9">
                    <div class="row h-100">
                      <!-- 名稱跟單價 -->
                      <div class="col-md-6">
                        <div class="d-flex flex-column h-100">
                          <div class="fz-2 fw-b mb-md-2">
                            {{ item.product.title }}
                          </div>
                          <div class="fz-3">
                            {{ item.product.price | dollars }}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="d-flex justify-content-between align-items-center h-100">
                          <!-- 數量加減 -->
                          <div class="input-group input-group-sm d-inline-flex w-auto flex-nowrap">
                            <span class="input-group-prepend">
                              <button
                                type="button"
                                class="btn btn-primary"
                                @click.prevent="updateCartQty('add1',item)"
                              >+</button>
                            </span>
                            <input
                              v-model.number="item.quantity"
                              v-debounce:1s.lock="stayUpdateCart"
                              type="text"
                              class="text-center form-control"
                              style="width:30px"
                              :debounce-events="'input'"
                              :data-item-id="item.product.id"
                            >
                            <span class="input-group-append">
                              <button
                                type="button"
                                class="btn btn-primary"
                                @click.prevent="updateCartQty('subtract1',item)"
                              >-</button>
                            </span>
                          </div>
                          <div class="d-flex align-items-center">
                            <!-- 小計 -->
                            <p class="h4 mb-0 px-2">
                              {{ (item.product.price*item.quantity) | dollars }}
                            </p>
                            <!-- 操作 -->
                            <div class="d-flex flex-column px-2">
                              <a
                                href=""
                                class="text-nowrap"
                                @click.prevent="removeCart(item)"
                              >移除</a>
                              <a
                                href=""
                                class="text-nowrap"
                              >收藏</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 購物車 結束 -->
        <div class="col-md-4">
          <div class="cartSummary card">
            <div class="cartSummary__header card-header border-0">
              訂單摘要
            </div>
            <div class="cartSummary__body card-body pb-4">
              <p class="d-flex justify-content-between pb-2 border-bottom">
                <span>小計</span>
                <span>NT{{ cartTotal | dollars }}</span>
              </p>
              <div>
                <div class="form-inline flex-nowrap pl-2 mb-3">
                  <span class="mr-4 text-nowrap">折價券</span>
                  <!-- 折價券## -->
                  <span class="input-group">
                    <input
                      v-model="couponCode"
                      type="text"
                      class="form-control rounded-0"
                      placeholder="輸入優惠碼"
                      @keyup.enter="searchCoupon"
                    >
                    <div
                      class="input-group-append"
                      @click="searchCoupon"
                    >
                      <span class="input-group-text rounded-0 bg-secondary1 text-white">套用</span>
                    </div>
                  </span>
                </div>
                <p
                  v-if="discountAmount"
                  class="d-flex justify-content-between pb-3 text-red border-bottom"
                >
                  <span>折扣金額</span>
                  <span>- NT{{ discountAmount | dollars }}</span>
                </p>
                <p class="d-flex justify-content-between pb-3 border-bottom">
                  <span>運費</span>
                  <span class="text-red">NT$0</span>
                </p>
                <div class="d-flex justify-content-between mb-4">
                  <span>總計</span>
                  <div>
                    <span class="d-block">NT{{ amountAll | dollars }}</span>
                    <small class="d-block text-muted">皆以TWD付款</small>
                  </div>
                </div>
              </div>
              <router-link
                tag="a"
                href="#"
                class="btn btn-primary btn-block"
                :to="{name:'收件資訊'}"
              >
                下一步
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      coupon: {},
      couponCode: '',
    };
  },
  computed: {
    cart() {
      return this.$store.state.Cart.cart;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
    ...mapGetters(['amountAll', 'discountAmount']),
  },
  watch: {
    cartTotal() {
      this.$store.dispatch('setOrderCartTotal');
    },
  },
  created() {
    this.getCart();
  },
  mounted() {
    this.$store.dispatch('changePage', 'order_preview');
  },
  methods: {
    getCart() {
      this.$store.dispatch('getCart');
    },
    updateCartQty(type, item) {
      const productId = item.product.id;
      let qty = item.quantity;
      // let num = qty;
      switch (type) {
        case 'add1':
          qty += 1;
          break;
        case 'subtract1':
          qty -= 1;
          break;
        default:
          break;
      }
      const data = {
        productId,
        newQty: qty,
      };

      this.$store.dispatch('editCart', data);
    },
    stayUpdateCart(val, e) {
      const data = {
        productId: e.target.dataset.itemId, // 產品id
        newQty: val, // 值
      };
      this.$store.dispatch('editCart', data);
    },
    removeCart(item) {
      const productId = item.product.id;
      this.$store.dispatch('delCart', productId);
    },
    searchCoupon() {
      const vm = this;
      const coupon = {
        code: vm.couponCode,
      };
      const api = 'ec/coupon/search';
      vm.$store.commit('LOADING', true);
      vm.$instanceCus.post(api, coupon).then((res) => {
        this.coupon = res.data.data;
        this.$store.commit('COUPON', this.coupon);
        this.$store.commit('LOADING', false);
      }).catch(() => {
        this.$store.commit('COUPON', {});// ##無效的優惠券
        this.$store.commit('LOADING', false);
      });
    },
  },
};
</script>
