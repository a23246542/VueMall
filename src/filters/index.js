import Vue from 'vue';
// import currencyFilter from './filters/currencyFilter';
import dateFilter from './dateFilter';
import dollarsFilter from './dollarsFilter';

// Vue.filter('currency',currencyFilter);
Vue.filter('date', dateFilter);
Vue.filter('dollars', dollarsFilter);
// 過濾器統一處理加載
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// });
