import axios from 'axios';
import router from '../router';//@@router要做什麼


// axios的實例
// ================登入======================================
const instanceLogin = axios.create({
    baseURL:`${process.env.VUE_APP_APIPATH}api/`,
})

// ============后台admin==========================================
const http = {
    uuid:'',
    token:''
}

http.uuid =  document.cookie.replace(/(?:(?:^|.*;\s*)uuid\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '82a32758-aadc-4405-b535-2f6a678989d8';
http.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");


const instanceAdmin = axios.create({
    baseURL:`${process.env.VUE_APP_APIPATH}api/${http.uuid}/`
})
const instanceCus = axios.create({
    baseURL:`${process.env.VUE_APP_APIPATH}api/${http.uuid}`
})


instanceAdmin.interceptors.request.use( config => {
     // 每次傳送請求之前判斷是否存在token
    // 如果存在，則統一在http請求的header都加上token，這樣後臺根據token判斷你的登入情況，此處token一般是使用者完成登入後儲存到localstorage裡的
    http.token && (config.headers.Authorization = `Bearer ${http.token}`)
    // -[] 沒有登入token的處理@@
    // if(token){}
    // -[] 開啟loading
    return config
},err => {
    console.log('請求錯誤');
    
    // console.log(error);
    // -[]錯誤訊息轉換
    return Promise.reject(err)
})

// ##callback回調同步
instanceAdmin.interceptors.response.use( res => {
    // -[] 關閉loading
    return res
} , err => {
    console.log('響應錯誤');
    // console.log('error:',err);
    
    return Promise.reject(err)
})
// ========================================================
instanceCus.interceptors.request.use( config => {
    // - [] loading
    return config
},err =>{
    
    return Promise.reject(err)
})

instanceCus.interceptors.response.use( res => {
    // - [] loading
    return res
},err =>{

    return Promise.reject(err)
})



export {instanceLogin,instanceAdmin,instanceCus};//@@何时要刮号



