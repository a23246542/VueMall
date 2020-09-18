// #目錄 #產品 #分頁 #喜歡的
import Vue from 'vue';
import { instanceCus } from '../../../api/https';

export default {
  state: {
    products: [],
    pagination: {}, // 產品列表頁的分頁
    newProducts: [], // 首頁新品上市用
    newPrdPagination: {},
    categories: [],
    searchText: 'all',
  },
  getters: { // ##代參數
    getProductsByNum: (state) => {
      return (num) => { // ##閉包
        return state.products.slice(0, num); // %%直接代參數
      };
    },
    getNewProductsByNum(state) {
      return (num) => {
        return state.newProducts.slice(0, num);
      };
    },
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
    NEWPRODUCT(state, payload) {
      state.newProducts = payload;
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    NEWPRODUCTS_PAGINATION(state, payload) {
      state.newPrdPagination = payload;
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
    getProducts(context, page = 1, paged = 25, orderBy = 'updated_at', sort = 'desc') {
      context.commit('LOADING', true);
      // const api =`ec/products/page=${page}`;%%
      // console.log(`vuex getProducts的page:${page}`);
      const api = `ec/products?page=${page}&paged=${paged}&orderBy=${orderBy}&sort=${sort}`;
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
    getNewProducts(context, page = 1, paged = 25, orderBy = 'created_at', sort = 'desc') {
      context.commit('LOADING', true);
      const api = `ec/products?page=${page}&paged=${paged}&orderBy=${orderBy}&sort=${sort}`;
      instanceCus.get(api)
        .then((res) => {
          context.commit('NEWPRODUCTS', res.data.data);
          context.commit('NEWPRODUCTS_PAGINATION', res.data.meta.pagination);
          context.commit('GET_CATEGORIES');
          context.commit('LOADING', false);
        });
    },
  },
};
