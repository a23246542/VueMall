//npm套件
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
 // Import component
 import Loading from 'vue-loading-overlay';
 // Import stylesheet
//  @@為何js 
 import 'vue-loading-overlay/dist/vue-loading.css';
//##自定義
// import {uuid,token,apiPath} from './api/index';
import App from './App.vue';
import {instanceLogin} from './api/https';
import router from './router';
import store from './store';
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
// axios.defaults.baseURL= `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/`;//@@localhost mock關掉
// axios.defaults.headers['Authorization'] = `Bearer ${process.env.VUE_APP_TOKEN}`; //%%空格



const app = new Vue({
  // router: routers//填入屬性值
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

//全局組件
// @@為什麼不行
// app.component('BaseLoading',Loading);

Vue.component('BaseLoading',Loading);


// ##直接物件方法調用
router.beforeEach((to,from,next) => {
    console.log('to',to,'from',from,'next',next);

    if(to.meta.requireAuth){
        const api = 'auth/check'
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        instanceLogin.post(api,{'api_token':token})
        .then((res) => {
            // console.log(res.message);%%
            console.log(res.data.message);
            if(res.data.success){
                next();
            }else{//res.success為false
                next({
                    path:'/login'
                });
            }
        }).catch((err) =>{
            console.log(err);
            
        })
    }else{
        next();
    }
    
})