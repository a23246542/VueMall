import Vue from 'vue';
import axios from 'axios';
import router from '../router';//@做router.push


// ============后台admin==========================================
const http = {
    apiPath:'',
    uuid:'',
    // token:'',
}

// var CancelToke = axios.CancelToken;
// var source = axios.CancelToken.source();

// @@是否會先執行到
http.apiPath = process.env.VUE_APP_APIPATH;
// http.uuid =  document.cookie.replace(/(?:(?:^|.*;\s*)uuid\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '82a32758-aadc-4405-b535-2f6a678989d8';
http.uuid = process.env.VUE_APP_UUID;
// http.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

// ======================後台登入api=============================
const instanceLogin = axios.create({
    baseURL:`${http.apiPath}api/`,
})
const instanceAdmin = axios.create({
    baseURL:`${http.apiPath}api/${http.uuid}/admin/`
})
const instanceCus = axios.create({//@@沒登入也需要UUID
    baseURL:`${http.apiPath}api/${http.uuid}/`
})
// ======================登入api============================================

instanceLogin.interceptors.request.use( config => { 
    return config
},err =>{
    console.log("請求錯誤");
    console.dir(err);
    return Promise.reject(err)
})


instanceLogin.interceptors.response.use( res => {
    if(process.env.NODE_ENV=='development'){
        console.log(res);
    }
    return res
} , err => {
    if(process.env.NODE_ENV=='development'){
        console.log('響應錯誤');
        console.dir(err);
    }
    return Promise.reject(err)
})

// ===================後台api=============================================
instanceAdmin.interceptors.request.use(async config => {

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    config.headers.Authorization = `Bearer ${token}`   
    
    return config
},err => {
    console.log('請求錯誤');
    // console.log(err);
    // -[]錯誤訊息轉換
    return Promise.reject(err)
})

// ##callback回調同步
instanceAdmin.interceptors.response.use( res => {
    console.log(res);
    return res
} , err => {
    
    console.log('響應錯誤');
    console.dir(err);
    if(err.response.status === 401){ //message: "Unauthenticated."
        Vue.$store.commit('LOADING',false);//@@可以的原理
        router.push({name:'login'});
    }
    return Promise.reject(err)
})
// ===================前台api===================================
// Vue.prototype.instanceCus = instanceCus;
instanceCus.interceptors.request.use( config => { 
    return config
},err =>{
    console.log("請求錯誤");
    console.dir(err);
    return Promise.reject(err)
})

instanceCus.interceptors.response.use( res => {
    if(process.env.NODE_ENV=='development'){
        console.log(res);
    }
    return res
},err =>{
    if(process.env.NODE_ENV=='development'){
        console.log("響應錯誤");
        console.dir(err);//##
    }
    return Promise.reject(err)
})

// @@是否也會執行的問題
Vue.prototype.$instanceLogin = instanceLogin;
Vue.prototype.$instanceAdmin = instanceAdmin;
Vue.prototype.$instanceCus = instanceCus;

// ##物件縮寫
export {instanceLogin,instanceAdmin,instanceCus};



