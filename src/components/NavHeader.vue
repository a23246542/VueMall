<template>
  <nav class="navHeader navbar navbar-expand-lg">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Logo</a> -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navHeader__navbar navbar-nav w-lg-100">
          <div class="d-flex align-items-center">
            <li class="navHeader__navItem nav-item">
              <!-- <a class="nav-link" href="#">首頁 <span class="sr-only">(current)</span></a> -->
              <router-link :to="{name:'home'}" tag="a" class="navHeader__navLink nav-link">
                首頁<span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="navHeader__navItem nav-item">
              <router-link :to="{name:'關於我們'}" tag="a" class="navHeader__navLink nav-link">
                品牌介紹<span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="navHeader__navItem nav-item">
              <!-- <a class="nav-link" href="#">首頁 <span class="sr-only">(current)</span></a> -->
              <router-link :to="{name:'products'}" tag="a" class="navHeader__navLink nav-link">
                商品一覽<span class="sr-only">(current)</span>
              </router-link>
            </li>
          </div>
          <router-link :to="{name:'home'}" class="navHeader__logo navbar-brand" tag="a">
            <img src="@/assets/images/Meta-logo-white.png" alt="">
            <h1 class="text-hide mb-0">
              meta
            </h1>
          </router-link>
          <div class="d-flex align-items-center">
            <li class="navHeader__navItem nav-item">
              <!-- <span class="badge badge-pill badge-danger">3</span> -->
              <router-link :to="{name:'home'}" class="navHeader__navLink nav-link">
                我的訂單<span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="navHeader__navItem p-sm nav-item">
              <router-link :to="{name:'home'}" tag="a" class="navHeader__navLink navHeader__navLink--icon nav-link">
                <i class="fas fa-heart text-white"></i>
              </router-link>
            </li>
            <li class="navHeader__navItem p-sm nav-item">
              <!-- <CartModal
                        ref="cart"
                        @emitCart="getEmitCart"
                        /> -->
              <CartModal
                ref="cartModal"
              />
            </li>
            <li class="navHeader__navItem p-sm nav-item">
              <router-link :to="{name:'Dashboard'}" tag="a" class="navHeader__navLink navHeader__navLink--icon nav-link">
                <i class="fas fa-user-cog" style="user-select: auto;"></i>
              </router-link>
            </li>
          </div>
          <!-- <li class="nav-item">
                      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import CartModal from '@/components/CartModal.vue';

export default {
  name: 'NavHeader',
  components: {
    CartModal,
  },
};
</script>
