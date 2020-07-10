*作業的方式是把物件資料當本地資料庫，自己下去比對id*

==updateProduct==
 * 看是新增還是編輯
     * 藉由tempProduct有沒有id來看
 * 新增的話
    *把tempProduct post
    *post後重取資料
    *清空tempProduct
 * 編輯的話
    *  把tempProduct的id patch
    * ~~把tmepProduct傳過去~~
    * 清空tempProduct
 


 <!-- ======遇到的困難點=================== -->

* v-for存在的資料 裡面有陣列資料(圖片) 如何綁定不同的v-model上去
* 共用同一個modal 編輯的時候可以讀取tempProduct，
    但是新增的話，tempProduct是空的，變成要渲染的輸入圖片列表會是空的
    * 另外新增的圖片區塊想做陣列