<template>
  <div>
    <div class="dropdown">
      <button
        id="wishModalButton"
        class="btn dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-heart text-white" />
        <!-- <span class="badge badge-pill badge-danger">{{ carts.length }}</span> -->
        <!-- <span class="badge badge-pill badge-danger">3</span> -->
      </button>
      <div
        class="dropdown-menu"
        style="min-width: 350px;"
        aria-labelledby="dropdownMenuButton"
      >
        <div class="px-4 py-3">
          <table class="table table-sm mb-0">
            <thead>
              <th
                colspan="4"
                class="h6 text-center"
              >
                已選購商品
              </th>
            </thead>
            <tbody>
              <tr v-if="carts.length>0">
                <td
                  colspan="4"
                  class="text-right"
                >
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click="delAllWish"
                  >
                    刪除全部品項
                  </button>
                </td>
              </tr>
              <tr
                v-for="item in carts"
                :key="item.product.id"
              >
                <td class="align-middle">
                  {{ item.product.title }}
                </td>
                <td class="align-middle text-center">
                  {{ (item.quantity*item.product.price) | dollars }}
                </td>
                <td class="align-middle text-center">
                  <button
                    class="btn"
                    @click.prevent="addWish(item)"
                  >
                    <i class="fas fa-cart-plus" />
                  </button>
                </td>
                <td class="align-middle text-center">
                  <button
                    class="btn"
                    @click.prevent="delWish(item)"
                  >
                    <i
                      class="fa fa-trash"
                      aria-hidden="true"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4">
                  加入購物車
                </td>
              </tr>
              <tr>
                <td @click="getWishPrd">
                  取得產品id
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
      // getWishPrdNames: [],
      // carts:[],
      // cartPagination:{},
      // cartTotal:0
    };
  },
  computed: {
    // getWishPrdObjs() {
    //   const vm = this;
    //   // return this.getWishsIds.filter((id) => {
    //   //   console.log(this);
    //   //   return vm.$store.state.CusProducts.products.includes(id);
    //   // });
    //   this.getWishPrdNames = this.getWishIds.map((wishId) => {
    //     return this.$store.state.CusProducts.products.find((prdObj) => {
    //       return wishId === prdObj.id;
    //     });
    //   });
    // },
    wishItemPrdObjs() {
      return this.$store.state.WishList.wishItemPrdObjs;
    },
    getWishIds() {
      return this.$store.state.WishList.wishItemIdList;
    },
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
  watch: {
    '$store.state.CusProducts.products': {
      deep: true,
      handler(newVal) {
        // const wishPrdObjs = this.getWishIds.map((wishId) => {
        //   return newVal.find((prdObj) => {
        //     return wishId === prdObj.id;
        //   });
        // });
        const wishPrdObjs2 = newVal.filter((prdObj) => {
          return this.getWishIds.includes(prdObj.id);// @@如何確保getWishIds已存在
        });
        this.$store.commit('SET_WISHOBJS', wishPrdObjs2);
      },
    },
  },
  created() {
    this.getWish();
  },
  methods: {
    getWishPrd() {
      // const vm = this;
      // this.getWishPrdNames = this.getWishIds.map((wishId) => {
      //   // @@!不懂eslint consistent-return 跟return
      //   // return vm.$store.state.CusProducts.products.forEach((itemObj) => {
      //   vm.$store.state.CusProducts.products.forEach((itemObj) => {
      //     if (itemObj.id === wishId) {
      //       console.log(itemObj.title);
      //       return itemObj.title;
      //     }
      //   });
      // });
      this.getWishPrdNames = this.getWishIds.map((wishId) => {
        return this.$store.state.CusProducts.products.find((prdObj) => {
          return wishId === prdObj.id;
        });
      });
    },
    addWish() {

    },
    addAllWish() {

    },
    getWish() {
      this.$store.dispatch('initWisht');
    },
    delWish(item) {
      const productId = item.product.id;
      this.$store.dispatch('delCart', productId)
        .then(() => {
          this.$bus.$emit('message:push', `${item.product.title} 已刪除`, 'success');
        });
    },
    delAllWish() {
      this.$store.dispatch('delAllCart');
    },
  },
};
</script>

<style lang="scss" scoped>
    .dropdown-menu {
        right: 0;
        left: auto;//##必加
    }
    .fa-heart {
      font-size: 19px;
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

    .dropdown-toggle::after{
      // border-top:.3em solid #fff;
      display: none;
    }
</style>
