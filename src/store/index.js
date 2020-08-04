import Vue from 'vue';//##只載進來use 效能不會太差
import Vuex from 'vuex';
// - [] 還差axios
// import {instanceCus} from '../api/https';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);//@也可加在main.js

const state = {
    isLoading: false,
    cart: {
        carts:[],
        pagination:{},
        // total: 0
    }
};

const getters = {
    cartTotal : (state) => {
        let total =0;
        state.cart.carts.forEach((item) => {
            let subtotal = 0;
            subtotal = item.quantity*item.product.price;
            total+=subtotal;
        })
        return total;
    }
}

// export default new Vuex.store({%%
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    // modules:{

    // }
})