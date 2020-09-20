import Vue from 'vue';
import * as VeeValidate from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW.json';

Object.keys(rules).forEach((rule) => {
  VeeValidate.extend(rule, { // 依序添加
    ...rules[rule], // 展開規則
    message: zhTW[rule], // 對應中文訊息
  });
});

VeeValidate.configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});

VeeValidate.localize('tw', zhTW);
// 自定義設定檔案，錯誤的 className

Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);
