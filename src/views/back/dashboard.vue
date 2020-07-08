<template>
    <div>
        <DashNavbar/>
        <DashSidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <!-- <router-view></router-view> -->
            <h2 class="display-4">dashboard</h2>
            <dashProducts/>
            <ColorPreview/>
        </main>
    </div>
</template>
<script>
import DashNavbar from "@/components/DashNavbar";
import DashSidebar from "@/components/DashSidebar";
import ColorPreview from "@/components/ColorPreview";
import dashProducts from "@/views/back/dashProducts";

export default {
    components:{
        DashNavbar,
        DashSidebar,
        ColorPreview,
        dashProducts
    },
    data(){
        return{
            
        }
    },
}
</script>
<style lang="sass" scoped>
// <style lang="sass">
    // @@這樣可以嗎
    // @import "@/assets/scss/pages/dashboard";
    // @@不過這樣是否等於每個頁面都載入一次scss 
    // ##實驗加上scoped 這邊的dashboard 是吃不到all.scss的class的 
    // @import "../../assets/scss/pages/dashboard";

    // @import "../../assets/scss/all";
    // @@喂蛇么scoped后这边吃不到样式
    // @import "../../assets/scss/pages/dashboard";
</style>