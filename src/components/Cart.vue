<template>
<table class="table table-sm">
    <thead>
        <th colspan="4" class="text-center">已選購商品</th>
        <!-- <th></th>
        <th>品名</th>
        <th>數量</th>
        <th>單價</th> -->
    </thead>
    <tbody>
        <tr v-if="carts.length>0">
            <td colspan="4" class="text-right">
                <button class="btn btn-outline-danger btn-sm"
                @click="delAllCart"
                >刪除全部品項</button>
            </td>
        </tr>
        <tr v-for="item in carts" :key="item.product.id">
            <td class="align-middle text-center">
                <button
                class="btn"
                @click.prevent="delCart(item)"
                >
                <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </td>
            <td class="align-middle">
                {{ item.product.title }}
                <!-- <div class="text-success" v-if="item.coupon">
                已套用優惠券
                </div> -->
            </td>
            <td class="align-middle text-right">x{{ item.quantity }}</td>
            <!-- <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td> -->
            <td class="align-middle text-center">
                <!-- ## -->
                {{ (item.quantity*item.product.price) | dollars }}
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3" class="text-right">總計</td>
            <td class="text-center">{{ cartTotal | dollars }}</td>
        </tr>
        <!-- <tr>
            <td colspan="3" class="text-right text-success">折扣價</td>
            <td class="text-right text-success">{{ cart.final_total }}</td>
        </tr> -->
        <tr>
            <td colspan="4">
                <router-link
                to="./orderform"
                tag="a"
                class="btn btn-success btn-sm w-100"
                >
                結帳去
                </router-link>
            </td>
        </tr>
    </tfoot>
</table>
</template>

<script>
export default {
    data() {
        return {
            // carts:[],
            // cartPagination:{},
            // cartTotal:0
        }
    },
    computed:{
        // cartTotal(){
        //     let total =0;
        //     this.carts.forEach((item) => {
        //         let subtotal = 0;
        //         subtotal = item.quantity*item.product.price;
        //         total+=subtotal;
        //     })
        //     return total;
        // },
        carts(){
            return this.$store.state.Cart.cart.carts;
        },
        cartPagination(){
            return this.$store.state.Cart.cart.pagination;
        },
        cartTotal(){
            return this.$store.getters.cartTotal;
        }
    },
    created() {
        this.getCart();
    },
    methods:{
        getCart(){
            this.$store.dispatch('getCart');

            // this.$store.commit('LOADING',true);
            // const api ="ec/shopping"
            // this.$instanceCus.get(api)
            // .then((res) => {
            //     console.log("上面是取得購物車");
            //     this.carts = res.data.data.reverse();
            //     this.cartPagination = res.data.meta.pagination;
            //     this.$emit('emitCart',this.carts)
            //     // @@是否會傳參考
            //     this.$store.commit('LOADING',false);
            // })
        },
        editCart(id,qty){
            this.$store.dispatch('editCart',{id,qty})

            // this.$store.commit('LOADING',true);
            // const api ="ec/shopping"
            // const cartItem = {product:id,quantity:qty};
            // this.$instanceCus.patch(api,cartItem)
            // .then((res) => {
            //     this.getCart();
            // })
        },
        delCart(item){//%%405 delete方法用錯

            // this.$store.dispatch('delCart',item);
            this.$store.dispatch('delCart',item)
            // .then(() =>{
            //      this.$bus.$emit('message:push',`${item.product.title} 已刪除`,'success');
            // })

            // this.$store.commit('LOADING',true);
            // const api =`ec/shopping/${item.product.id}`;
            // this.$instanceCus.delete(api)
            // .then((res) => {
            //     this.$bus.$emit('message:push',`${item.product.title} 已刪除`,'success');
            //     this.getCart();
            // })
        },
        delAllCart(){

            this.$store.dispatch('delAllCart');

            // this.$store.commit('LOADING',true);
            // const api ="ec/shopping/all/product";
            // this.$instanceCus.delete(api)
            // .then((res) => {
            //     this.$bus.$emit('message:push','全部商品已刪除','success')
            //     this.getCart();
            // })
        }
    }
}
</script>

<style>

</style>