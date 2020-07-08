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
// import {uuid,token,apiPath} from './api/index';//@@失敗
// const uuid = '82a32758-aadc-4405-b535-2f6a678989d8';
// const token = '7yaPDgRGh5hHKAkAeIUtl1H3yiFQS6wN8a6Cs0gGSFZNYaC45Mi02hhDcHZt';
// const apiPath = 'https://course-ec-api.hexschool.io/';

export default {
    components:{
        DashNavbar,
        DashSidebar,
        ColorPreview,
        dashProducts
    },
    // created(){
    mounted(){
        this.getData();
    },
    data(){
        return{
            res:{},
            uuid:'82a32758-aadc-4405-b535-2f6a678989d8',
            // uuid:uuid,
        }
    },
    methods:{
        getData(){
            const vm = this;
            console.log('getData');
            vm.$http.get(`api/{uuid}/admin/ec/products`)
            // vm.$http.get(`api/{uuid}/admin/ec/products`)
            .then(res => {
                vm.res = res;
            })
        }
    }
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