import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

//##下面放自己寫的
import router from './router';
// import routers from './router/index.js';
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  // router: routers//填入屬性值
  router,
  render: (h) => h(App),
}).$mount('#app');
