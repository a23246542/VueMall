// npm套件
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
// @@全域效能問題
import 'jquery';
import 'bootstrap';// js模組
// @@不寫.css會是載入js
// import {
//     ValidationObserver,
//     ValidationProvider,
//     extend,
//     localize,
// configure
// } from 'vee-validate';
import * as VeeValidate from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import zh_TW from 'vee-validate/dist/locale/zh_TW.json';
import Loading from 'vue-loading-overlay';
import vueDebounce from 'vue-debounce';
import VueSweetalert2 from 'vue-sweetalert2';

// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

// import 'bootstrap/scss/bootstrap.scss';//all.scss import了
// import 'bootstrap';
// import './assets/scss/helpers/_helpers.scss';//@@

// ##自定義
// import {uuid,token,apiPath} from './api/index';
import App from './App.vue';
import { instanceLogin, instanceAdmin, instanceCus } from './api/https';
import router from './router';
import store from './store';
import './bus';

// import currencyFilter from './filters/currencyFilter';
import dateFilter from './filters/dateFilter';
import dollarsFilter from './filters/dollarsFilter';

window.$ = $;
// import filters from './filters';

// Vue.prototype.$instanceLogin = instanceLogin;
// Vue.prototype.$instanceAdmin = instanceAdmin;
// Vue.prototype.$instanceCus = instanceCus;

VeeValidate.localize('tw', zh_TW);
// 自定義設定檔案，錯誤的 className

Object.keys(rules).forEach((rule) => {
  VeeValidate.extend(rule, { // 依序添加
    ...rules[rule], // 展開規則
    message: zh_TW[rule], // 對應中文訊息
  });
});

VeeValidate.configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);// ##原本的是可以this.axios.get()調用
Vue.component('BaseLoading', Loading);
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);

Vue.use(vueDebounce, {
  listenTo: 'input',
});
const options = {
  toast: true, // @@@
  timer: 1500,
  // padding: '1em',
  padding: '1rem',
  position: 'center',
};
Vue.use(VueSweetalert2, options);
// Vue.filter('currency',currencyFilter);
Vue.filter('date', dateFilter);
Vue.filter('dollars', dollarsFilter);
// 過濾器統一處理加載
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

// mock開關
const mock = true;
if (mock) {
  require('./mock/api.js');
  // const mockData = require('./mock/api.js');
  // console.log(mockData);
}
// axios.defaults.timeout = 8000;

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
  console.log('to', to, 'from', from, 'next', next);

  if (to.meta.requireAuth) {
    app.$store.commit('LOADING', true);// ##app.$store
    const api = 'auth/check';
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    // console.log("xxxx",token);
    // if(token){//@@為何還執行
    if (token !== '') {
      instanceLogin.post(api, { api_token: token })
        .then((res) => {
          // console.log(res.message);%%
          app.$store.commit('LOADING', false);
          console.log('導航守衛');
          console.dir(res);
          if (res.data.success) {
            next();
          } else { // res.success為false
            app.$store.commit('LOADING', false);
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
      console.log('未登入(token不存在)');
      next({
        name: 'login',
      });
    }
  } else {
    next();
  }
});
