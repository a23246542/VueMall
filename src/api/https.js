import axios from 'axios';
import router from '../router';//@@router要做什麼


// axios的實例
const instanceLogin = axios.create({
    baseURL:`${process.env.VUE_APP_APIPATH}api/`,
})

const http = {
    uuid:'',
    token:''
}

http.uuid =  document.cookie.replace(/(?:(?:^|.*;\s*)uuid\s*\=\s*([^;]*).*$)|^.*$/, "$1");
http.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");


const instanceAdmin = axios.create({
    baseURL:`${process.env.VUE_APP_APIPATH}api/${http.uuid}/`
})

instanceAdmin.interceptors.request.use( config => {
     // 每次傳送請求之前判斷是否存在token
    // 如果存在，則統一在http請求的header都加上token，這樣後臺根據token判斷你的登入情況，此處token一般是使用者完成登入後儲存到localstorage裡的
    token && (config.headers.Authorization = token)
    return config
})

export {instanceLogin,instanceAdmin};//@@何时要刮号



