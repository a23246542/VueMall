<template>
    <div id="products" class="products">
        <div class="container pt-5">
            <Alert></Alert>
            <!-- <div class="row flex-row-reverse"> -->
            <div class="row">
                <div class="col-md-2">
                    <!-- <table class="table table-sm" v-if="cart.carts.length"> -->
                    <h3>產品分類</h3>
                    <div class="list-group">
                        <!-- <a href="#" class="list-group-item list-group-item-action"
                        @click.prevent="searchText='all'"
                        > -->
                        <a href="#" class="list-group-item list-group-item-action"
                        @click.prevent="setSearchText('all')"
                        >
                            全部
                        </a>
                        <!-- <a href="#" class="list-group-item list-group-item-action"
                        v-for="item in categories" :key="item"
                        @click.prevent="searchText=item"
                        > -->
                        <a href="#" class="list-group-item list-group-item-action"
                        v-for="item in categories" :key="item"
                        @click.prevent="setSearchText(item)"
                        >
                            {{firstFloor(item)}}
                        </a>
                    </div>
                </div>

                <!-- <div class="col-10 mx-auto"> -->
                <div class="col-md-10">
                    <div class="row">
                      <!-- <div class="col-xl-4 col-sm-6 mb-5 products__cardCol"> -->
                          <ProductCard
                              v-for="(item) in filterProducts"
                              :key="item.id"
                              :thisProduct="item"
                          />
                      <!-- </div> -->
                    </div>
                    <!-- 分頁 開始 -->
                    <pagination
                    :pages="pagination"
                    @change-page="getProducts"
                    />
                    <!-- 分頁 結束 -->
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard';
import CartModal from '@/components/CartModal';
import pagination from '@/components/BasePagination';
import Alert from '@/components/BaseAlertMessage';
import { mapState } from 'vuex';
import { instanceCus } from '../../api/https';

export default {
  components: {
    ProductCard,
    CartModal,
    Alert,
    pagination,
  },
  data() {
    return {
      // product:{//點擊那個modal再出現
      //     num:1,//要雙向綁定預設值%%%
      // },
      // products:[],
      // pagination:{},
      // categories:[],
      searchText: 'all',
      // carts:[]//子組件購物車的
    };
  },
  computed: {
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
    // ...mapState(['products','categories','pagination']),
    ...mapState({
      products: (state) => state.CusProducts.products,
      categories: (state) => state.CusProducts.categories,
      pagination: (state) => state.CusProducts.pagination,
    }),
    // products() {
    //     return this.$store.state.CusProducts.products;
    // },
    // categories() {
    //     return this.$store.state.CusProducts.categories;
    // },
    // pagination() {
    //     return this.$store.state.CusProducts.pagination;
    // },
  },
  created() {
    this.getProducts();
  },
  methods: {
    // getProducts(page=1,paged=25,orderBy="created_at",sort="desc"){
    getProducts(page = 1) {
      this.$store.dispatch('getProducts', page);
    },
    // getProducts(page=1,paged=25,orderBy="created_at",sort="desc"){
    //     this.$store.commit('LOADING',true);
    //     // const api =`ec/products/page=${page}`;%%
    //     const api =`ec/products?page=${page}&paged=${paged}&orderBy=${orderBy}&sort=${sort}`;
    //     instanceCus.get(api)
    //     .then((res) => {
    //         this.products = res.data.data;
    //         this.pagination = res.data.meta.pagination;
    //         this.getCategories();
    //         //###%% 可先暫時寫入api外的，幫助渲染
    //         this.products.forEach((item) => {
    //             // item.num = 1;
    //             this.$set(item,'num',1);
    //         })
    //         this.$store.commit('LOADING',false);
    //     })
    // },
    // getCategories(){
    //     const categories = new Set();
    //     this.products.forEach((item) => {
    //         // categories.push(item.category)//%%@@
    //         categories.add(item.category)
    //     })
    //     this.categories = Array.from(categories);
    // },
    // 接收資料 子傳父元件
    // getEmitCart(carts){
    //     this.carts = carts;
    // },
    openSingleProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    firstFloor(item) { // 顯示第一層目錄
      if (item.includes('>')) {
        return item.split('>')[0];
        // console.log(item.split(">"));
      }
      return item;
      // console.log(item);
    },
    setSearchText(text) {
      this.searchText = text;
      // console.log(text,this.searchText);
    },

  },
};
</script>

<style lang="scss">
    #products{
        // background-color: #FFFCE5;
        font-family:'Microsoft JhengHei',-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

        // .bg-green{
        //     background-color: #6BB82D !important;
        //     color: #fff;
        // }
        // .badgeColor{
        //     /* background-color: #F2A594; */
        //     background-color: #F29E38;
        // }
    }

    .products{
        &__cardCol{
          padding-left: 12px;
          padding-right: 12px;
        }
    }
</style>
