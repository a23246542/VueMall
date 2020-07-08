<template>
    <div>
        <DashNavbar/>
        <DashSidebar/>
        dashboard
        <ColorPreview/>
    </div>
</template>
<script>
import DashNavbar from "@/components/DashNavbar";
import DashSidebar from "@/components/DashSidebar";
import ColorPreview from "@/components/ColorPreview";

export default {
    components:{
        DashNavbar,
        DashSidebar,
        ColorPreview
    },
    data(){
        return{
            
        }
    },
}
</script>