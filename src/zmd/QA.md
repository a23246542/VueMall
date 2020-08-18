* // @@加這個改這個 為什麼每次都要重整
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }
<!-- =============================================== -->
## W4 元件化
```
後台登入頁.產品列表頁
LV1：參考範例程式碼，並重新撰寫及補上註解（禁止複製範例程式碼）
LV2：依據條件開發完成，並至少有另外套用一個元件（至少加上分頁的元件）
LV3：依據條件開發完成：
至少套用兩個以上的元件且皆使用 import 方式載入
加入 API 中的 options 的開發（需將該文字轉字串才可加入）
```
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

* http.uuid是否會有非同步沒執行到

### dashNavbar
* input搜尋欄w-100 會讓右邊navbar-nav壓縮到，加上flex-shrink-1 沒達到想要的效果 最後還是只能再個別li加上text-nowrap 這樣對嗎

<!-- ==================================================================== -->
## W5 插件
```
前台產品列表.加入購物車.購物車列表
表單驗證
LV1：參考範例程式碼，至少完成表單驗證功能
LV2：除了 LV1 以外，還完成了產品列表呈現、加入購物車、購物車列表的功能
LV3：自行設計購物車的版型
```
### 表單驗證
* ~valid-feedback為何失敗是用在errors沒用嗎? 原來是要打invaild
* ~助教錯誤訊息為何會自動跑username原來是會自動找id(lable的for)當對應欄位名稱
* 為何email的passed訊息已填出不來
### 購物車
* ~可不可以新增跟vue電商一樣 有item.coupon判斷這項產品有沒有已使用優惠券
*~Vue.prototype.instanceCus = instanceCus;//@@發現攔截無效 
*~<!-- {{ (item.quantity*item.product.price) | currency }} -->
為什麼這個會Nan是filter的話只能填一個值嗎
那這樣各別的item是要怎麼做計算
<!-- -[]這個currency有錯 -->
* 子層購物車data emit CART到父層data放會有傳參考問題嗎
* ~vuex如何讀取到vue實例好可以用綁定的axios跟bus (this讀取不到) @#最後用return一個promise
* 再看alex試試看watch item

* edit購物車後又觸發get購物車，用兩個promise解決等get購物車ajax結束 loading跑完 再觸發this.bus 可是要怎麼改寫成async/await呢 還是說簡單的部分才用async
### Alert彈窗
* 蝦 為什麼組件內scoped 寫寬600 我在products內放竟然沒效果!!! 這樣寫scoped有什麼用 不能搬  @#後來試又可以了
* 不能把index當作key的雷?  Module Warning (from ./node_modules/vue-loader/lib/loaders/templateLoader.js):
(Emitted value instead of an instance of Error) Do not use v-for index as key on <transition-group> children, this is the same as not using keys.
* 3.在CartModal組件內有scoped有客制設定badge樣式寬高，但是發現父層組件NavHeader其他nav-item(ex.優惠券)加上badge也會影響到
後來重啟才正常 或是其他有錯誤影響後面的編譯

### 產品結帳
* 我這頁排版 一個row 上面col-8 下面col-6 是否應該修正


## W6 cli&路由
```
新建大部分路由
LV1：完成路由設定，並可瀏覽所有頁面（請提供導覽選單以供使用）
LV2：前台顯示完整的產品列表，並可進入產品頁面（前台 API）
LV3：完成登入、驗證頁面（後台 API），並客製化導覽選單
```
### shopping.vue
* router-view的name不起作用，是否沒有這用法了 @#後來又成功了
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

### products.vue
* ok~ this.$refs.cart.getCart();失敗 好像只能取同個vue檔的
    emit 的接收及 ref 的操作都是在 Product.vue 這個檔案
* category-list看div內文字到底會不會自動換行呢

* ??為何@click.prevent="searchText=item"
沒有反應 可是看文件又好像找不到
是移除了嗎?

* 方法裡面this.searchText =text; 發現為何vue devtool無法及時響應data(雖然後來發現其實有變)，這樣不就沒有幫助了嗎(以為沒有偵測變動到)，且明明預先定義了資料
後來多綁了個computed，data的資料才及時響應在f12 vue上，這是正常開發遇到嗎

* 為什麼mapState都失敗
    // ...mapState(['products','categories','pagination']),
        // ...mapState({
        //     countAlias:'products',
        //     // products:'products',
        //     // categories:'categories',
        //     // pagination:'pagination'
        // }),

* ~vue的官方文件Mutation 需遵守Vue 的響應規則 這邊
既然vuex不能取得Vue對象，是要如何使用Vue.set(obj, 'newProp', 123),
喔 是this的vue實例無法取得 但Vue import就好了!
https://vuex.vuejs.org/zh/guide/mutations.html


### singleProduct
* product:{
        imageUrl:[],//@@ajax後被整個蓋掉寫了有意義嗎?
        qty:1//@@被蓋掉寫了有意義嗎?
    }
    @#作用是給預設值先幫助模板渲染(ajax資料回來之前)
    @# 雖然會跑但不會報錯 Cannot read property '0' of undefined"
    @# 然後因為是整個物件換掉vue我想是可以偵測到並再另外幫每個屬性綁定的



### orderInfo
* 為何樣式會出現data-v 奇怪 明明沒有寫scoped

### 後台dashCoupon
* 感覺就算是新增也不是tempCoupon = {}這麼簡單 模板完全讀不到
* ~為什麼getCoupon的cb會報錯 @#因為一開始的cb不存在
* 後來像產品列表沒辦法開新分頁怎麼辦!!!
* promise猜運作是有比較慢的特性嗎 原本callback改用promise結果 loading都結束了幾秒 modal才關閉，用callback幾乎loading跟modal關閉同時
* modalUse ===xxx的判斷 改成computed有比較好嗎 閱讀

<!-- ===========卡斯伯老師======================= -->
掛載原型會建議統一在main.js嗎
index key的雷
watch v-for item的問題
router name用中文會很不專業嗎
頁面組件只放組件

yoko助教關於更新不上去的問題
是部屬腳本只要更新上去就行嗎???
還是只是我gh-分支不該checkout會造成大量更動


