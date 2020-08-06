import {instanceCus} from '../api/https';
import Vue from 'vue';//@@無法
// import {app} from '../main'

Vue.prototype.$instanceCus = instanceCus;

export default {
    updateLoading(context,isLoading){
        context.commit('LOADING',isLoading);
    },
   
}