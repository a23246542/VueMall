<template>
  <div class="orderSuc">
    <div class="container">
      <div class="orderConfirm__title mb-3 text-center">
        <h3>付款成功!</h3>
      </div>
      <p class="mb-3 text-center">
        運送時間為5~7個工作天內宅配到貨或是通知指定門市取貨
      </p>
      <div class="row">
        <div class="col">
          <div class="orderSuc__pic"></div>
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
                  訂單編號:S451421444111
                </p>
              </div>
              <button class="orderConfirm__collapseBtn btn btn-block" type="button" data-toggle="collapse" data-target="#collapseOrder" aria-expanded="false">
                <i class="orderConfirm__collapseIcon fas fa-chevron-down"></i>
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
                    <ul class="prdList__content">
                      <li class="prdList__row d-flex">
                        <div class="prdList__Item flex-2 text-left">
                          <img src="" alt="">
                          商品資料
                        </div>
                        <div class="prdList__Item flex-1">
                          組
                        </div>
                        <div class="prdList__Item flex-1">
                          2565
                        </div>
                        <div class="prdList__Item flex-1">
                          1
                        </div>
                        <div class="prdList__Item flex-1">
                          26585
                        </div>
                      </li>
                      <li class="prdList__row d-flex">
                        <div class="prdList__Item flex-2 text-left">
                          <img src="" alt="">
                          商品資料
                        </div>
                        <div class="prdList__Item flex-1">
                          組
                        </div>
                        <div class="prdList__Item flex-1">
                          2565
                        </div>
                        <div class="prdList__Item flex-1">
                          1
                        </div>
                        <div class="prdList__Item flex-1">
                          26585
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
                        <span class="orderCount__border"></span>
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
        <!-- <div class="col-6 d-flex justify-content-center align-items-center">
            <div class="content">
              <h2>訂單已建立</h2>
              <a>去付款</a>
              <router-link :to="{name:'products'}">
                繼續選購
              </router-link>
            </div>
          </div>
          <div class="col-6">
            <div class="bg-cover"
                style="min-height:calc(100vh - 72px);background-image: url(https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
            ></div>
          </div> -->
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
                    <span class="m-orderInfoList__itemTxt">王曉明</span>
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
                </ul>
                <button class="btn btn-primary btn-block py-1">
                  確認付款
                </button>
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

};
</script>

<style>

</style>
