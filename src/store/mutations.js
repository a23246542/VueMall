export default {
  LOADING(state, isLoading) {
    state.isLoading = isLoading;
  },
  SET_PAGE(state, payload) {
    state.nowPage = payload;
  },
  SET_BREADCRUMB_LIST(state, payload) {
    state.breadcrumbList = payload;
  },

};
