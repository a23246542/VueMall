!!!
- [ ] 用vue eslint & vuter
<!-- [Vue] 整合 Vue style guide, eslint-plugin-vue 和 VSCode ~ PJCHENder<br>那些沒告訴你的小細節
https://pjchender.blogspot.com/2019/07/vue-vue-style-guide-eslint-plugin-vue.html -->

- [ ] 把compoent有些是公用組件 要跟頁頁組件拆(page)嗎?

### css管理
- [ ] mike全域載入mixin
- [ ] id沒有效能優勢 頁面組件id改成bem class(可是又好處感覺可以避免重複) 暫定放scss資料夾 但組件style好像也可以
- [ ] 共用組件 一樣用bem class 不用scoped方便客製修改 基本樣式一樣佔放scss資料夾(但基本樣式用bs4了) 設定樣式寫組件style
<!-- 可是感覺專案應該基本樣式應該寫組件style拿來引用 客製修改寫在專案scss資料夾 -->
二次複用這個組件的時候 scoped deep下去改子共用元件內樣式了


<!-- ====router頁面 -->
- [ ] 還有很多頁面還沒有相對應的連結(頁面組件小寫好了 載入多個views有共用組件在大寫)
- [ ]  加上 meta: {
            title: 'vueMall - 關於我們',
          },
- [ ] 雖然改成在後台父頁面當入口導航守衛，但還是會看到後台 navHeader改成點下去就驗證 但要順便看開新分頁的話會變怎麼樣

<!-- ======vuex==================== -->
* 改用rayproducts mapAction
<!-- =========================前台==================================================== -->
- [ ]  import {instanceAdmin} from '../api/https';
  //   - []改掛載到vue上

- [ ]
   @param status 用於切換上傳圖片時的小 icon，主要是增加使用者體驗。-[]還未新增



- [ ] 組件不要用id那個 不然就不能複用了! 除非是很多都共用同一個

## 產品頁products
* vue-swiper
### 產品列表
* 卡片帶上內品內頁 router id
- [ ] 產品改成組件跟產品資料從vuex拿   
### 購物車
- [ ] 運費想到可以用個如果沒到達就加上運費的商品 不過要問優惠券可以累加嗎?


- [ ] currencyFilter
- [ ] 竟然按過的不能按 {message: "The given data was invalid.", errors: ["該商品已放入購物車當中。"]}
errors: ["該商品已放入購物車當中。"]
message: "The given data was invalid."
- [ ] 按刪除會跳確認是否自購物車刪除視窗(島津)
- [ ] 不只加減 輸入的方式 小計什麼也要即時更新
- [ ] 圖片是否改固定 右邊col或flex-1伸縮
- [ ] 購物車給藝影助教看

- [ ] miMall的加減購物車// -[]不能超過太多 // -[]至少保留一件
- [ ] // -[]延遲發送api 增加使用者體驗
- [ ] addtoCart的判斷功能還沒做
- [ ] 4:17分有目錄的方法

### order_info 顧客表單
- [x] carModal跟orderInfo 看可不可以用mixin處理 好像不行 不太一樣


### navFooter
- [ ] 訂閱電子報跳v-slot視窗通知(縮放zoom)

<!-- =================後台================================================================== -->
### W7 todo

- [ ] 產品列表modal title還沒改過來
- [ ] sidebar 要改成active
- [ ] 啟用改成網路找按鍵 找css 


### DashNavbar
* .navbar-nav是flex-direction: column怎麼改好的問提;

### 產品列表
- [ ] 產品列表 例如在第四頁編輯後重整 會跳回第一頁
    * 咨询个问题，如果我刷新浏览器的按钮，怎么缓存？比如果分页，用户现在处于第二页，刷新之后会跳转到第一页的问题
    :current-page.sync="currentPage" 我这个没设置导致的 尴尬
- [ ] 商品啟用、關閉可以使用不同的顏色標示
- [ ] 修正發現要調整第四頁的產品2 啟用與否時 有報錯Error in render: "TypeError: Cannot read property 'indexOf' of null" 
- [ ] cusProduct改大寫 productCard組件也是 都是模組
- [ ] addtoCart 產品內頁好像也有 可以用mixin??

- [ ] 之後可以寫個增加欄位的按鈕 但好像太怪 不過是因為
    * // this.$set(this.tempProduct,'options',{});//##增加欄位時才能用 且只能用一次
- [ ] 編輯圖片有個bug需要修復=> 第一個地址刪掉為空時 應該去掉這個陣列(不留空白)，不然更新送出去回傳回來第一個陣列變null，並造成報錯 modal空白

### 優惠券列表
- [ ] 選到之前的日期會跳視窗靜止 或disabled 