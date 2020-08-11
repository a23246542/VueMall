<template>
    <div>
        <div class="container">
        <!-- 獲取渲染進來的组件name值 -->
            <!-- <p>{{ $route.name }}</p> -->
            <div class="row">
                <!-- 購物車 開始 -->
                <div class="col-md-8">
                    <div class="mb-4">
                        <div class="cart__box pt-4">
                            <div class="cart__header mb-2">
                                <h2>購物清單 有{{cart.carts.length}}項</h2>
                            </div>
                            <div class="cart__body p-4 bg-light">
                                <div class="cart__item row mb-3"
                                v-for="(item) in cart.carts"
                                :key="item.id"
                                >
                                    <div class="col-3 col-md-3">
                                    <!-- <div class="flex-1"> -->
                                        <!-- 圖片 -->
                                        <img class="img-fluid"
                                        :src="item.product.imageUrl" alt=""
                                        >
                                    </div>
                                    <div class="col-9 col-md-9"> 
                                    <!-- <div class="flex-3">  -->
                                        <!-- @@row是否需要搭配h-100 -->
                                        <div class="row h-100">
                                            <!-- 名稱跟單價 -->
                                            <!-- <div class="col-md-6 align-self-md-center"> -->
                                            <div class="col-md-6">
                                                <div class="d-flex flex-column h-100">
                                                    <div class="fz-2 fw-b mb-md-2">{{item.product.title}}</div>
                                                    <div class="fz-3">{{item.product.price | dollars}}</div>
                                                </div>
                                            </div>
                                            <!-- <div class="col-md-6 align-self-md-center"> -->
                                            <div class="col-md-6">
                                                <div class="d-flex justify-content-between align-items-center h-100">
                                                    <!-- 數量加減 -->
                                                    <div class="input-group input-group-sm d-inline-flex w-auto flex-nowrap">
                                                        <span class="input-group-prepend">
                                                            <button class="btn btn-primary"
                                                            @click.prevent="updateCartQty('add1',item)"
                                                            >+</button>
                                                        </span>
                                                        <!-- <input type="text" class="text-center"%%% -->
                                                        <input type="text" class="text-center form-control"
                                                        style="width:30px"
                                                        v-model.number="item.quantity"
                                                        @input="updateCartQty('input',item)"
                                                        >
                                                        <!-- <input type="text" class="text-center form-control"
                                                        style="width:30px"
                                                        v-model.number="item.quantity"
                                                        v-debounce:100s="updateCartQty('input',item)"
                                                        :debounce-events="'input'"
                                                        > -->
                                                        <span class="input-group-append">
                                                            <button class="btn btn-primary"
                                                            @click.prevent="updateCartQty('subtract1',item)"
                                                            >-</button>
                                                        </span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <!-- 小計 -->
                                                        <!-- @@top -->
                                                        <!-- <p class="h4 mb-0 px-2 align-top"> -->
                                                        <p class="h4 mb-0 px-2">
                                                            {{(item.product.price*item.quantity) | dollars}}
                                                        </p>
                                                        <!-- 操作 -->
                                                        <div class="d-flex flex-column px-2">
                                                            <a href="" class="text-nowrap"
                                                            @click.prevent ="removeCart(item)"
                                                            >移除</a>
                                                            <a href="" class="text-nowrap">收藏</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="d-flex justify-content-between align-items-center"> -->
                                        <!-- </div> -->
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <!-- 購物車 結束 -->
                <div class="col-md-4">
                    <h3>訂單摘要</h3>
                    <p>小計{{cartTotal}}</p>
                    <router-link tag="a" href="#" class="btn btn-primary btn-block"
                    :to="{name:'收件資訊'}"
                    >下一步</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Cart from "@/components/Cart";
import { debounce } from 'vue-debounce'


export default {
    components:{
        // Cart,
    },
    data() {
        return{
            // cart:this.cart
        }
    },
    created() {
        // this.debounceInputCart = debounce(this.updateCartQty('subtract1',item),'400')
        this.getCart();
    },
    methods:{
        getCart(){
            this.$store.dispatch('getCart');
        },
        updateCartQty(type,item){
            const productId = item.product.id;
            let qty = item.quantity;
            // let num = qty;
            switch (type) {
                case 'add1':
                    
                    qty+=1;
                    break;
                case 'subtract1':
                    
                    qty-=1;
                    break;
                case 'input':
                    break;
                    
            }
            console.log("更新购物车",productId,qty);
            // this.$store.dispatch('editCart',{id,qty});//@@
            const data = {
                productId,
                newQty:qty
            }
            
            this.$store.dispatch('editCart',data);
        },
        removeCart(item){
            const productId = item.product.id;
            this.$store.dispatch('delCart',productId);
        }
    },
    computed:{
        cart(){
            return this.$store.state.Cart.cart;
        },
        cartTotal(){
            return this.$store.getters.cartTotal;
        },
        // carts(){
        //     return this.$store.state.Cart.cart.carts;
        // }
    },
    watch:{
        ['cart.carts']:{
        // carts:{
            handler:function(newVal,oldVal){
                console.log(newVal);
                console.log(oldVal);
                
            },
            deep:true
        }
    }
}
</script>

<style>

</style>