import Vue from 'vue';
// npm套件
import './plugins/loading';
import './plugins/vee-validate';
import './plugins/vue-debounce';
import './plugins/vue-sweetalert2';
import './filters';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
// import 'jquery';//@@跟上面差別
// @@全域效能問題
import 'popper.js';
import 'bootstrap';// js模組
// @@不寫.css載入js
// import 'bootstrap/scss/bootstrap.scss';//all.scss import了
// import 'bootstrap';
// import './assets/scss/helpers/_helpers.scss';//@@
// =================================================
// ##自定義
// import {uuid,token,apiPath} from './api/index';
import App from './App.vue';
import router from './router';
import store from './store';
import { instanceLogin } from './api/https';
import './bus';
import mockFn from './api/apis';

window.$ = $;
// import filters from './filters';

// @@ 改在import掛載
// Vue.prototype.$instanceLogin = instanceLogin;
// Vue.prototype.$instanceAdmin = instanceAdmin;
// Vue.prototype.$instanceCus = instanceCus;

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);// ##原本的是可以this.axios.get()調用

// mock開關
const mock = false;
if (mock) {
  // require('./mock/api.js');
  // const mockData = require('./mock/api.js');
  // console.log(mockData);
  mockFn();
}
// axios.defaults.timeout = 8000;

if (module.hot) {
  module.hot.accept();
}

const app = new Vue({
  // router: routers//填入屬性值
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// 全局組件
// @@不行Uncaught TypeError: app.component is not a function
// app.component('BaseLoading',Loading);
// Vue.component('BaseLoading',Loading);

// ##直接物件方法調用
router.beforeEach((to, from, next) => {
  // console.log('to', to, 'from', from, 'next', next);

  if (to.meta.requireAuth) {
    app.$store.commit('LOADING', true);// ##app.$store
    const api = 'auth/check';
    // const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1'); // @@老師範例出現eslint(no-useless-escape)
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // console.log("xxxx",token);
    // if(token){//@@為何還執行
    if (token !== '') {
      instanceLogin.post(api, { api_token: token })
        .then((res) => {
          // console.log(res.message);%%
          app.$store.commit('LOADING', false);
          // console.log('導航守衛');
          // console.dir(res);
          if (res.data.success) {
            next();
          } else { // res.success為false
            app.$store.commit('LOADING', false);
            /* eslint-disable */
            console.log('響應驗證失敗');
            next({
              name: 'login',
            });
          }
        }).catch((err) => {
          console.log('響應驗證失敗', err);
          app.$store.commit('LOADING', false);
          next({
            name: 'login',
          });
        });
    } else { // no access token
      app.$store.commit('LOADING', false);
      // console.log('未登入(token不存在)');
      next({
        name: 'login',
      });
    }
  } else {
    next();
  }
});
