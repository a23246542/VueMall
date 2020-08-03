<template>
    <div>
        <div class="container">
        <!-- 可以获取到渲染进来的组件的name值 -->
            <p>{{ $route.name }}</p>
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <!-- 購物車 開始 -->
                    <Cart></Cart>
                    <!-- 購物車 結束 -->
                </div>
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
    }
}
</script>

<style>

</style>