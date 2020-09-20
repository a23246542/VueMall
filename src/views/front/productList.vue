<template>
  <div class="productList">
    <div class="row">
      <div
        v-for="(item) in filterProducts"
        :key="item.id" class="col-xl-4 col-sm-6 productCardCol"
      >
        <ProductCard
          :this-product="item"
        />
      </div>
    </div>
    <Pagination
      :pages="pagination"
      @change-page="getProducts"
    />
  </div>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue';
import Pagination from '@/components/BasePagination.vue';
import { mapState } from 'vuex';

export default {
  components: {
    ProductCard,
    Pagination,
  },
  data() {
    return {
      // searchText:this.searchText,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.CusProducts.products,
      pagination: (state) => state.CusProducts.pagination,
      searchText: (state) => state.CusProducts.searchText, // %%Cus大寫
    }),
    filterProducts() {
      if (this.searchText === 'all') {
        return this.products;
      }
      // }else{ //@@eslint?
      //   return this.products.filter((item) => {
      //   // return item.category == this.searchText;
      //     item.category.toLowerCase().includes(this.searchText.toLowerCase()); // %%includes判斷陣列或"字串"是否包含特定的元素，並以此來回傳 true 或 false
      //   });
      // }
      return this.products.filter((item) => item.category.toLowerCase().includes(this.searchText.toLowerCase())); // %%includes判斷陣列或"字串"是否包含特定的元素，並以此來回傳 true 或 false);
    },
  },
  methods: {
    async getProducts(page = 1) {
      await this.$store.dispatch('getProducts', page);// @@無效
    },
  },

};
</script>
