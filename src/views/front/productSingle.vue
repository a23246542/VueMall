<template>
    <!-- <div> -->
        <div class="container productSingle"
        v-if="product.imageUrl[0]"
        >
            <div class="row mb-45">
                <div class="col-md-6 px-0 text-center">
                    <img :src="product.imageUrl[selectedImgIndex]" alt=""
                      class="img-fluid mb-3 bg-white"
                      style="height:500px;object-fit:contain;"
                    >
                    <div class="overflow-x-auto productSingle__cusScroll">
                      <ul class="d-flex productSingle__thumbImgs mb-0 list-unstyled"
                      >
                        <li class="thumbImgs__oneThumbImg flex-shrink-0 bg-cover"
                          v-for="(item,index) in product.imageUrl" :key="item"
                          @click="setThumbImgIndex(index)"
                          :class="{
                            'thumbImgs__oneThumbImg--selected':selectedImgIndex==index,
                          }"
                          :style="{
                            backgroundImage:`url(${product.imageUrl[index]})`
                          }"
                        >
                          <!-- @@li會爆掉須研究 -->
                          <!-- <img :src="product.imageUrl[index+1]" alt=""
                            class=""
                            style="height:100%;object-fit:cover;"
                          > -->
                        </li>
                      </ul>
                    </div>
                </div>
                <div class="col-md-6 pl-4">
                    <div class="mb-3">
                      <span class="d-inline-block px-1 text-primary border-bottom border-primary font-weight-bold"
                        v-if="product.category"
                      >{{product.category.split('>')[1]}}系列</span>
                    </div>
                    <h2 class="text-secondary1 font-weight-bold">{{product.title}}</h2>
                    <p class="productSingle__content mb-2">{{product.content}}</p>
                    <div class="d-flex justify-content-between mb-5 border-bottom">
                      <small class="productSingle__id"
                        v-if="product.id"
                      >
                        產品編號{{product.id.slice(-5).toUpperCase()}}
                      </small>
                      <!-- <span>{{product.origin_price | dollars}}</span>/<span>{{product.price | dollars}}</span> -->
                      <span class="productSingle__favorite text-primary"
                        v-if="true"
                      >
                        加入收藏 <i class="far fa-heart"></i>
                      </span>
                      <span class="productSingle__favorite text-primary"
                        v-if="false"
                      >
                        加入收藏 <i class="fas fa-heart"></i>
                      </span>
                    </div>
                    <div class="productSingle__price d-flex align-items-baseline mb-3"
                    >
                      <span class="mr-2">NT{{product.origin_price | dollars}}</span>
                      <span><del>NT{{product.price | dollars}}</del></span>
                    </div>
                    <div class="d-flex align-items-end mb-6">
                      <!-- ##input-group -->
                      <div class="input-group w-auto">
                          <div class="input-group-prepend">
                              <button class="btn btn-secondary">+</button>
                          </div>
                          <input type="text" class="form-control text-center"
                              style="max-width:100px"
                              v-model.number="product.qty"
                          >
                          <div class="input-group-append mr-3">
                              <button class="btn btn-secondary">-</button>
                          </div>
                      </div>
                      <small class="text-success">尚有庫存</small>
                    </div>
                    <!-- <div class="productSingle__buyArea d-flex justify-content-end pr-4"> -->
                    <div class="productSingle__buyArea">
                        <button class="btn productSingle__nowBuy btn-primary mr-3">直接購買</button>
                        <button class="btn productSingle__addCar btn-primary">加入購物車</button>
                    </div>
                    <p class="pl-2 mb-5"><small class="text-muted"> 付款後，從備貨到寄出商品為 2 個工作天。（不包含假日）</small></p>
                    <!-- <div>
                    </div> -->
                    <div class="promoTags">
                      <div class="promoTags__title border-bottom">
                        <span>優惠活動</span>
                      </div>
                      <div class="promoTags__container">
                        <ul class="pl-3 mt-3 list-unstyled">
                          <li class="promoTags__tag">
                            <span class="d-inline-block p-1 bg-primary text-white">折扣</span>
                            <span class="d-inline-block py-1 pl-2 pr-4 bg-white text-gray">全館商品滿萬送折扣券</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-7 px-0">
                    <div class="productInfo">
                      <div class="productInfo__nav">
                        <ul class="d-flex mb-0">
                          <li class="nav__item nav__item--active">商品內容</li>
                          <li class="nav__item">商品規格</li>
                          <li class="nav__item">運送規範</li>
                        </ul>
                      </div>
                      <div class="productInfo__content  bg-white text-secondary2">
                          <p>{{product.description}}</p>
                      </div>
                    </div>
                </div>
                <div class="col-sm-5">
                  <div class="sideProductList">
                    <div class="sideProductList__title">
                      <h4>相關產品列表</h4>
                    </div>
                    <div class="sideProductList__group">
                        <ul>
                          <li class="sidePrdItem px-2 py-2 border bg-white">
                            <div class="d-flex">
                              <div class="sidePrdItem__infoBox">
                                <!-- @@?? -->
                                <!-- 自創這個做法會有問題嗎 -->
                                <!-- <div class="_infoBox__title"></div> -->
                                <div class="sidePrdItem__title">TOUGH SCREEN 2-ROOM  LDX+</div>
                                <div class="sidePrdItem__price">
                                  NT$25900<small><del>NT$28500</del></small>
                                </div>
                                <span class="sidePrdItem__subClassTag">帳篷</span>
                              </div>
                              <!-- @@picBox 或boxPic -->
                              <div class="sidePrdItem__picBox">
                                <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ElMZQRdRo6pphFa3yXexkWRj9TyIbGJRUcMyxwFYn344qaMlWIeSK3PhSGTWN9iZQcGUaSD3EDhn05jOmmGzxnEckuiXJKZUPqPkNEwvMEg8gWkUj92wYDuxRxYFIe6Z.png" alt="">
                              </div>
                            </div>
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <!-- <h2>

        </h2>
    </div> -->
</template>

<script>
export default {
  data() {
    return {
      id: '',
      product: {
        imageUrl: [], // @@會被蓋掉寫了有用嗎?
        qty: 1,
      },
      selectedImgIndex:0
    };
  },
  created() {
    this.getSingleProduct();
  },
  methods: {
    getSingleProduct() {
      this.id = this.$route.params.productId;

      this.$store.commit('LOADING', true);
      const api = `ec/product/${this.id}`;
      this.$instanceCus.get(api)
        .then((res) => {
          this.$store.commit('LOADING', false);
          this.product = res.data.data;
          // this.product.qty=1;
          // this.$set(this.product,qty,1);//%%qrt nodefined
          this.$set(this.product, 'qty', 1);
        });
    },
    setThumbImgIndex(index){
        this.selectedImgIndex = index;
    }
  },
};
</script>

<style>

</style>
