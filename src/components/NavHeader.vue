<template>
  <nav class="navHeader navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <router-link
        :to="{name:'home'}"
        class="navHeader__logo navbar-brand d-lg-none"
        tag="a"
      >
        <img
          src="@/assets/images/Meta-logo-white.png"
          alt=""
        >
        <h1 class="text-hide mb-0">
          meta
        </h1>
      </router-link>
      <WishModal
        class="d-lg-none"
      />
      <CartModal
        ref="cartModal"
        class="d-lg-none"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNav"
        class="collapse navbar-collapse"
      >
        <ul class="navHeader__navbar navbar-nav w-lg-100">
          <div class="m-navbarNav d-flex align-items-center">
            <li class="navHeader__navItem nav-item">
              <router-link
                :to="{name:'關於我們'}"
                tag="a"
                class="navHeader__navLink nav-link"
              >
                品牌介紹<span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="navHeader__navItem nav-item">
              <router-link
                :to="{name:'products'}"
                tag="a"
                class="navHeader__navLink nav-link"
              >
                商品一覽<span class="sr-only">(current)</span>
              </router-link>
            </li>
          </div>
          <router-link
            :to="{name:'home'}"
            class="navHeader__logo navbar-brand d-none d-lg-inline-block"
            tag="a"
          >
            <img
              src="@/assets/images/Meta-logo-white.svg"
              alt=""
            >
            <h1 class="text-hide mb-0">
              meta
            </h1>
          </router-link>
          <div class="m-navbarNav d-flex align-items-center">
            <!-- <li class="navHeader__navItem nav-item">
              <router-link
                :to="{name:'orderList'}"
                class="navHeader__navLink nav-link"
                :disabled="true"
              >
                我的訂單<span class="sr-only">(current)</span>
              </router-link>
            </li> -->
            <li class="navHeader__navItem m-none p-sm nav-item">
              <WishModal />
            </li>
            <li class="navHeader__navItem m-none p-sm nav-item">
              <CartModal
                ref="cartModal"
              />
            </li>
            <li class="m-admin navHeader__navItem p-sm nav-item">
              <router-link
                :to="{name:'Dashboard'}"
                tag="a"
                class="navHeader__navLink navHeader__navLink--icon nav-link"
              >
                <i
                  class="fas fa-user-cog"
                  style="user-select: auto;"
                />
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import CartModal from '@/components/CartModal.vue';
import WishModal from '@/components/WishModal.vue';

export default {
  name: 'NavHeader',
  components: {
    CartModal,
    WishModal,
  },
};
</script>

<style lang="scss" scoped>
// @import "../assets/scss/helpers/helpers.scss";
// @import "../assets/scss/all.scss";
.navbar-dark .navbar-nav .nav-link{
  &:hover{
    color: #fff;
    // color: $link-hover-color;
  }
}
</style>
