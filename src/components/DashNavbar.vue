<template>
  <!-- <div> -->
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">後台管理系統</a>
      <input class="form-control form-control-dark w-100"
        type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#"
          @click.prevent="signOut"
          >登出</a>
        </li>
      </ul>
    </nav>
  <!-- </div> -->
</template>
<script>

export default {
    data(){
        return{
            
        }
    },
    methods:{
        signOut(){
            const api = "auth/logout";
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            this.$instanceLogin.post(api,{api_token:token})
            .then(res => {
                this.$router.push('/');
                //清除token加快速度
                document.cookie = "token='';expires='';path=/";
            })
        }
    }
}
</script>
<style lang="scss" scoped>
//    @import "../assets/scss/pages/dashboard";//##可以作用
</style>