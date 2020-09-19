<template>
  <div id="products" class="products">
    <div class="container pt-5">
      <Alert />
      <!-- <div class="row flex-row-reverse"> -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link :to="{name:'home'}">
              首頁
            </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{name:'products'}">
              商品一覽
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <template v-if="true">
              <router-link :to="{name:'products'}">
                所有商品
              </router-link>
            </template>
            <template v-if="false">
              <router-link :to="{name:'productSingle'}">
              </router-link>
            </template>
          </li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-xl-2 products__sidebar px-0">
          <!-- <table class="table table-sm" v-if="cart.carts.length"> -->
          <div class="mainClass list-group">
            <!-- <a href="#" class="list-group-item list-group-item-action"
                        @click.prevent="searchText='all'"
                        > -->
            <!-- <a href="#" class="list-group-item list-group-item-action rounded-0"
                        @click.prevent="setSearchText('all')"
                        >
                            <span>
                              所有商品
                            </span>
                        </a> -->
            <!-- <a href="#" class="list-group-item list-group-item-action"
                        v-for="item in categories" :key="item"
                        @click.prevent="searchText=item"
                        > -->
            <!-- <a href="#" class="list-group-item list-group-item-action rounded-0"
                        v-for="item in categories" :key="item"
                        @click.prevent="setSearchText(item)"
                        >
                            <span>
                              {{firstFloor(item)}}系列
                            </span>
                        </a> -->
            <!-- ========================= -->
            <a href="#" class="list-group-item list-group-item-action rounded-0"
               @click.prevent="setSearchText('all')"
            >
              <span>
                所有商品
              </span>
            </a>
            <a v-for="item in classObj.sort" :key="item"
               href="#" class="list-group-item list-group-item-action rounded-0"
            >
              <span class="mainClass__title"
                    @click.stop="setSearchText(item)"
              >
                {{ item }}系列
              </span>
              <span v-if="classObj.map[item].sort[0]"
                    class="mainClass__arrow"
                    @click="showSubClass(item,$event)"
              />

              <ul v-if="classObj.map[item].sort[0]"
                  v-show="!classObj.map[item].hidden"
                  class="subClass list-group"
              >
                <li v-for="item in classObj.map[item].sort"
                    :key="item" class="subClass__title list-group-item border-0"
                    @click.prevent="setSearchText(item)"
                >
                  {{ item }}
                </li>
              </ul>
            </a>
          </div>
          <!-- <Category

                    ></Category> -->
        </div>

        <!-- <div class="col-10 mx-auto"> -->
        <div class="col-xl-10 products__content">
          <!-- <div class="products__list"> -->
          <!-- <div class="row"> -->
          <!-- <ProductCard
                              v-for="(item) in filterProducts"
                              :key="item.id"
                              :thisProduct="item"
                          /> -->
          <!-- <router-view
            :change-page="nowProductPage" //%%改橫線跟mounted
          > -->
          <!-- </div> -->
          <!-- 分頁 開始 -->
          <!-- <pagination
            :pages="pagination"
            @change-page="getProducts"
          /> -->
          <!-- 分頁 結束 -->
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ProductCard from '@/components/ProductCard';
import CartModal from '@/components/CartModal';
// import pagination from '@/components/BasePagination';
import Alert from '@/components/BaseAlertMessage';
import Category from '@/components/Category';
import { mapState } from 'vuex';
import { instanceCus } from '../../api/https';

export default {
  components: {
    // ProductCard,
    CartModal,
    Alert,
    // pagination,
    Category,
  },
  data() {
    return {
      // product:{//點擊那個modal再出現
      //     num:1,//要雙向綁定預設值%%%
      // },
      // products:[],
      // pagination:{},
      // categories:[],
      // searchText: 'all',
      // carts:[]//子組件購物車的
      classObj: {
        sort: [],
        map: {},
      },
      thisPage: 'products',
    };
  },
  computed: {
    // filterProducts() {
    //   if (this.searchText === 'all') {
    //     return this.products;
    //   }
    //   return this.products.filter((item) =>
    //   // return item.category == this.searchText;
    //     item.category.toLowerCase()
    //       .includes(this.searchText.toLowerCase()), // %%includes判斷陣列或"字串"是否包含特定的元素，並以此來回傳 true 或 false
    //   );
    // },
    // ...mapState(['products','categories','pagination']),
    ...mapState({
      products: (state) => state.CusProducts.products,
      categories: (state) => state.CusProducts.categories,
      // pagination: (state) => state.CusProducts.pagination,
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
    //  classObj(){
    //   // const obj = {
    //   //   sort:[],
    //   //   map:{}
    //   // };
    //   // const category = new Set();
    //   // this.categories.forEach(item => {
    //   //     category.add(item.split('>')[0]);
    //   // });

    //   // obj.sort=[...category];

    //   // obj.sort.forEach(title => {
    //   //   obj.map[title]
    //   // })
    //   const obj = {
    //     sort:[],
    //     map:{}
    //   };

    //   this.categories.forEach(item => {
    //     const firstCalss = item.split('>')[0]

    //     if(!obj.map[firstCalss]){
    //       obj.sort.push(firstCalss);
    //       obj.map[firstCalss] = {
    //         sort:[],
    //         hidden:true
    //       };
    //     }
    //     obj.map[firstCalss].sort.push(item.split('>')[1]);
    //   })
    //   console.log(obj);
    //   return obj
    // },
  },
  watch: {
    categories(val, oldVal) {
      console.log(val);
      this.setClassObj();
    },
  },
  created() {
    this.getProducts()
      .then(() => {
        console.log('執行getProduct.then');
      // this.setClassObj();//@@改用watch做
      });
  },
  mounted() {
    // this.setClassObj();
    // console.log('56uv');

  },
  methods: {
    // getProducts(page=1,paged=25,orderBy="created_at",sort="desc"){
    async getProducts(page = 1) {
      await this.$store.dispatch('getProducts', page);// @@無效
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
    firstFloor(item) { // 顯示第一層目錄
      if (item.includes('>')) {
        return item.split('>')[0];
        // console.log(item.split(">"));
      }
      return item;
      // console.log(item);
    },
    setClassObj() {
      console.log('執行setClassObj');
      this.categories.forEach((item) => {
        const firstClass = item.split('>')[0];

        console.log(firstClass);
        if (!this.classObj.map[firstClass]) {
          this.classObj.sort.push(firstClass);
          // this.$set
          // this.classObj.map[firstCalss] = {
          //   sort:[],
          //   hidden:true
          // };
          this.$set(this.classObj.map, firstClass, {});
          this.$set(this.classObj.map[firstClass], 'sort', []);
          this.$set(this.classObj.map[firstClass], 'hidden', true);
        }
        this.classObj.map[firstClass].sort.push(item.split('>')[1]);
      });
      // console.log(obj);
      // return obj
    },
    setSearchText(text) {
      // this.searchText = text;
      this.$store.commit('SEARCH_TEXT', text);
      console.log(text);
    },
    showSubClass(mainClass, event) {
      // this.classObj.map[mainClass].hidden === true? false : true;//@#簡化
      // !this.classObj.map[mainClass].hidden=;//#失敗
      console.log(event);
      event.target.classList.toggle('show');
      setTimeout(() => {
        this.classObj.map[mainClass].hidden = !this.classObj.map[mainClass].hidden;
      }, 350);
    },
    // nowProductPage(pageName) { // %%差點失敗
    //   console.log('輸入pageName', pageName);
    // },

  },
};
</script>

<style lang="scss">
  // @import "@/src/assets/scss/helpers/_mixin.scss";
  // @import "../../assets/scss/helpers/_variables.scss";
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
      .container{
        // @include media-breakpoint-up(xl){//@@無法吃到
        @media screen and(min-width: 1200px){
          max-width: 1320px;
        }
      }

      &__sidebar{
        // width: 200px;
        // background-color:$brand-secondary-green;//@@undefined
        // background-color:#4E3111;
        color:#3F3B00;
        align-self: start;
        padding-top:40px;
        padding-bottom: 40px;
        .list-group{
          // margin:0 auto;
        }
        .list-group-item{
          background-color: transparent;
          color:inherit;
          color: #3F3B00;
          padding:10px 10px 10px 13%;
          // background-color:#4E3111;//@@undefined
          border:0;
          // border:1px solid red;
          // transition: all .05s;

          &>span{

            &>.arrow{

            }
          }
        }

        .mainClass{
          .list-group-item{
            position: relative;
            // &:hover,&.active{
            // background-color: #C9420D;
            // }
          }

          &__title{
            padding-left: 10%;
            margin-bottom:26px;
            color:inherit;
            // border:1px solid red;
            // border-left:3px solid inherit;//@@不行inherit
            border-left:3px solid #3F3B00;
            border-radius: 0;
          }

          &__arrow{
            display: inline-block;//##span三角形失敗
             // content:"";
              // position: absolute;
              // top: 50%;
              // transform:translateY(-50%);
              // // right: -20px;
              // right: -50px;

              // width: 0;
              // height: 0;
              // border-left:7px solid #3F3B00;
              // border-top:4px solid transparent;
              // border-bottom:4px solid transparent;

              width: 0;
              height: 0;
              margin-left: 10%;
              border-style: solid;
              border-width: 6px 0 6px 8px;
              border-color: transparent transparent transparent #3F3B00;
              transition: all .25s;

              &.show{
                transform:rotateZ(90deg);
              }
          }
        }
        .subClass{
          // display:none;

          // &.show{
          //   display: block;
          // }

          .list-group-item{
            padding: 3px 30px 6px;
          }
        }
      }

      &__content{
        // flex: 1;
      }

    }
</style>
