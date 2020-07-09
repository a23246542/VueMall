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
 