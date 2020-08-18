!!!
- [ ] 用vue eslint & vuter
<!-- [Vue] 整合 Vue style guide, eslint-plugin-vue 和 VSCode ~ PJCHENder<br>那些沒告訴你的小細節
https://pjchender.blogspot.com/2019/07/vue-vue-style-guide-eslint-plugin-vue.html -->

<!-- ====router頁面 -->
- [ ] 還有很多頁面還沒有相對應的連結
- [ ]  加上 meta: {
            title: 'vueMall - 關於我們',
          },
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
- [ ] 商品啟用、關閉可以使用不同的顏色標示
- [ ] 修正發現要調整第四頁的產品2 啟用與否時 有報錯Error in render: "TypeError: Cannot read property 'indexOf' of null" 
- [ ] cusProduct改大寫 productCard組件也是 都是模組
- [ ] addtoCart 產品內頁好像也有 可以用mixin??


### 優惠券列表
- [ ] 選到之前的日期會跳視窗靜止 或disabled 