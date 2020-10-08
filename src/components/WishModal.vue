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
        <i class="fas fa-shopping-cart text-white" />
        <span class="badge badge-pill badge-danger">{{ carts.length }}</span>
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
                    @click="delAllCart"
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
                    @click.prevent="addCart(item)"
                  >
                    <i class="fas fa-cart-plus" />
                  </button>
                </td>
                <td class="align-middle text-center">
                  <button
                    class="btn"
                    @click.prevent="delCart(item)"
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
    addWish() {

    },
    addAllWish() {

    },
    getWish() {
      this.$store.dispatch('getCart');
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
      border-top:.3em solid #fff;
    }
</style>
