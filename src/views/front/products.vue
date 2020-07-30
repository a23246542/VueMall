<template>
    <div class="container-fluid pt-5" id="products">
        <Alert></Alert>
        <div class="row flex-row-reverse">
            <div class="col-2">
                <!-- <table class="table table-sm" v-if="cart.carts.length"> -->
                <Cart
                ref="cart"
                @emitCart="getEmitCart"
                />
            </div>

            
            <!-- <div class="col-10 mx-auto"> -->
            <div class="col-10">
                <div class="row">
                    <div class="col-4 mb-5" v-for="(item) in products" :key="item.id">
                        <div class="card">
                            <img :src="item.imageUrl[0]" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">
                                    {{item.title}}
                                    <span class="badge badgeColor">{{item.category}}</span>
                                </h5>
                                <p class="card-text text-truncate lineCamp--4 text-wrap">
                                    {{item.content}}
                                </p>
                                <div class="d-flex">
                                    <div class="form-inline">
                                        <!-- ###寫入只能用v-model了 -->
                                        
                                        <!-- <select class="form-control"
                                        v-model="product.num"
                                        >
                                            <option v-for="i in 5" :key="'num'+i"
                                            :value="i"
                                            >{{i}}</option>
                                        </select> -->

                                        <select class="form-control"
                                        v-model="item.num"
                                        >
                                            <option :value="1" selected >1</option>
                                            <option v-for="i in 5" :key="'num'+i"
                                            :value="i+1"
                                            >{{i+1}}</option>
                                        </select>
                                    </div>
                                    <div class="h3 ml-2">
                                        {{item.price}}
                                    </div>
                                    <a href="#" class="btn bg-green ml-auto"
                                    @click.prevent="addToCart(item.id,item.num)"
                                    >加入購物車</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import {instanceCus} from '../../api/https';
import Cart from '@/components/Cart';
import Alert from '@/components/BaseAlertMessage';

export default {
    components:{
        Cart,
        Alert
    },
    data() {
        return { 
            // product:{//點擊那個modal再出現
            //     num:1,//要雙向綁定預設值%%%
            // },
            products:[],
            carts:[]//子組件購物車的

        }
    },
    computed:{
    },
    created() {
        this.getProducts();
    },
    methods:{
        getProducts(){
            this.$store.commit('LOADING',true);
            const api ="ec/products";
            instanceCus.get(api)
            .then((res) => {
                this.products = res.data.data;
                //###%% 可先暫時寫入api外的，幫助渲染
                this.products.forEach((item) => {
                    // item.num = 1;
                    this.$set(item,'num',1);
                })
                this.$store.commit('LOADING',false);
            })
        },
        //接收資料 子傳父元件
        getEmitCart(carts){
            this.carts = carts;
        },
        addToCart(id,qty=1){
            console.log(id,qty);
            // this.$store.commit('LOADING',true);
            const api ="ec/shopping";
            const cartItem = {product:id,quantity:qty};
            this.$instanceCus.post(api,cartItem)
            .then((res) => {
                this.$refs.cart.getCart();
            })
            // .catch((err) => {
            //     console.dir(err.response.data.message);
            //     if(err.response.data.errors[0]==="該商品已放入購物車當中。"){
            //         const originNum = this.carts
            //         this.$refs.cart.editCart(id,)
            //     }
            // })
        },
        openSingleProduct(id) {
            this.$router.push(`/products/${id}`);
        },

    }
}
</script>

<style lang="scss">
    #products{
        background-color: #FFFCE5;
        font-family:'Microsoft JhengHei',-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

        .bg-green{
            background-color: #6BB82D !important;
            color: #fff;
        }
        .lineCamp--4{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            line-clamp:3;
            -webkit-line-clamp: 3;
        }
        .badgeColor{
            /* background-color: #F2A594; */
            background-color: #F29E38;
        }
    }
</style>