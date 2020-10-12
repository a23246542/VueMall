// import storage from '@/assets/js/storage';
import storage from '@/utils/storageUtil';

export default {
  state: {
    // wishStorage: JSON.parse(localStorage.getItem('collectedItems')) || [],
    wishItemIdList: [],
    // wishItemPrdObjs: [],
  },
  getters: {
    wishItemPrdObjs(state, getter, rootState) {
      return rootState.CusProducts.products.filter((prdObj) => {
        return state.wishItemIdList.includes(prdObj.id);
      });
    },
  },
  mutations: {
    INIT_WISH(state, prdIdAry) {
      state.wishItemIdList = prdIdAry;
      // state.wishItemIdList = prdIdAry.filter((id) => {
      //   return state.CusProducts.products.includes(id);
      // });
    },
    // SET_WISHOBJS(state, payload) {
    //   state.wishItemPrdObjs = payload;
    // },
    // ADD_WISHOBJS(state, payload) {
    //   state.wishItemPrdObjs.push(payload);
    // },
    ADD_WISH(state, wishItemId) {
      if (!state.wishItemIdList.includes(wishItemId)) {
        state.wishItemIdList.push(wishItemId);
      }
      storage.setItem('wishList', state.wishItemIdList);

      // const wishItemPrdObjs = state.CusProducts.products.find((prdItem) => {
      //   return prdItem.id === wishItemId;
      // });
      // this.$store.commit('ADD_WISHOBJS', wishItemPrdObjs);
    },
    REMOVE_WISH(state, itemId) {
      const indexId = state.wishItemIdList.indexOf(itemId);
      state.wishItemIdList.splice(indexId, 1);
      storage.setItem('wishList', state.wishItemIdList);
    },
  },
  actions: {
    initWish(context) {
      if (!storage.getItem('wishList')) {
        storage.setItem('wishList', []);
      }
      context.commit('INIT_WISH', storage.getItem('wishList'));
    },

  },

};
