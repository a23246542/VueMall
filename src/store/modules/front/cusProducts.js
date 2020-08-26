// #目錄 #產品 #分頁 #喜歡的
import {instanceCus} from "../../../api/https";
import Vue from 'vue';

export default {
    state:{
        products:[],
        pagination:{},
        categories:[],
    },
    mutations:{
        PRODUCTS(state, payload){
            state.products = payload;
            state.products.forEach((item) => {
                // item.num = 1;
                // state.$set(item,'num',1);
                Vue.set(item,'num',1);
            })
        },
        PAGINATION(state, payload){
            state.pagination = payload;
            
        },
        GET_CATEGORIES(state, payload){
            const categories = new Set();
            state.products.forEach((item) => {
                // categories.push(item.category)//%%@@
                categories.add(item.category.split(">")[0])
            })
            state.categories = Array.from(categories);
        }
    },
    actions:{
        getProducts(context,page=1,paged=25,orderBy="created_at",sort="desc"){
            context.commit('LOADING',true);
            // const api =`ec/products/page=${page}`;%%
            const api =`ec/products?page=${page}&paged=${paged}&orderBy=${orderBy}&sort=${sort}`;
            instanceCus.get(api)
            .then((res) => {
                // this.products = res.data.data;
                context.commit('PRODUCTS',res.data.data);
                // this.pagination = res.data.meta.pagination;
                context.commit('PAGINATION',res.data.meta.pagination);
                // this.getCategories();
                context.commit('GET_CATEGORIES');
                //###%% 可先暫時寫入api外的，幫助渲染
                // this.products.forEach((item) => {
                //     // item.num = 1;
                //     this.$set(item,'num',1);
                // })
                context.commit('LOADING',false);
            })
        },
    }
}