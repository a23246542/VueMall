// #目錄 #產品 #分頁 #喜歡的
import Vue from 'vue';
import { instanceCus } from '../../../api/https';

export default {
  state: {
    products: [],
    pagination: {},
    categories: [],
    searchText: 'all',
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
      state.products.forEach((item) => {
        // item.num = 1;
        // state.$set(item,'num',1);
        Vue.set(item, 'num', 1);
      });
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    GET_CATEGORIES(state, payload) {
      const categories = new Set();
      state.products.forEach((item) => {
        // categories.push(item.category)//%%@@
        // categories.add(item.category.split('>')[0]);
        categories.add(item.category);
      });
      state.categories = Array.from(categories);
    },
    SEARCH_TEXT(state, payload) {
      state.searchText = payload;
    },
  },
  actions: {
    getProducts(context, page, paged = 25, orderBy = 'created_at', sort = 'desc') {
      context.commit('LOADING', true);
      // const api =`ec/products/page=${page}`;%%
      console.log(`vuex getProducts的page:${page}`);
      const api = `ec/products?paged=${paged}&orderBy=${orderBy}&sort=${sort}`;
      instanceCus.get(api)
        .then((res) => {
          // this.products = res.data.data;
          context.commit('PRODUCTS', res.data.data);
          // this.pagination = res.data.meta.pagination;
          context.commit('PAGINATION', res.data.meta.pagination);
          // this.getCategories();
          context.commit('GET_CATEGORIES');
          // ###%% 可先暫時寫入api外的，幫助渲染
          // this.products.forEach((item) => {
          //     // item.num = 1;
          //     this.$set(item,'num',1);
          // })
          context.commit('LOADING', false);
        });
    },
  },
};
