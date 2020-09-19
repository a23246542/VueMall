import Vue from 'vue';// @@無法
import { instanceCus } from '../api/https';
// import {app} from '../main'

// Vue.prototype.$instanceCus = instanceCus;

export default {
  updateLoading(context, isLoading) {
    context.commit('LOADING', isLoading);
  },
  changePage(context, nowPage) {
    context.commit('SET_PAGE', nowPage);
  },
  setBreadcrumbList(context, payload) {
    context.commit('SET_BREADCRUMB_LIST', payload);
  },

};
