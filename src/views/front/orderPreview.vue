<template>
    <div>
        <div class="container">
        <!-- 可以获取到渲染进来的组件的name值 -->
            <p>{{ $route.name }}</p>
            <div class="row">
                <!-- 購物車 開始 -->
                    <Cart></Cart>
                <div class="col-md-8 mx-auto">
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
                                        <!-- 圖片 -->
                                        <!-- <div class="bg-cover"
                                            :style="{
                                                backgroundImage:`url(${item.product.imageUrl})`,
                                                width:'120px',
                                                height:'120px',
                                            }"
                                        >
                                        </div> -->
                                        <!-- <img :src="${item.product.imageUrl}" alt=""> -->
                                        <img class="img-fluid"
                                        :src="item.product.imageUrl" alt=""
                                        >
                                    </div>
                                    <div class="col-9 col-md-9"> 
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
                                                            <button class="btn btn-primary">+</button>
                                                        </span>
                                                        <input type="text" class="text-center"
                                                        style="width:30px"
                                                        v-model="item.quantity">
                                                        <span class="input-group-append">
                                                            <button class="btn btn-primary">-</button>
                                                        </span>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <!-- 小計 -->
                                                        <!-- @@top無效 -->
                                                        <!-- <p class="h4 mb-0 px-2 align-top"> -->
                                                        <p class="h4 mb-0 px-2">
                                                            {{(item.product.price*item.quantity) | dollars}}
                                                        </p>
                                                        <!-- 操作 -->
                                                        <div class="d-flex flex-column px-2">
                                                            <a href="" class="text-nowrap">移除</a>
                                                            <a href="" class="text-nowrap">愛心</a>
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
                <!-- <div class="row mb-4">
                    <div class="col-md-5 col-lg-3 col-xl-3">
                    <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img class="img-fluid w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample">
                        <a href="#!">
                        <div class="mask">
                            <img class="img-fluid w-100"
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg">
                            <div class="mask rgba-black-slight"></div>
                        </div>
                        </a>
                    </div>
                    </div>
                    <div class="col-md-7 col-lg-9 col-xl-9">
                    <div>
                        <div class="d-flex justify-content-between">
                        <div>
                            <h5>Blue denim shirt</h5>
                            <p class="mb-3 text-muted text-uppercase small">Shirt - blue</p>
                            <p class="mb-2 text-muted text-uppercase small">Color: blue</p>
                            <p class="mb-3 text-muted text-uppercase small">Size: M</p>
                        </div>
                        <div>
                            <div class="def-number-input number-input safari_only mb-0 w-100">
                            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                class="minus decrease"></button>
                            <input class="quantity" min="0" name="quantity" value="1" type="number">
                            <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                class="plus increase"></button>
                            </div>
                            <small id="passwordHelpBlock" class="form-text text-muted text-center">
                            (Note, 1 piece)
                            </small>
                        </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                                class="fas fa-trash-alt mr-1"></i> Remove item </a>
                            <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                                class="fas fa-heart mr-1"></i> Move to wish list </a>
                        </div>
                        <p class="mb-0"><span><strong id="summary">$17.99</strong></span></p class="mb-0">
                        </div>
                    </div>
                    </div>
                </div> -->
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