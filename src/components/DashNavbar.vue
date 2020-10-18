<template>
  <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <a
      class="navbar-brand col-sm-3 col-md-2 mr-0"
      href="#/admin/products"
    >後台管理系統</a>
    <input
      class="form-control form-control-dark w-100 flex-shrink-1"
      type="text"
      placeholder="Search"
      aria-label="Search"
    >
    <ul class="navbar-nav flex-row px-3">
      <li class="nav-item mx-2 text-nowrap">
        <router-link
          tag="a"
          class="nav-link"
          :to="{name:'home'}"
        >
          回首頁
        </router-link>
      </li>
      <li class="nav-item text-nowrap mx-2">
        <a
          class="nav-link"
          href="#"
          @click.prevent="signOut"
        >登出</a>
      </li>
    </ul>
  </nav>
</template>
<script>

export default {
  data() {
    return {

    };
  },
  methods: {
    signOut() {
      const api = 'auth/logout';
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');// eslint(no-useless-escape)
      this.$instanceLogin.post(api, { api_token: token })
        .then(() => {
          this.$router.push('/');
          // 清除token加快速度
          document.cookie = "token='';expires='';path=/";
        });
    },
  },
};
</script>
