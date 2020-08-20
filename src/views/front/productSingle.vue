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
                    <h2>{{product.title}}</h2>
                    <p>{{product.content}}</p>
                    <!-- <span>{{product.origin_price | dollars}}</span>/<span>{{product.price | dollars}}</span> -->
                    <span>{{product.origin_price}}</span>/<span>{{product.price}}</span>
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
                        <button class="btn btn-primary">加入購物車</button>
                    </div>
                    <!-- <div>
                    </div> -->
                </div>
            </div>
            <div class="row">
                <div class="bg-secondary">
                    <p>{{product.description}}</p>
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
            id:'',
            product:{
                imageUrl:[],//@@會被蓋掉寫了有用嗎?
                qty:1
            }
        }
    },
    created() {
        this.getSingleProduct();
    },
    methods:{
        getSingleProduct(){
            this.id = this.$route.params.productId;

            this.$store.commit('LOADING',true);
            const api = `ec/product/${this.id}`;
            this.$instanceCus.get(api)
            .then((res)=>{
                this.$store.commit('LOADING',false);
                this.product = res.data.data;
                // this.product.qty=1;
                // this.$set(this.product,qty,1);//%%qrt nodefined
                this.$set(this.product,'qty',1);
            })
        }
    }
}
</script>

<style>

</style>