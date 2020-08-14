<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <!-- <router-link tag="a" class="nav-link" href="#"> -->
                        
                    <!-- </router-link> -->
                    <router-link :to="{name:'dashProducts'}" tag="a" class="nav-link" href="#">
                        <span data-feather="home"></span>
                        產品列表
                        <span class="sr-only">(current)</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'訂單列表'}" tag="a" class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        訂單列表
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'優惠券列表'}" tag="a" class="nav-link" href="#">
                        <span data-feather="bar-chart-2"></span>
                        優惠券列表
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'圖片儲存列表'}" tag="a" class="nav-link" href="#">
                        <span data-feather="file"></span>
                        圖片儲存列表
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>

// feather.replace()

export default {
    data(){
        return{
            
        }
    },
}
</script>

<style lang="scss" scoped>

</style>