* // @@加這個改這個 為什麼每次都要重整
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }
<!-- =============================================== -->
     // {
    //     path: 'login',@@會失敗 不知道為什麼 難道說這樣不行
    //     component: () => import('../views/front/login')

    // },


* main.js 全局組件用這樣為什麼不行 app.component('BaseLoading',Loading);
    * 報錯 Uncaught TypeError: app.component is not a function
    * 報錯 [Vue warn]: Unknown custom element: <BaseLoading> - did you register the component correctly? For recursive components, make sure to provide the "name" option.

* 話說import名稱有什麼約定俗成的嗎，import Vue 大寫是因為什麼 物件嗎 小寫不行嗎

#為什麼Pagination
官方文件說不是true就是存在
:disabled="pages.current_page==1"
但為什麼不行
奇怪我後來打又行了

<!-- ==================================================================== -->
W5
###表單驗證
* ~valid-feedback為何失敗是用在errors沒用嗎? 原來是要打invaild
* ~助教錯誤訊息為何會自動跑username原來是會自動找id(lable的for)當對應欄位名稱
* 為何email的passed訊息已填出不來
###購物車
* 可不可以新增跟vue電商一樣 有item.coupon判斷這項產品有沒有已使用優惠券
