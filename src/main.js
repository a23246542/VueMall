import Vue from 'vue';
import App from './App.vue';

//##下面放自己寫的
import router from './router';
// import routers from './router/index.js';
Vue.config.productionTip = false;

new Vue({
  // router: routers//填入屬性值
  router,
  render: (h) => h(App),
}).$mount('#app');
