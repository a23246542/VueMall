## 把遇到的問題點記錄下來

* productCard結果報錯根元素不能v-for，又多包div又註解又沒事了...瘋

* 明明有安裝但出現報錯
    * This dependency was not found:
    * you can run: npm install --save vee-validate/dist/types/rules/max_value
    * ok:後來搜尋This dependency was not found 可是明明安裝了 又搜尋src的 vee-val 發現不知道vscode何時給我亂import 刪掉就好

* orderInfo的購物清單一直消失 切去別頁會來有 重整就沒了
原來這頁組件created時沒有 this.$store.dispatch('getCart');//%%
