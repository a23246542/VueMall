
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

## 產品頁products
* vue-swiper
### 產品列表
* 卡片帶上內品內頁 router id
- [ ] 產品改成組件跟產品資料從vuex拿   
### 購物車
- [ ] currencyFilter
- [ ] 竟然按過的不能按 {message: "The given data was invalid.", errors: ["該商品已放入購物車當中。"]}
errors: ["該商品已放入購物車當中。"]
message: "The given data was invalid."
- [ ] 按刪除會跳確認視窗
- [ ] 不只加減 輸入的方式 小計什麼也要即時更新
- [ ] 圖片是否改固定 右邊col或flex-1伸縮
- [ ] 購物車給藝影助教看

- [ ] miMall的加減購物車// -[]不能超過太多 // -[]至少保留一件
- [ ] // -[]延遲發送api 增加使用者體驗
- [ ] addtoCart的判斷功能還沒做
- [ ] 4:17分有目錄的方法

<!-- =================後台================================================================== -->
### DashNavbar
* .navbar-nav是flex-direction: column怎麼改好的問提;

### 產品列表
- [ ] 產品列表 例如在第四頁編輯後重整 會跳回第一頁
- [ ] 商品啟用、關閉可以使用不同的顏色標示
- [ ] 修正發現要調整第四頁的產品2 啟用與否時 有報錯Error in render: "TypeError: Cannot read property 'indexOf' of null" 