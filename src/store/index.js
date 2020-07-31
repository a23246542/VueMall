import Vue from 'vue';//##只載進來use 效能不會太差
import Vuex from 'vuex';
// - [] 還差axios
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);//@也可加在main.js

const state = {
    isLoading: false,
    carts
};

// export default new Vuex.store({%%
export default new Vuex.Store({
    state,
    mutations,
    actions
})