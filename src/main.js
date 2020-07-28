//npm套件
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
window.$ = $;//@@效能問題
import 'bootstrap';
 // Import component
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
 // Import stylesheet
//  @@為何css
import 'vue-loading-overlay/dist/vue-loading.css';
//##自定義
// import {uuid,token,apiPath} from './api/index';
import App from './App.vue';
import {instanceLogin} from './api/https';
import router from './router';
import store from './store';
import currencyFilter from './filters/currencyFilter';
import dateFilter from './filters/dateFilter';
// import filters from './filters'

VeeValidate.localize('tw',zh_TW);
// 自定義設定檔案，錯誤的 className

Object.keys(rules).forEach((rule) => {
    VeeValidate.extend(rule, {//依序添加
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
Vue.use(VueAxios, axios);//##原本的是可以this.axios.get()調用
// @@为何要放前面
Vue.component('BaseLoading',Loading);
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
Vue.component('ValidationObserver',VeeValidate.ValidationObserver);

Vue.filter('currency',currencyFilter);
Vue.filter('date',dateFilter);

//過濾器統一處理加載
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

//mock開關
const mock = false;
if(mock){
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