// import storage from '@/assets/js/storage';
import storage from '@/utils/storageUtil';

export default {
  state: {
    // wishStorage: JSON.parse(localStorage.getItem('collectedItems')) || [],
    wishItemIdList: [],
    wishPrd: [],
    wishItemPrdObjs: [],
  },
  mutations: {
    INIT_WISHT(state, prdIdAry) {
      state.wishItemIdList = prdIdAry;
      // state.wishItemIdList = prdIdAry.filter((id) => {
      //   return state.CusProducts.products.includes(id);
      // });
    },
    SET_WISHOBJS(state, payload) {
      state.wishItemPrdObjs = payload;
    },
    ADD_WISH(state, itemId) {
      state.wishItemIdList.push(itemId);
      storage.setItem('wishList', state.wishItemIdList);
      // storage.setItem()
    },
    REMOVE_WISH(state, index) {
      // const index = state.wishItemIdList.indexOf(itemId);
      state.wishItemIdList.splice(index, 1);
      storage.setItem('wishList', state.wishItemIdList);
    },
  },
  actions: {
    initWisht(context) {
      if (!storage.getItem('wishList')) {
        storage.setItem('wishList', []);
      }
      context.commit('INIT_WISHT', storage.getItem('wishList'));
    },

  },

};
