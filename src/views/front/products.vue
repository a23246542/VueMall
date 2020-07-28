<template>
    <div class="container-fluid pt-5" id="products"> 
        <div class="row">
            <!-- <div class="col-2"></div> -->
            <div class="col-10 mx-auto">
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
                                        
                                        <select class="form-control"
                                        
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
                                    @click.prevent="addToCart(item.id)"
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
            products:[]

        }
    },
    created() {
        // this.getProducts();
        this.getCart();
    },
    methods:{
        getProducts(){
            const api ="ec/products";
            instanceCus.get(api)
            .then((res) => {
                this.products = res.data.data;
            })
        },
        addToCart(id,qty=1){
            console.log(id,qty);
            // instanceCus.post(api,)
        },
        getCart(){
            const api ="ec/shopping"
            instanceCus.get(api)
            .then((res) => {
                console.log(res);
            })
        },
        editCart(){
            const api ="ec/shopping"
            instanceCus.patch(api,{product:id,quantity:"1"})
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