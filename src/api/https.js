import axios from 'axios';
import router from '../router';//@@router要做什麼


// axios的實例


// ============后台admin==========================================
const http = {
    uuid:'',
    token:''
}

http.uuid =  document.cookie.replace(/(?:(?:^|.*;\s*)uuid\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '82a32758-aadc-4405-b535-2f6a678989d8';
// http.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

// ======================================================
const instanceLogin = axios.create({
    baseURL:`${process.env.VUE_APP_APIPATH}api/`,
})
const instanceAdmin = axios.create({
    baseURL:`${process.env.VUE_APP_APIPATH}api/${http.uuid}/admin/`
})
const instanceCus = axios.create({//@@沒登入也需要UUID
    baseURL:`${process.env.VUE_APP_APIPATH}api/${http.uuid}`
})

// =======================================================================
instanceAdmin.interceptors.request.use(async config => {
     // 每次傳送請求之前判斷是否存在token
    // 如果存在，則統一在http請求的header都加上token，這樣後臺根據token判斷你的登入情況，此處token一般是使用者完成登入後儲存到localstorage裡的
    
    // - [ ] 還要做個Frontend 前台 - Check. 確認 Token 狀態是否有效。
            // 發現因為在家裡登入會變成新的token 所以要拿本地存的token去check舊的話就更新成新的token，難怪直接getProduct會401
    // console.log(http.token);

    const api = 'auth/check'
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log('uuid:',http.uuid,'token:',token);
    
    

    const cancelToken = axios.CancelToken.source();

    // 驗證是否no access token
    // http.token && (config.headers.Authorization = `Bearer ${http.token}`)
    if(token){
        // @@axios 设置headers.Authorization都成功了，但是请求头还是没有，这是为什么？
        // @@常常401後來發現都要重新登入才行

        //發出任何admin請求之前，先用驗證token
        // @@Axios:如何正确取消请求拦截器中的请求？
        // ##console發現沒辦法等驗證完畢再發出請求 後來用async await解決
        await instanceLogin.post(api,{'api_token':token})
        .then((res) => {
            // console.log(res.message);%%
            console.log(res.data.message);
            if(res.data.success){
                config.headers.Authorization = `Bearer ${token}`
                console.log(config.headers.Authorization);
            }else{
                router.push('/login');
                throw new axios.Cancel('token驗證不成功，重新登入取得token');
                //- [ ]取消這個響應攔截請求
                
            }
        
        }).catch((err) =>{
            console.log(err);
            
        })
        
    }else{
        console.log('cookies缺少token');
        router.push('/login');
        throw new axios.Cancel('cookies缺少token，重新登入取得token');
    }
    // -[] 沒有登入token的處理(就不用發請求這邊直接處理)@@
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
    console.log(res);
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
    console.log(res);
    // - [] loading
    return res
},err =>{

    return Promise.reject(err)
})



export {instanceLogin,instanceAdmin,instanceCus};//@@何时要刮号



