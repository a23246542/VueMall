import {instanceCus} from '@/api/https';

export default {
    state:{
        cart: {
            carts:[],
            pagination:{},
            // total: 0
        }
    },
    getters:{
        cartTotal : (state) => {
            let total =0;
            state.cart.carts.forEach((item) => {
                let subtotal = 0;
                subtotal = item.quantity*item.product.price;
                total+=subtotal;
            })
            return total;
        }
    },
    mutations:{
        CART(state,resData){
            state.cart.carts = resData.data.reverse();
            // state.cart.carts = resData.data.sort((a, b) => b.qty - a.qty);
            state.cart.pagination = resData.meta.pagination;
        }
    },
    actions:{
        getCart(context){
            context.commit('LOADING',true);
            const api ="ec/shopping";
            // Vue.$instanceCus.get(api)//@@
            instanceCus.get(api)
            .then((res) => {
                console.log("上面是取得購物車");
                // this.carts = res.data.data.reverse();
                // this.cartPagination = res.data.meta.pagination;
                context.commit("CART",res.data)
                // this.$emit('emitCart',this.carts)
                // @@是否會傳參考
                context.commit('LOADING',false);
            })
        },
        editCart(context,{id,qty}) {
            context.commit('LOADING',true);
            const api ="ec/shopping";
            const cartItem = {product:id,quantity:qty};
            instanceCus.patch(api,cartItem)
            .then((res) => {
                // this.getCart();
                // this.$store.dispatch('getCart');//%%
                context.dispatch('getCart');
            })
        },
        delCart(context,item){
            // this.$store.commit('LOADING',true);
            // return new Promise((resolve, reject) => {
    
                context.commit('LOADING',true);
                const api =`ec/shopping/${item.product.id}`;
                instanceCus.delete(api)
                .then((res) => {
                    // this.$bus.$emit('message:push',`${item.product.title} 已刪除`,'success');
                    // app.$bus.$emit('message:push',`${item.product.title} 已刪除`,'success');
                    // this.getCart();
                    // resolve()
                    context.dispatch('getCart')
                })
            // })
        },
        delAllCart(context){
            context.commit('LOADING',true);
            const api ="ec/shopping/all/product";
            instanceCus.delete(api)
            .then((res) => {
                // this.$bus.$emit('message:push','全部商品已刪除','success')
                context.dispatch('getCart');
            })
        }
    }
}