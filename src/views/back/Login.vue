<template>
  <div
    class="form-page text-center"
    style="height:100vh"
  >
    <form
      class="form-signin"
      @submit.prevent="signIn"
    >
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <label
        for="inputEmail"
        class="sr-only"
      >電子信箱</label>
      <input
        id="inputEmail"
        v-model="user.email"
        type="email"
        class="form-control mb-3"
        placeholder="Email address"
        required
        autofocus
      >
      <label
        for="inputPassword"
        class="sr-only"
      >密碼</label>
      <input
        id="inputPassword"
        v-model="user.password"
        type="password"
        class="form-control mb-4"
        placeholder="Password"
        required
      >
      <button
        class="btn btn-lg btn-primary btn-block"
        type="submit"
      >
        登入
      </button>
      <p class="mt-5 mb-3 text-muted">
        &copy; 2017-2020
      </p>
    </form>
  </div>
</template>

<script>
import { instanceLogin } from '@/api/https';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: 'a23246542@gmail.com',
        password: 'Admin5566',
      },
    };
  },
  methods: {
    signIn() {
      this.$store.commit('LOADING', true);
      const api = 'auth/login';
      instanceLogin.post(api, this.user)
        .then((res) => {
          this.$store.commit('LOADING', false);
          if (res.data.success) {
            const { token } = res.data;// 跨页面cookeies
            const { expired } = res.data;
            const { uuid } = res.data;

            document.cookie = `token=${token}; uuid=${uuid};
            expires=${new Date(expired * 1000)}; path=/`;
            this.$router.push('/admin');
          }
        })
        .catch(() => {
          // console.log(err);
        });
    },

  },
};
</script>

<style lang="scss" scoped>
  .form-page{
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
</style>
