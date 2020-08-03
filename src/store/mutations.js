export default {
    LOADING(state,isLoading){
        state.isLoading = isLoading;
    },
    CART(state,resData){
        state.cart.carts = resData.data.reverse();
        state.cart.Pagination = resData.meta.pagination;
    }
}