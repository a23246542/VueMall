<template>
    <div>
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-shopping-cart"></i>
                <span class="badge badge-pill badge-danger">{{carts.length}}</span>
                <!-- <span class="badge badge-pill badge-danger">3</span> -->
            </button>
            <div class="dropdown-menu" style="min-width: 300px;" aria-labelledby="dropdownMenuButton">
                <!-- <a class="dropdown-item" href="#">Action</a> -->
                <div class="px-4 py-3">
                    <table class="table table-sm mb-0">
                        <thead>
                            <th colspan="4" class="h6 text-center">已選購商品</th>
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
                                <td class="align-middle text-center">
                                    <button
                                    class="btn"
                                    @click.prevent="delCart(item)"
                                    >
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                    </button>
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
                                    :to="{name:'購物車'}"
                                    tag="a"
                                    class="btn btn-block btn-success btn-sm"
                                    >
                                    結帳去
                                    </router-link>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      // carts:[],
      // cartPagination:{},
      // cartTotal:0
    };
  },
  computed: {
    // cartTotal(){
    //     let total =0;
    //     this.carts.forEach((item) => {
    //         let subtotal = 0;
    //         subtotal = item.quantity*item.product.price;
    //         total+=subtotal;
    //     })
    //     return total;
    // },
    carts() {
      return this.$store.state.Cart.cart.carts;
    },
    cartPagination() {
      return this.$store.state.Cart.cart.pagination;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.$store.dispatch('getCart');
    },
    editCart(id, qty) {
      this.$store.dispatch('editCart', { id, qty });
    },
    delCart(item) { // %%405 delete方法用錯
      const productId = item.product.id;
      // this.$store.dispatch('delCart',item);
      this.$store.dispatch('delCart', productId)
        .then(() => {
          this.$bus.$emit('message:push', `${item.product.title} 已刪除`, 'success');
        });

      // this.$store.commit('LOADING',true);
      // const api =`ec/shopping/${item.product.id}`;
      // this.$instanceCus.delete(api)
      // .then((res) => {
      //     this.$bus.$emit('message:push',`${item.product.title} 已刪除`,'success');
      //     this.getCart();
      // })
    },
    delAllCart() {
      this.$store.dispatch('delAllCart');

      // this.$store.commit('LOADING',true);
      // const api ="ec/shopping/all/product";
      // this.$instanceCus.delete(api)
      // .then((res) => {
      //     this.$bus.$emit('message:push','全部商品已刪除','success')
      //     this.getCart();
      // })
    },
  },
};
</script>

<style lang="scss" scoped>
    .dropdown-menu {
        right: 0;
        left: auto;//##必加
    }
    .btn>.badge{
        position: absolute;
        top: -1px;
        right: 19px;
    }
    .badge-pill{
        padding-right:.4em;
        padding-left:.4em;
    }
</style>
