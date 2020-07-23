挖勒純登入api不用uuid，我原本是一起設定baseUrl，所以我得個別設定實體
1.建立登入的實體(不用uuid) 一般使用者的實體(uuid) admin的實體(admin uuid)
3.登入後存token在cookie
4.要使用admin的api時取出來token要帶入
2.後台頁面進入發現沒有token要倒去登錄
<!-- 發送admin api也要帶入token -->
之前withCredentials是給後端存取cookies的

現在的登陸原理
1.後端會給token跟到期日，自己存在cookies
2.到別頁時或重整時或登出時，會存取cookies的token，準備發check登入的api(帶token)
狀況1 過期不見了 所以要變登出狀態
狀況2 cookies的token還在 往後端送 說無效 可能是登出過了 也是登出狀態

* 一开始要设置的好像只有apipath
* uuid跟token.expired登入后才取得
* 可是我要作疙功能 如果是别的学员

*本地沒有token就是沒有登入過

##报错
*401是未授权错误
 *https://blog.csdn.net/SpicyBoiledFish/article/details/78903932
 *结果还真的是header没有传送token成功
 *-[]用错误拦截 只有dev模式 才console出来!!!


bug修复
* 确认还没登入的话 才能再登入 不然又会拿到一组token
