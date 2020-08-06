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
W5 插件
###表單驗證
* ~valid-feedback為何失敗是用在errors沒用嗎? 原來是要打invaild
* ~助教錯誤訊息為何會自動跑username原來是會自動找id(lable的for)當對應欄位名稱
* 為何email的passed訊息已填出不來
###購物車
* ~可不可以新增跟vue電商一樣 有item.coupon判斷這項產品有沒有已使用優惠券
*~Vue.prototype.instanceCus = instanceCus;//@@發現攔截無效 
*~<!-- {{ (item.quantity*item.product.price) | currency }} -->
為什麼這個會Nan是filter的話只能填一個值嗎
那這樣各別的item是要怎麼做計算
<!-- -[]這個currency有錯 -->
* 子層購物車data emit CART到父層data放會有傳參考問題嗎
* vuex如何讀取到vue實例好可以用綁定的axios跟bus (this讀取不到)

###Alert彈窗
* 蝦 為什麼組件內scoped 寫寬600 我在products內放竟然沒效果!!! 這樣寫scoped有什麼用 根本不能搬

###產品結帳
* 我這頁排版 一個row 上面col-8 下面col-6 是否應該修正


W6 cli&路由

### shopping.vue
* router-view的name不起作用，是否沒有這用法了
* row col-8 col-6是可以的嗎
* dashSidebar data-feather無效
* sockjs.js?9be2:1606 GET http://192.168.43.187:8081/sockjs-node/info?t=1596477033180 net::ERR_CONNECTION_TIMED_OUT (半夜伺服器已經關閉的意思?)

### cart切板疑問
*input-group 怎麼都無法內連縮小至內容，外層w-auto inline-flex或是自身input加上inline-block都沒用，只好強制寫style
*@@想讓col裡面的東西暫滿高 是該大量用h-100 or 還是col用d-flex
*小計的120 為何align-middle無效 最後是父層align-items-center
*是否沒辦法watch 多項v-for出來的item (item.quatiy)
*this.$store.dispatch('editCart',{id,qty});
editCart(context,{id,qty}){ 
    為什麼物件傳過去的參數 那邊解構的屬性名也要一樣 不能重命名 @#好像本來就不能  解構是取他的屬性
* 做刪除的時候 複習vue電商影片才發現vuex一次只能傳遞一個參數


