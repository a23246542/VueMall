<template>
    <div>
        <DashNavbar/>
        <DashSidebar/>
        dashboard
    </div>
</template>
<script>

import DashNavbar from "@/components/DashNavbar";
import DashSidebar from "@/components/DashSidebar";

export default {
    components:{
        DashNavbar,
        DashSidebar
    },
    data(){
        return{
            
        }
    },
}
</script>