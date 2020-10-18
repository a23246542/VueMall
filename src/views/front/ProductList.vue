<template>
  <div class="productList">
    <div class="row">
      <div
        v-for="(item) in filterProducts"
        :key="item.id"
        class="col-xl-4 col-sm-6 productCardCol mb-5"
      >
        <ProductCard
          :this-product="item"
          :card-class="'productCard--style2'"
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
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.CusProducts.products,
      pagination: (state) => state.CusProducts.pagination,
      searchText: (state) => state.CusProducts.searchText,
    }),
    filterProducts() {
      if (this.searchText === 'all') {
        return this.products;
      }
      return this.products.filter((item) => item.category.toLowerCase()
        .includes(this.searchText.toLowerCase()));
    },
  },
  created() {
    const breadcrumbList = [
      {
        routerName: 'home',
        title: '首頁',
      },
      {
        routerName: 'products',
        title: '商品一覽',
      },
    ];
    this.$store.dispatch('setBreadcrumbList', breadcrumbList);
  },
  methods: {
    async getProducts(page = 1) {
      await this.$store.dispatch('getProducts', page);
    },
  },

};
</script>
