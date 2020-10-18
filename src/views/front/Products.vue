<template>
  <div
    id="products"
    class="products"
  >
    <div class="container pt-5">
      <Alert />
      <Breadcrumb />
      <div class="row">
        <div class="col-xl-2 products__sidebar px-0">
          <div class="mainClass list-group">
            <!-- ========================= -->
            <a
              href="#"
              class="list-group-item list-group-item-action rounded-0"
              @click.prevent="setSearchText('all')"
            >
              <span>
                所有商品
              </span>
            </a>
            <a
              v-for="item in classObj.sort"
              :key="item"
              href="#"
              class="mainClass__item list-group-item list-group-item-action rounded-0"
            >
              <span
                class="mainClass__title"
                @click.stop="setSearchText(item)"
              >
                {{ item }}系列
              </span>
              <span
                v-if="classObj.map[item].sort[0]"
                class="mainClass__arrow"
                @click="showSubClass(item,$event)"
              />

              <ul
                v-if="classObj.map[item].sort[0]"
                v-show="!classObj.map[item].hidden"
                class="subClass list-group"
              >
                <li
                  v-for="subItem in classObj.map[item].sort"
                  :key="subItem"
                  class="subClass__title list-group-item border-0"
                  @click.prevent="setSearchText(subItem)"
                >
                  {{ subItem }}
                </li>
              </ul>
            </a>
          </div>
        </div>
        <div class="col-xl-10 products__content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/BaseAlertMessage.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Alert,
    Breadcrumb,
  },
  data() {
    return {
      classObj: {
        sort: [],
        map: {},
      },
      thisPage: 'products',
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.CusProducts.products,
      categories: (state) => state.CusProducts.categories,
    }),
  },
  watch: {
    categories() {
      this.setClassObj();
    },
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts(page = 1) {
      await this.$store.dispatch('getProducts', page);
    },
    firstFloor(item) { // 顯示第一層目錄
      if (item.includes('>')) {
        return item.split('>')[0];
      }
      return item;
    },
    setClassObj() {
      this.categories.forEach((item) => {
        const firstClass = item.split('>')[0];
        if (!this.classObj.map[firstClass]) {
          this.classObj.sort.push(firstClass);

          this.$set(this.classObj.map, firstClass, {});
          this.$set(this.classObj.map[firstClass], 'sort', []);
          this.$set(this.classObj.map[firstClass], 'hidden', true);
        }
        this.classObj.map[firstClass].sort.push(item.split('>')[1]);
      });
    },
    setSearchText(text) {
      this.$router.push({ // ##
        name: 'products',
      }).catch(() => {});
      this.$store.commit('SEARCH_TEXT', text);
    },
    showSubClass(mainClass, event) {
      event.target.classList.toggle('show');
      setTimeout(() => {
        this.classObj.map[mainClass].hidden = !this.classObj.map[mainClass].hidden;
      }, 350);
    },
  },
};
</script>

<style lang="scss">
  #products{
    // background-color: #FFFCE5;
    font-family:'Microsoft JhengHei',-apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  }
  .products{
    .container{
      @media screen and(min-width: 1200px){
        max-width: 1320px;
      }
    }

    &__sidebar{

      color:#3F3B00;
      align-self: start;
      padding-top:40px;
      padding-bottom: 40px;
      .list-group-item{
        background-color: transparent;
        color:inherit;
        color: #3F3B00;
        padding:10px 10px 10px 13%;
        border:0;
      }

      .mainClass{
        .list-group-item{
          position: relative;
        }
        &__title{
          display:inline-block;
          padding-left: 10%;
          margin-bottom:12px;
          color:inherit;
          border-left:3px solid #3F3B00;
          border-radius: 0;
        }

        &__arrow{
          display: inline-block;
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
        .list-group-item{
          padding: 3px 30px 6px;
        }
      }
    }
  }
</style>
