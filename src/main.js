import Vue from 'vue';
import App from './App.vue';
//插件
import axios from 'axios';
import VueAxios from 'vue-axios';
//##自己寫的
import router from './router';
// import routers from './router/index.js';
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);//##原本的是可以this.axios.get()調用

const uuid = '82a32758-aadc-4405-b535-2f6a678989d8';
const token = '7yaPDgRGh5hHKAkAeIUtl1H3yiFQS6wN8a6Cs0gGSFZNYaC45Mi02hhDcHZt';
const apiPath = 'https://course-ec-api.hexschool.io/';

//mock開關
const mock = true;
if(mock){
    require('./mock/api');
}


axios.defaults.baseURL= apiPath;
axios.defaults.headers['Authorization'] = `Bearer ${token}`; //%%空格


new Vue({
  // router: routers//填入屬性值
  router,
  render: (h) => h(App),
}).$mount('#app');
