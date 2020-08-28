<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
           <h5 class="px-4 mt-2 mb-1 text-muted">
              <i class="fas fa-user-cog"></i> 管理員
          </h5>
            <ul class="nav flex-column p-2">
                <li class="nav-item">
                    <!-- <router-link tag="a" class="nav-link" href="#"> -->

                    <!-- </router-link> -->
                    <router-link :to="{name:'dashProducts'}" tag="a" class="nav-link fz-35" href="#">
                        <!-- <span data-feather="home"></span> -->
                        <i class="fas fa-box-open"></i> 產品列表
                        <span class="sr-only">(current)</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'訂單列表'}" tag="a" class="nav-link fz-35" href="#">
                        <!-- <span data-feather="layers"></span> -->
                        <i class="far fa-list-alt"></i> 訂單列表
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'優惠券列表'}" tag="a" class="nav-link fz-35" href="#">
                        <!-- <span data-feather="bar-chart-2"></span> -->
                         <i class="fas fa-ticket-alt"></i> 優惠券列表
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'圖片儲存列表'}" tag="a" class="nav-link fz-35" href="#">
                        <!-- <span data-feather="file"></span> -->
                        <i class="fas fa-images"></i> 圖片儲存列表
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>

// feather.replace()

export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>

</style>
