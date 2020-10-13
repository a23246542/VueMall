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
        class="dropdown-menu dropdown-menu-right"
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
              <tr
                v-for="item in wishItemPrdObjs"
                :key="item.id"
              >
                <td class="align-middle">
                  {{ item.title }}
                </td>
                <td class="align-middle text-center">
                  {{ item.price | dollars }}
                </td>
                <td class="align-middle text-center">
                  <button
                    class="btn"
                    @click.prevent="buyWishItem(item)"
                  >
                    <i class="fas fa-cart-plus" />
                  </button>
                </td>
                <td class="align-middle text-center">
                  <button
                    class="btn"
                    @click.prevent="delWishItem(item)"
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
              <!-- <tr>
                <td
                  colspan="4"
                  @click="buyAllWish"
                >
                  全部加入購物車
                </td>
              </tr> -->
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
    };
  },
  computed: {
    wishItemPrdObjs() {
      // return this.$store.state.WishList.wishItemPrdObjs;
      return this.$store.getters.wishItemPrdObjs;
    },
    wishItemIds() {
      return this.$store.state.WishList.wishItemIdList;
    },
    carts() {
      return this.$store.state.Cart.cart.carts;
    },
  },
  created() {
    this.initWishList();
  },
  methods: {
    initWishList() {
      this.$store.dispatch('initWish');
    },
    buyWishItem(item, qty = 1) {
      this.$store.commit('LOADING', true);
      // const api = 'ec/shopping';
      const buyItem = { productId: item.id, qty };

      // ~~不管購物車是否存在 購物車都直接加1
      const hasInCartItem = this.carts.find((cart) => cart.product.id === buyItem.productId);
      if (hasInCartItem === undefined) {
        this.$store.dispatch('addToCart', buyItem)
          .then(() => {
            this.$store.commit('REMOVE_WISH', item.id);
            this.$store.commit('LOADING', false);
            this.$bus.$emit('message:push', `${item.title}已加入購物車`, 'success');
            // this.$store.dispatch('getCart');
          });
      } else {
        const data = {
          productId: hasInCartItem.product.id,
          newQty: hasInCartItem.quantity + 1,
        };
        // console.dir(data);
        this.$store.dispatch('editCart', data)
          .then(() => {
            this.$store.commit('REMOVE_WISH', item.id);
            this.$store.commit('LOADING', false);
            this.$bus.$emit('message:push', `${item.title}已加入購物車`, 'success');
          });
      }
    },
    delWishItem(item) {
      const productId = item.id;
      this.$store.commit('REMOVE_WISH', productId);
    },
    buyAllWish() {

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
