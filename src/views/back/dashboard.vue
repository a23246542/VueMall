<template>
    <div class="dashboard" id="dashboard">
        <DashNavbar/>
        <DashSidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </main>
    </div>
</template>
<script>
import DashNavbar from "@/components/DashNavbar";
import DashSidebar from "@/components/DashSidebar";
import dashProducts from "@/views/back/dashProducts";


export default {
  components: {
    DashNavbar,
    DashSidebar,
    dashProducts
  },
  mounted(){
    this.$router.push({name:'dashProducts'});
  }
  
}

</script>
<style lang="scss">
    #dashboard{
        .feather {
            width: 16px;
            height: 16px;
            vertical-align: text-bottom;
        }
        .sidebar {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 100;
            /* Behind the navbar */
            padding: 48px 0 0;
            /* Height of navbar */
            box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
        }

        .sidebar-sticky {
            position: relative;
            top: 0;
            height: calc(100vh - 48px);
            padding-top: .5rem;
            overflow-x: hidden;
            overflow-y: auto;
            /* Scrollable contents if viewport is shorter than content. */
        }

        @supports ((position: -webkit-sticky) or (position: sticky)) {
            .sidebar-sticky {
            position: -webkit-sticky;
            position: sticky;
            }
        }

        .sidebar .nav-link {
            font-weight: 500;
            color: #333;
        }

        .sidebar .nav-link .feather {
            margin-right: 4px;
            color: #999;
        }

        .sidebar .nav-link.active {
            color: #007bff;
        }

        .sidebar .nav-link:hover .feather,
        .sidebar .nav-link.active .feather {
            color: inherit;
        }

        .sidebar-heading {
            font-size: .75rem;
            text-transform: uppercase;
        }



        [role="main"] {
            padding-top: 48px;
            /* Space for fixed navbar */
        }



        .navbar-brand {
            padding-top: .75rem;
            padding-bottom: .75rem;
            font-size: 1rem;
            background-color: rgba(0, 0, 0, .25);
            box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
        }

        .navbar .form-control {
            padding: .75rem 1rem;
            border-width: 0;
            border-radius: 0;
        }

        .form-control-dark {
            color: #fff;
            background-color: rgba(255, 255, 255, .1);
            border-color: rgba(255, 255, 255, .1);
        }

        .form-control-dark:focus {
            border-color: transparent;
            box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
        }



        .border-top {
            border-top: 1px solid #e5e5e5;
        }

        .border-bottom {
            border-bottom: 1px solid #e5e5e5;
        }
    }
</style>
<style lang="scss"scoped> 
// // /deep/ .dashboard {
//     // .dashboard >>> { //@@域處理器無法解析
// .dashboar /deep/ {//%%deep位置
 
// }
</style>
