<template>
    <div class="container-fluid pt-5" id="products"> 
        <div class="row flex-row-reverse">
            <div class="col-2">
                <!-- <table class="table table-sm" v-if="cart.carts.length"> -->
                <table class="table table-sm">
                    <thead>
                    <th>已選購商品</th>
                    <!-- <th></th>
                    <th>品名</th>
                    <th>數量</th>
                    <th>單價</th> -->
                    </thead>
                    <tbody>
                        <tr v-for="item in carts" :key="item.product.id">
                            <td class="align-middle text-center">
                                <a
                                href="#"
                                class="text-muted"
                                @click.prevent="deleteModal(item)"
                                >
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                </a>
                            </td>
                            <td class="align-middle">
                                {{ item.product.title }}
                                <!-- <div class="text-success" v-if="item.coupon">
                                已套用優惠券
                                </div> -->
                            </td>
                            <td class="align-middle">x{{ item.quantity }}</td>
                            <!-- <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td> -->
                            <td class="align-middle text-center">
                                {{ (item.quantity* item.product.price) | currency }}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" class="text-right">總計</td>
                            <td class="text-right">{{ cart.total }}</td>
                        </tr>
                        <tr>
                            <td colspan="3" class="text-right text-success">折扣價</td>
                            <td class="text-right text-success">{{ cart.final_total }}</td>
                        </tr>
                    </tfoot>
                </table>
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
                                        <select class="form-control"
                                        v-model="product.num"
                                        >
                                            <option v-for="i in 5" :key="'num'+i"
                                            :value="i"
                                            >{{i}}</option>
                                        </select>
                                    </div>
                                    <div class="h3 ml-2">
                                        {{item.price}}
                                    </div>
                                    <a href="#" class="btn bg-green ml-auto"
                                    @click.prevent="addToCart(item.id,product.num)"
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

export default {
    data() {
        return { 
            product:{
                num:1,//要雙向綁定預設值%%%
            },
            products:[],
            cartData:{},

        }
    },
    computed:{
        carts(){
            return this.cartData.data;
        }
    },
    created() {
        this.getProducts();
        this.getCart();
        // this.delAllCart();
    },
    methods:{
        getProducts(){
            const api ="ec/products";
            instanceCus.get(api)
            .then((res) => {
                this.products = res.data.data;
            })
        },
        openSingleProduct(id) {
            this.$router.push(`/products/${id}`);
        },
        getCart(){
            const api ="ec/shopping"
            instanceCus.get(api)
            .then((res) => {
                console.log("上面是取得購物車");
                this.cartData = res.data;
            })
        },
        addToCart(id,qty=1){
            console.log(id,qty);
            const api ="ec/shopping";
            const cartItem = {product:id,quantity:qty};
            instanceCus.post(api,cartItem)
            .then((res) => {
                this.getCart();
            })

        },
        editCart(id,qty){
            const api ="ec/shopping"
            const cartItem = {product:id,quantity:qty};
            instanceCus.patch(api,cartItem)
            .then((res) => {
                this.getCart();
            })
        },
        delCart(id,qty){
            const api ="ec/shopping";
            const cartItem = {product:id};
            instanceCus.delete(api,cartItem)
            .then((res) => {
                this.getCart();
            })
        },
        delAllCart(){
            // DELETE api/{uuid}/ec/shopping/all/product
            const api ="ec/shopping/all/product";
            instanceCus.delete(api)
            .then((res) => {
                this.getCart();
            })
        }
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