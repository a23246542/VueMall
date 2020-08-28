<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center">
                    <img :src="product.imageUrl[0]" alt=""
                    class="img-fluid"
                    style="height:500px;object-fit:contain;"
                    >
                    <!-- <p>輪播v-if</p> -->
                </div>
                <div class="col-md-6">
                    <small>商品編號{{product.id.slice(-5)}}</small>
                    <h2>{{product.title}}</h2>
                    <p>{{product.content}}</p>
                    <!-- <span>{{product.origin_price | dollars}}</span>/<span>{{product.price | dollars}}</span> -->
                    <small class="text-success">尚有庫存</small>
                    <div class="d-flex justify-content-between">
                        <div>
                            <span>{{product.origin_price}}</span>
                            <br>
                            <span>{{product.price}}</span>
                        </div>
                        <div>
                            加入收藏
                        </div>
                    </div>
                    <div class="input-group">
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
                    <div>
                        <button class="btn btn-primary mr-3">直接購買</button>
                        <button class="btn btn-primary">加入購物車</button>
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
        <h2>

        </h2>
    </div>
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

<style>

</style>
