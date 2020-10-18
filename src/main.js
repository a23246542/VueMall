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
import 'popper.js';
import 'bootstrap';// js模組
// =================================================
// ##自定義
import App from './App.vue';
import router from './router';
import store from './store';
import { instanceLogin } from './api/https';
import './bus';
import mockFn from './api/apis';

window.$ = $;

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

// mock開關
const mock = false;
if (mock) {
  mockFn();
}

if (module.hot) {
  module.hot.accept();
}

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// ##直接物件方法調用
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    app.$store.commit('LOADING', true);// ##app.$store
    const api = 'auth/check';
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (token !== '') {
      instanceLogin.post(api, { api_token: token })
        .then((res) => {
          app.$store.commit('LOADING', false);
          if (res.data.success) {
            next();
          } else { // res.success為false
            app.$store.commit('LOADING', false);
            next({
              name: 'login',
            });
          }
        }).catch(() => {
          app.$store.commit('LOADING', false);
          next({
            name: 'login',
          });
        });
    } else { // no access token
      app.$store.commit('LOADING', false);
      next({
        name: 'login',
      });
    }
  } else {
    next();
  }

  if (to.meta.title) {
    window.document.title = `META露營趣-${to.meta.title}`;
  }
});
