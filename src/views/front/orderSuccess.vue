<template>
  <div v-if="orderId" class="orderSuc">
    <div class="container">
      <div class="orderConfirm__title mb-3 text-center">
        <h3>付款成功!</h3>
      </div>
      <p class="mb-3 text-center">
        運送時間為5~7個工作天內宅配到貨或是通知指定門市取貨
      </p>
      <div class="row">
        <div class="col">
          <div class="orderSuc__bg">
            <div class="orderSuc__box">
              <h3 class="orderSuc__title py-4 px-5 mb-0">
                付款成功
              </h3>
              <router-link
                :to="{name: 'products'}"
                class="btn btn-primary btn-block btn-lg rounded-0"
              >
                繼續逛逛
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="orderConfirm__detail orderConfirm__detail--orderSuc">
            <div class="shoppingBlock">
              <div class="shoppingBlock__header text-center">
                <h4 class="mb-0">
                  訂單明細
                </h4>
                <p class="orderSuc__numId mb-0">
                  訂單編號:{{ orderId }}
                </p>
              </div>
              <button class="orderConfirm__collapseBtn btn btn-block" type="button" data-toggle="collapse" data-target="#collapseOrder" aria-expanded="false">
                <i class="orderConfirm__collapseIcon fas fa-chevron-down" />
              </button>
              <div id="collapseOrder" class="collapse collapse--Order">
                <div class="shoppingBlock__body">
                  <div class="prdList">
                    <div class="prdList__header d-flex">
                      <div class="prdList__headerItem flex-2 align-items-center text-left">
                        商品資料
                      </div>
                      <div class="prdList__headerItem flex-1">
                        單位
                      </div>
                      <div class="prdList__headerItem flex-1">
                        單鍵售價
                      </div>
                      <div class="prdList__headerItem flex-1">
                        數量
                      </div>
                      <div class="prdList__headerItem flex-1">
                        小計
                      </div>
                    </div>
                    <ul
                      v-if="payment"
                      class="prdList__content"
                    >
                      <li v-for="prdObj in products"
                          :key="prdObj.product.id" class="prdList__row d-flex"
                      >
                        <div class="prdList__Item flex-2 text-left">
                          <img src="" alt="">
                          {{ prdObj.product.title }}
                        </div>
                        <div class="prdList__Item flex-1">
                          {{ prdObj.product.unit }}
                        </div>
                        <div class="prdList__Item flex-1">
                          {{ prdObj.product.price }}
                        </div>
                        <div class="prdList__Item flex-1">
                          {{ prdObj.quantity }}
                        </div>
                        <div class="prdList__Item flex-1">
                          {{ prdObj.quantity * prdObj.product.price }}
                        </div>
                      </li>
                    </ul>
                    <div class="orderCount d-flex justify-content-between">
                      <div class="orderCount__num">
                        共計3件
                      </div>
                      <div class="orderCount__box">
                        <div class="orderCount__list p-2">
                          <div class="d-flex justify-content-between mb-1">
                            <span>折扣金額</span>
                            <span>-NT$100</span>
                          </div>
                          <div class="d-flex justify-content-between mb-1">
                            <span>運費</span>
                            <span>NT$0</span>
                          </div>
                        </div>
                        <span class="orderCount__border" />
                        <div class="orderCount__total d-flex justify-content-between text-red">
                          <span>總計</span>
                          <span>NT{{ 44230 | dollars }}</span>
                        </div>
                        <p class="orderCount__tip mb-0 text-right pr-2">
                          <small class="text-muted">
                            皆以TWD付款
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="shoppingBlock">
            <div class="shoppingBlock__header text-center">
              <h4 class="mb-0">
                收件資訊
              </h4>
            </div>
            <div class="shoppingBlock__body">
              <div class="m-orderInfoList">
                <ul>
                  <li>
                    <span class="m-orderInfoList__itemTitle">收件人</span>
                    <span class="m-orderInfoList__itemTxt">{{ user.name }}</span>
                  </li>
                  <li>
                    <span class="m-orderInfoList__itemTitle">連絡電話</span>
                    <span class="m-orderInfoList__itemTxt">{{ user.tel }}</span>
                  </li>
                  <li>
                    <span class="m-orderInfoList__itemTitle">E-mail</span>
                    <span class="m-orderInfoList__itemTxt">{{ user.email }}</span>
                  </li>
                  <li>
                    <span class="m-orderInfoList__itemTitle">收貨地址</span>
                    <span class="m-orderInfoList__itemTxt">{{ user.address }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="shoppingBlock">
            <div class="shoppingBlock__header text-center">
              <h4 class="mb-0">
                付款資訊
              </h4>
            </div>
            <div class="shoppingBlock__body">
              <div class="m-orderInfoList">
                <ul>
                  <li>
                    <span class="m-orderInfoList__itemTitle">運送方式</span>
                    <span class="m-orderInfoList__itemTxt">宅配到府</span>
                  </li>
                  <li>
                    <span class="m-orderInfoList__itemTitle">付款金額</span>
                    <span class="m-orderInfoList__itemTxt">{{ amount | dollars }}</span>
                  </li>
                  <li>
                    <span class="m-orderInfoList__itemTitle">付款方式</span>
                    <span class="m-orderInfoList__itemTxt">{{ payment }}</span>
                  </li>
                  <li>
                    <span class="m-orderInfoList__itemTitle">付款狀態</span>
                    <span v-if="paid" class="m-orderInfoList__itemTxt text-success">已經付款</span>
                    <span v-else class="m-orderInfoList__itemTxt text-danger">尚未付款</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: '',
      message: '',
      user: {},
      coupon: {},
      amount: 0,
      products: [],
      payment: '',
      paid: false,
      created_at: '',
    };
  },
  computed: {
    thisOrder() {
      return this.$store.state.CusOrders.thisOrder;
    },
  },
  watch: {
    thisOrder() {
      const {
        id, message, user, coupon, amount, products, payment, paid, createdAt,
      } = this.thisOrder;
      this.orderId = id;
      this.message = message;
      this.user = user;
      this.coupon = coupon;
      this.amount = amount;
      this.products = products;
      this.payment = payment;
      this.paid = paid;
      this.created_at = createdAt;
    },
  },
  created() {
    if (!this.thisOrder.id) { // 以免重新整理資料不見
      const { orderId } = this.$route.query;
      this.$store.dispatch('getSingleOrder', orderId);
    }
  },

};
</script>

<style>

</style>
