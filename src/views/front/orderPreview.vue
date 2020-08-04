<template>
    <div>
        <div class="container">
        <!-- 可以获取到渲染进来的组件的name值 -->
            <p>{{ $route.name }}</p>
            <div class="row">
                <!-- 購物車 開始 -->
                    <Cart></Cart>
                <div class="col-md-8 mx-auto">
                    <div class="cart_box">
                        <div class="cart_header">
                            <h2>購物清單</h2>
                        </div>
                        <ul class="cart_list bg-light">
                            <li class="cart_item d-flex align-items-center mb-3"
                            v-for="(item) in cart.carts"
                            :key="item.id"
                            >
                                <!-- 圖片 -->
                                <div class="bg-cover flex-shrink-0"
                                :style="{
                                    backgroundImage:`url(${item.product.imageUrl})`,
                                    width:'120px',
                                    height:'120px',
                                }"
                                >
                                </div>
                                <!-- 名稱跟單價 -->
                                <div class="d-flex flex-column flex-4">
                                    <div>{{item.product.title}}</div>
                                    <div>{{item.product.price | dollars}}</div>
                                </div>
                                <!-- 數量加減 -->
                                <div class="input-group input-group-sm flex-nowrap flex-3">
                                    <span class="input-group-prepend">
                                        <button class="btn btn-primary">+</button>
                                    </span>
                                    <input type="text" class="text-center"
                                    v-model="item.quantity">
                                    <span class="input-group-append">
                                        <button class="btn btn-primary">_</button>
                                    </span>
                                </div>
                                <!-- 小計 -->
                                <div class="flex-3 text-center">
                                    {{item.product.price*item.quantity}}
                                </div>
                                <!-- 操作 -->
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 購物車 結束 -->
                <!-- 訂單摘要 開始 -->
                <!-- <div class="col-md-4">

                </div> -->
                <!-- 訂單摘要 結束 -->
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <!-- 顧客表單 開始 -->
                    <CustomerForm></CustomerForm>
                    <!-- 顧客表單 結束 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cart from "@/components/Cart";
import CustomerForm from "@/components/CustomerForm";

export default {
    components:{
        Cart,
        CustomerForm
    },
    created() {
        this.getCart();
    },
    methods:{
        getCart(){
            this.$store.dispatch('getCart');
        }
    },
    computed:{
        cart(){
            return this.$store.state.cart;
        },
        cartTotal(){
            return this.$store.getter.cartTotal;
        }
    }
}
</script>

<style>

</style>