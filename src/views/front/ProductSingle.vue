<template>
  <!-- <div> -->
  <div
    v-if="product.imageUrl[0]"
    class="container productSingle"
  >
    <div class="row mb-45">
      <div class="col-md-7 text-center">
        <img
          :src="product.imageUrl[selectedImgIndex]"
          alt=""
          class="img-fluid mb-3 bg-white"
          style="weight:100%;height:500px;object-fit:cover;"
        >
        <div class="productSingle__cusScroll overflow-x-auto">
          <ul class="d-flex productSingle__thumbImgs thumbImgs mb-0 list-unstyled">
            <!-- <div class="thumbImgs__oneThumbCol"
                            v-for="(item,index) in product.imageUrl" :key="item"
                          > -->
            <!-- <li class="thumbImgs__oneThumbImg flex-shrink-0 bg-cover" -->
            <li
              v-for="(item,index) in product.imageUrl"
              :key="item"
              class="thumbImgs__oneThumbImg bg-cover"
              :class="{
                'thumbImgs__oneThumbImg--selected':selectedImgIndex==index,
              }"
              :style="{
                backgroundImage:`url(${product.imageUrl[index]})`
              }"
              @click="setThumbImgIndex(index)"
            />
          <!-- </div> -->
          </ul>
        </div>
      </div>
      <div class="col-md-5">
        <div class="mb-3">
          <span
            v-if="product.category"
            class="d-inline-block px-1 text-primary border-bottom
            border-primary font-weight-bold"
          >
            {{ product.category.split('>')[1] }}系列
          </span>
        </div>
        <h2 class="text-secondary1 font-weight-bold">
          {{ product.title }}
        </h2>
        <p class="productSingle__content mb-2">
          {{ product.content }}
        </p>
        <div class="d-flex justify-content-between mb-5 border-bottom">
          <small
            v-if="product.id"
            class="productSingle__id"
          >
            產品編號{{ product.id.slice(-5).toUpperCase() }}
          </small>
          <!-- <span>{{product.origin_price | dollars}}</span>/<span>
          {{product.price | dollars}}</span> -->
          <span
            v-if="true"
            class="productSingle__favorite text-primary"
          >
            加入收藏 <i class="far fa-heart" />
          </span>
          <span
            v-if="false"
            class="productSingle__favorite text-primary"
          >
            加入收藏 <i class="fas fa-heart" />
          </span>
        </div>
        <div class="productSingle__price d-flex align-items-baseline mb-3">
          <span class="mr-2">NT{{ product.origin_price | dollars }}</span>
          <span><del>NT{{ product.price | dollars }}</del></span>
        </div>
        <div class="d-flex align-items-end mb-6">
          <!-- ##input-group -->
          <div class="input-group w-auto">
            <div class="input-group-prepend">
              <button
                type="button"
                class="btn btn-secondary"
                @click="updateProductQty('add')"
              >
                +
              </button>
            </div>
            <input
              v-model.number="product.qty"
              type="text"
              class="form-control text-center"
              style="max-width:100px"
            >
            <div class="input-group-append mr-3">
              <button
                type="button"
                class="btn btn-secondary"
                @click="updateProductQty('reduce')"
              >
                -
              </button>
            </div>
          </div>
          <small class="text-success">尚有庫存</small>
        </div>
        <!-- <div class="productSingle__buyArea d-flex justify-content-end pr-4"> -->
        <div class="productSingle__buyArea">
          <button
            type="button"
            class="btn productSingle__nowBuy btn-primary mr-3"
            @click="buyProduct('directBuy')"
          >
            直接購買
          </button>
          <button
            type="button"
            class="btn productSingle__addCar btn-primary"
            @click="buyProduct()"
          >
            加入購物車
          </button>
        </div>
        <p class="pl-2 mb-5">
          <small class="text-muted"> 付款後，從備貨到寄出商品為 2 個工作天。（不包含假日）</small>
        </p>
        <!-- <div>
                    </div> -->
        <div class="promoTags">
          <div class="promoTags__title border-bottom">
            <span>優惠活動</span>
          </div>
          <div class="promoTags__container">
            <ul class="pl-3 mt-3 list-unstyled">
              <li class="promoTags__tag">
                <span class="d-inline-block p-1 bg-primary text-white">折扣</span>
                <span class="d-inline-block py-1 pl-2 pr-4 bg-white text-gray">全館商品滿萬送折扣券</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-7">
        <div class="productInfo">
          <div class="productInfo__nav">
            <ul class="d-flex mb-0">
              <li
                class="nav__item"
                :class="{'nav__item--active':selectedPrdInfoView==='feature'}"
                @click="setInfoView('feature')"
              >
                商品特色
              </li>
              <li
                class="nav__item"
                :class="{'nav__item--active':selectedPrdInfoView==='specification'}"
                @click="setInfoView('specification')"
              >
                運送規範
              </li>
              <li
                class="nav__item"
                :class="{'nav__item--active':selectedPrdInfoView==='shipmentRule'}"
                @click="setInfoView('shipmentRule')"
              >
                注意事項
              </li>
            </ul>
          </div>
          <div class="productInfo__contentArea  bg-white text-secondary2">
            <!-- <div class="productInfo__view"> -->
            <div
              class="productInfo__featureView productInfo__p ql-editor"
              :class="{'productInfo__featureView--show'
                :selectedPrdInfoView==='feature'}"
            >
              <!-- <p>{{ product.description }}</p> -->
              <!-- eslint-disable -->
            <p v-html="product.description" />
            <!-- eslint-enable -->
            </div>
            <div
              class="productInfo__specificationView productInfo__p"
              :class="{'productInfo__specificationView--show'
                :selectedPrdInfoView==='specification'}"
            >
              <p>/運送規範</p>
              <p>
                商品以黑貓宅急便或新竹貨運寄送，出貨時間為週一至週六。<br>
                大型商品(如:帳篷、桌椅等)以貨運公司配送。台灣本島地區，<br>
                下午四點完成訂單，隔日送達(偏遠山區、離島例外)。
              </p>
            </div>
            <div
              class="productInfo__shipmentRuleView productInfo__p"
              :class="{'productInfo__shipmentRuleView--show'
                :selectedPrdInfoView==='shipmentRule'}"
            >
              <!-- <p>/注意事項</p> -->
              <div>
                <p>
                  /商品保固說明<br>
                  META所售出商品均享有一年保固維修服務，人為損壞或不當使用不在保固範圍內。<br>
                  ※出清品及部分特殊商品依說明公告為主。<br>
                </p>
                <p>
                  ＊維修方式 ：
                  一年內維修，寄費由客戶負擔，寄回由META負擔 。<br>
                  一年後來回運費則由客戶負擔。<br>
                </p>
                <p>
                  /商品退換貨<br>
                  網路購物的消費者，都可以依照消費者保護法的規定，享有商品貨到日起七天猶豫期的權益。
                  但猶豫期並非試用期，所以，您所退回的商品必須是全新的狀態、而且完整包裝；
                  請注意保持商品本體、 配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性，
                  切勿缺漏任何配件或損毀原廠外盒。
                </p>
              </div>
            </div>
          <!-- </div> -->
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="sideProductList">
          <div class="sideProductList__title mb-3">
            <h4 class="mb-1">
              相關產品列表
            </h4>
          </div>
          <div class="sideProductList__group">
            <ul v-if="relatedProducts">
              <li
                v-for="(item,index) in sameCategoryProducts"
                :key="index+item.id"
                class="sidePrdItem px-2 py-2 border bg-white"
              >
                <div class="d-flex justify-content-between align-items-center">
                  <div class="sidePrdItem__infoBox p-3">
                    <div class="sidePrdItem__title text-truncate">
                      {{ item.title }}
                    </div>

                    <div class="sidePrdItem__price">
                      NT${{ item.price }}
                    <!-- <small class="sidePrdItem__originPrice"><del>NT$28500</del></small> -->
                    </div>
                  <!-- <span class="sidePrdItem__subClassTag">帳篷</span> -->
                  </div>
                  <!-- @@picBox 或boxPic -->
                  <div class="sidePrdItem__picBox">
                    <img
                      :src="item.imageUrl[0]"
                      alt=""
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
} from 'vuex';

export default {
  data() {
    return {
      id: '',
      product: {
        imageUrl: [],
        qty: 1,
      },
      selectedImgIndex: 0,
      selectedPrdInfoView: 'feature',
      relatedProductsNum: 2,
    };
  },
  computed: {
    ...mapState({
      allProducts: (state) => state.CusProducts.products,
      carts: (state) => state.Cart.cart.carts,
    }),
    sameCategoryProducts() {
      return this.allProducts.filter((item) => item.category === this.product.category);
    },
    relatedProducts() {
      const wantNum = this.relatedProductsNum; // 設定想要呈現的隨機產品數量
      let relatedProducts = [];

      // 得到1~x之間的隨機整數
      function getRandomInt(min, max) {
        const min1 = Math.ceil(min);
        const max1 = Math.floor(max);
        return Math.floor(Math.random() * (max1 - min1)) + min1;
        // 不含最大值，含最小值
      }

      const randomSet = new Set();
      while (randomSet.size !== wantNum && this.allProducts.length) {
        randomSet.add(getRandomInt(1, this.allProducts.length));
      }
      const randomIndexs = Array.from(randomSet);
      // console.log(randomIndexs);

      relatedProducts = randomIndexs.map((item) => this.allProducts[item]);

      return relatedProducts;
      // return 1;
    },
  },
  watch: {
    product() {
      const breadcrumbList = [
        {
          routerName: 'home',
          title: '首頁',
        },
        {
          routerName: 'products',
          title: '商品一覽',
        },
        {
          routerName: 'productSingle',
          title: this.product.title,
          params: this.product.id,
        },
      ];

      // this.$store.dispatch('setBreadcrumbList', ['home', 'products', 'productSingle']);
      this.$store.dispatch('setBreadcrumbList', breadcrumbList);
    },
  },
  created() {
    this.getSingleProduct();
    // console.log('產品內頁的route', this.$route);
  },
  methods: {
    getSingleProduct() {
      this.id = this.$route.params.productId;

      this.$store.commit('LOADING', true);
      const api = `ec/product/${this.id}`;
      this.$instanceCus.get(api)
        .then((res) => {
          this.$store.commit('LOADING', false);
          this.product = res.data.data;
          // this.product.qty=1;
          // this.$set(this.product,qty,1);//%%qrt nodefined
          this.$set(this.product, 'qty', 1);
        });
    },
    setThumbImgIndex(index) {
      this.selectedImgIndex = index;
    },
    setInfoView(selectedItem) {
      this.selectedPrdInfoView = selectedItem;
    },
    updateProductQty(type) {
      switch (type) {
      case 'add':
        if (this.product.qty === this.product.options.stock) {
          // ~@@[Vue warn]: Duplicate keys detected: 'NaN'. This may cause an update error.
          this.$bus.$emit('message:push', '商品庫存不足');
        } else {
          this.product.qty += 1;
        }
        break;
      case 'reduce':

        if (this.product.qty === 1) {
          this.$bus.$emit('message:push', '購買數量不能少於1');
        } else {
          this.product.qty -= 1;
        }
        break;
      default:
        break;
      }
    },
    buyProduct(isDirectBuy) {
      this.$store.commit('LOADING', true);
      const api = 'ec/shopping';
      const cartItem = {
        product: this.product.id,
        quantity: this.product.qty,
      };
      // const hasInCartItem = this.carts.find((cartItem) => cartItem.product.id === this.product.id);// %%eslint no-shadow
      const hasInCartItem = this.carts.find((cart) => cart.product.id === this.product.id);// %%eslint no-shadow

      if (!hasInCartItem) {
        this.$instanceCus.post(api, cartItem)
          .then(() => {
            this.$store.commit('LOADING', false);
            this.$bus.$emit('message:push', `${this.product.title}已加入購物車`, 'success');
            // this.$refs.cartModal.getCart();
            this.$store.dispatch('getCart');
            if (isDirectBuy) {
              this.$router.push({
                name: '購物清單',
              });
            }
          });
      } else {
        const data = {
          productId: hasInCartItem.product.id,
          newQty: hasInCartItem.quantity + this.product.qty,
        };
        this.$store.dispatch('editCart', data)
          .then(() => {
            this.$store.commit('LOADING', false);
            this.$bus.$emit('message:push', `${this.product.title}已加入購物車`, 'success');
            if (isDirectBuy) {
              this.$router.push({
                name: '購物清單',
              });
            }
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* Import the Quill styles you want */
/* @import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css'; */
.ql-editor {
  overflow-x: hidden;
  /* font-size: 12px; */
}

/* %%組件 */
/* eslint-disable */
/deep/.ql-editor img {
  max-width: 100% !important;
  height: auto;
}

/* eslint-enable */
</style>
