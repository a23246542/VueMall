<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <!-- <a class="nav-link" href="#">首頁 <span class="sr-only">(current)</span></a> -->
                    <router-link :to="{name:'home'}" tag="a" class="nav-link">首頁<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="#">首頁 <span class="sr-only">(current)</span></a> -->
                    <router-link :to="{name:'products'}" tag="a" class="nav-link">產品<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'關於我們'}" tag="a" class="nav-link">關於我們<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <!-- <span class="badge badge-pill badge-danger">3</span> -->
                    <router-link :to="{name:'優惠券'}" tag="a" class="nav-link">優惠券<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <!-- <CartModal
                    ref="cart"
                    @emitCart="getEmitCart"
                    /> -->
                    <CartModal
                    ref="cartModal"
                    />
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'我的訂單'}" tag="a" class="nav-link">我的訂單</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'Dashboard'}" tag="a" class="nav-link">後台管理</router-link>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> -->
            </ul>
        </div>
    </nav>
</template>
<script>
import CartModal from '@/components/CartModal';

export default {
  name: 'nav-header',
  components: {
    CartModal,
  },
};
</script>
