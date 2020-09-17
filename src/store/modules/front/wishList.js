import storage from '@/assets/js/storage';

export default {
  state: {
    // wishStorage: JSON.parse(localStorage.getItem('collectedItems')) || [],
    wishItemIdList: [],
  },
  mutations: {
    INIT_WISHT(state, payload) {
      state.wishItemIdList = payload;
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
