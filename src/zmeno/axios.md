<!-- axios攔截器先整理在這 -->
<!-- 有router攔截器好像暫時不用axiso攔截器了 -->
<!-- // ===================後台api============================================= -->
```
instanceAdmin.interceptors.request.use(async config => {
//      // 每次傳送請求之前判斷本地是否存在token，以及async/await確認token有效性
//     // 如果存在，則統一在http請求的header都加上token，這樣後臺根據token判斷你的登入情況，此處token一般是使用者完成登入後儲存到localstorage或cookies裡的
    
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
//     // const token = http.token;%%重新登入後token不一樣會不能用
//     console.log('uuid:',http.uuid,'token:',token,'http.token',http.token);
    
//     // const cancelToken = axios.CancelToken.source();
//     // @@Axios:如何正确取消请求拦截器中的请求？
    
//     // http.token && (config.headers.Authorization = `Bearer ${http.token}`)
//     if(token){
        
//         // ##console發現沒辦法等驗證完畢再發出請求 後來用async await解決
//         const api = 'auth/check'
//         await instanceLogin.post(api,{ cancelToken:source.toke,'api_token':token})
//         .then((res) => {
//             console.log(res.data.message);
//             if(res.data.success){
                config.headers.Authorization = `Bearer ${token}`
//                 console.log(config.headers.Authorization);
//             }else{
//                 console.log(res.data.message);
//                 // this.$router.push('/login');
//                 router.push('/login');

//                 // @@好像會中斷 無法取消這個請求
//                 source.cancel("操作被用戶取消");
//                 // throw new axios.Cancel('token驗證不成功，重新登入取得token');
//                 // router.push('/login');//%%放後面無法執行
//                 //- [ ]取消這個響應攔截請求
                
//             }
        
//         }).catch((err) =>{//no access token
//             console.log(err);
//             // this.$router.push('/login');
//             router.push('/login');
//             // return config@@?
//             source.cancel("token驗證不成功，重新登入取得token");
//             // throw new axios.Cancel('token驗證不成功，重新登入取得token');
//         })
        
//     }else{//no access token
//         console.log('cookies缺少token');
//         router.push('/login');
//         // return config@@?
//         throw new axios.Cancel('cookies缺少token，重新登入取得token');
//     }
    return config
},err => {
    console.log('請求錯誤');
    // console.log(err);
    // -[]錯誤訊息轉換
    return Promise.reject(err)
})
```