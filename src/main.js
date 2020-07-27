//npm套件
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
window.$ = $;//@@效能問題
import 'bootstrap';
 // Import component
 import Loading from 'vue-loading-overlay';
 // Import stylesheet
//  @@為何css
 import 'vue-loading-overlay/dist/vue-loading.css';
//##自定義
// import {uuid,token,apiPath} from './api/index';
import App from './App.vue';
import {instanceLogin} from './api/https';
import router from './router';
import store from './store';
Vue.use(VueAxios, axios);//##原本的是可以this.axios.get()調用
Vue.config.productionTip = false;



//mock開關
const mock = false;
if(mock){
  require('./mock/api.js');
    // const mockData = require('./mock/api.js');
    // console.log(mockData);
}

// axios.defaults.timeout = 8000;

// @@为何要放前面
Vue.component('BaseLoading',Loading);

const app = new Vue({
  // router: routers//填入屬性值
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

//全局組件
// @@為什麼不行Uncaught TypeError: app.component is not a function
// app.component('BaseLoading',Loading);
// Vue.component('BaseLoading',Loading);


// ##直接物件方法調用
router.beforeEach((to,from,next) => {
    console.log('to',to,'from',from,'next',next);

    if(to.meta.requireAuth){
        app.$store.commit('LOADING',true);//##app.$store
        const api = 'auth/check'
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        instanceLogin.post(api,{'api_token':token})
        .then((res) => {
            // console.log(res.message);%%
            app.$store.commit('LOADING',false);
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