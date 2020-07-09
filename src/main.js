//npm套件
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
//##自定義
// import {uuid,token,apiPath} from './api/index';
import App from './App.vue';
import router from './router';
// import routers from './router/index.js';
Vue.use(VueAxios, axios);//##原本的是可以this.axios.get()調用
Vue.config.productionTip = false;

// const uuid = '82a32758-aadc-4405-b535-2f6a678989d8';
// const token = '7yaPDgRGh5hHKAkAeIUtl1H3yiFQS6wN8a6Cs0gGSFZNYaC45Mi02hhDcHZt';
// const apiPath = 'https://course-ec-api.hexschool.io/';

//mock開關
const mock = false;
if(mock){
  require('./mock/api.js');
    // const mockData = require('./mock/api.js');
    // console.log(mockData);
}

// axios.defaults.timeout = 8000; 
//未做跨域
axios.defaults.baseURL= `${process.env.VUE_APP_APIPATH}`;//@@localhost mock關掉
axios.defaults.headers['Authorization'] = `Bearer ${process.env.VUE_APP_TOKEN}`; //%%空格



new Vue({
  // router: routers//填入屬性值
  router,
  render: (h) => h(App),
}).$mount('#app');
