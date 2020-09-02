<template>
    <!-- <div> -->
        <div class="container productSingle">
            <div class="row">
                <div class="col-md-6 px-0 text-center bg-white ">
                    <img :src="product.imageUrl[0]" alt=""
                    class="img-fluid"
                    style="height:500px;object-fit:contain;"
                    >
                    <!-- <p>輪播v-if</p> -->
                </div>
                <div class="col-md-6 px-35">
                    <div class="mb-3">
                      <span class="d-inline-blockpx-1 text-primary border-bottom border-primary font-weight-bold"
                        v-if="product.category"
                      >{{product.category.split('>')[1]}}系列</span>
                    </div>
                    <h2 class="text-secondary1 font-weight-bold">{{product.title}}</h2>
                    <p class="productSingle__content mb-2">{{product.content}}</p>
                    <div class="d-flex justify-content-between border-bottom">
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
                    <div class="productSingle__price d-flex align-items-baseline">
                      <span class="mr-2">NT{{product.origin_price | dollars}}</span>
                      <span><del>NT{{product.price | dollars}}</del></span>
                    </div>
                    <div class="d-flex align-items-end mb-45">
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
                    <div>
                        <button class="btn productSingle__nowBuy btn-primary mr-3">直接購買</button>
                        <button class="btn productSingle__addCar btn-primary">加入購物車</button>
                    </div>
                    <!-- <div>
                    </div> -->
                </div>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <div class="border border-muted">
                        <p>{{product.description}}</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <h3>同類商品</h3>
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
  },
};
</script>

<style lang="scss">
// @import "../../../assets/scss/helpers";
@import "./style/index.scss";
</style>
