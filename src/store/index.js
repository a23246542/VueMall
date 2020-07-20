import Vue from 'vue';//##只載進來use 效能不會太差
import Vuex from 'vuex';
// - [] 還差axios
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);//@@改加在main.js

const state = {
    isLoading: false
};

// export default new Vuex.store({%%
export default new Vuex.Store({
    state,
    mutations,
    actions
})