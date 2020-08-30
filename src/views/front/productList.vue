<template>
  <div class="row productList">
    <ProductCard
        v-for="(item) in filterProducts"
        :key="item.id"
        :thisProduct="item"
    />
  </div>
</template>
<script>
import ProductCard from '@/components/ProductCard';
import { mapState } from 'vuex';
export default {
  components: {
    ProductCard
  },
  created(){
    console.log(this.searchText);
  },
  data() {
    return{
      // searchText:this.searchText,
    }
  },
  computed: {
    ...mapState({
      products:(state) => state.CusProducts.products,
      searchText:(state) => state.CusProducts.searchText,//%%Cus大寫
    }),

    filterProducts() {
      if (this.searchText === 'all') {
        return this.products;
      }
      return this.products.filter((item) =>
      // return item.category == this.searchText;
        item.category.toLowerCase()
          .includes(this.searchText.toLowerCase()), // %%includes判斷陣列或"字串"是否包含特定的元素，並以此來回傳 true 或 false
      );
    },
  }
}
</script>