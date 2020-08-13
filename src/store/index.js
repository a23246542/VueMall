import Vue from 'vue';//##只載進來use 效能不會太差
import Vuex from 'vuex';
// - [] 還差axios
// import {instanceCus} from '../api/https';
import mutations from './mutations';
import actions from './actions';

import Cart from './modules/front/cart';
import CusProducts from './modules/front/cusProducts';

Vue.use(Vuex);//@也可加在main.js

const state = {
    isLoading: false,
    
};
const getters = {
   
}

// export default new Vuex.store({%%
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        Cart,
        CusProducts
    }
})