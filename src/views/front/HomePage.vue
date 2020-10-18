<template>
  <div class="meta index">
    <div class="meta__banner bg-cover">
      <div class="meta__bannerFont">
        <div class="meta__bannerTitle">
          <p class="bannerTitle__p1">
            大自然
          </p>
          <p class="bannerTitle__p2">
            偶爾一下吧
          </p>
        </div>
        <p class="bannerTitle__subP">
          Camping with Your Life
        </p>
      </div>
    </div>
    <div class="meta__container container">
      <section class="metaSlogan">
        <h2>戶外露營 X 風格時尚 X 品味生活</h2>
        <p>
          城市中的氣息，是否讓你沒有時間停下思考，總是被時間趕著走<br>
          偶爾來場大自然，遠眺綠景為自己停下腳步，欣賞這無盡的美，準備好自己的旅程吧！
        </p>
      </section>
      <section class="metaPrdTab">
        <ul class="metaPrdTab__container d-flex justify-content-center mb-0">
          <li class="metaPrdTab__item flex-center">
            <div
              class="metaPrdTab__itemBox metaPrdTab__itemBox--tent"
              @click="setHomeSearchText('帳篷','TENT'),slideToPrdArea()"
            >
              <div>
                <div class="metaPrdTab__title">
                  <h3>帳篷</h3>
                  <div>TENT</div>
                </div>
                <div class="metaPrdTab__txt">
                  各式款式<br>選擇風格露營
                </div>
              </div>
            </div>
          </li>
          <li class="metaPrdTab__item flex-center">
            <div
              class="metaPrdTab__itemBox metaPrdTab__itemBox--bedding"
              @click="setHomeSearchText('寢具','BEDDING'),slideToPrdArea()"
            >
              <div>
                <div class="metaPrdTab__title">
                  <h3>野外寢具</h3>
                  <div>BEDDING</div>
                </div>
                <div class="metaPrdTab__txt">
                  一覺好眠<br>放鬆就寢用品
                </div>
              </div>
            </div>
          </li>
          <li class="metaPrdTab__item flex-center">
            <div
              class="metaPrdTab__itemBox metaPrdTab__itemBox--funiture"
              @click="setHomeSearchText('戶外家具','Furniture'),slideToPrdArea()"
            >
              <div>
                <div class="metaPrdTab__title">
                  <h3>戶外家俱</h3>
                  <div>Furniture</div>
                </div>
                <div class="metaPrdTab__txt">
                  不可或缺<br>感受家裡溫度
                </div>
              </div>
            </div>
          </li>
          <li class="metaPrdTab__item flex-center">
            <div
              class="metaPrdTab__itemBox metaPrdTab__itemBox--picnic"
              @click="setHomeSearchText('野餐','PICNIC'),slideToPrdArea()"
            >
              <div>
                <div class="metaPrdTab__title">
                  <h3>野餐系列</h3>
                  <div>PICNIC</div>
                </div>
                <div class="metaPrdTab__txt">
                  享受佈置<br>打造戶外氛圍
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section class="metaCopyPart1">
        <div class="row">
          <div class="col-12">
            <div class="metaCopyPart1__box">
              <div class="metaCopyPart1__txt">
                <div class="metaCopyPart1__titleTxt">
                  露營趣
                </div>
                <div class="metaCopyPart1__pTxt">
                  露營的美好<br>活出生活中的美學
                </div>
              </div>
              <div class="metaCopyPart1__pic">
                <div class="col-6 col-md-4 ml-3">
                  <img
                    src="@/assets/images/content_pic1.jpg"
                    alt=""
                  >
                </div>
                <div class="col-6 col-md-4">
                  <img
                    src="@/assets/images/content_pic2.jpg"
                    alt=""
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="meta__sectionBg sectionBg bg-cover">
      <section class="metaCopyPart2">
        <div class="metaCopyPart2__contentBlock">
          <div class="metaCopyPart2__txtBox d-flex align-items-center">
            <div class="metaCopyPart2__txt">
              <h4 class="metaCopyPart2__titleTxt">
                #歸屬大自然
              </h4>
              <div class="metaCopyPart2__pTxt">
                讓身心沉浸在大自然<br>
                歸屬自我深處的探索
              </div>
            </div>
          </div>
          <div class="metaCopyPart2__pic">
            <img
              src="@/assets/images/content_pic3.jpg"
              alt=""
            >
          </div>
        </div>
      </section>
      <section class="metaCopyPart3">
        <div class="metaCopyPart3__contentBlock">
          <div class="metaCopyPart3__txtBox d-flex align-items-center">
            <div class="metaCopyPart3__txt">
              <h4 class="metaCopyPart3__titleTxt">
                #戶外找生活
              </h4>
              <div class="metaCopyPart3__pTxt">
                一種自由的路途<br>
                愛上露營的日子
              </div>
            </div>
          </div>
          <div class="metaCopyPart3__pic">
            <div class="metaCopyPart3__picItem pic1">
              <img
                src="@/assets/images/content_pic4.jpg"
                alt=""
              >
            </div>
            <div class="metaCopyPart3__picItem pic2">
              <img
                src="@/assets/images/content_pic5.jpg"
                alt=""
              >
            </div>
          </div>
        </div>
      </section>
    </div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="newProductList">
              <h3 class="meta__sectionTitle">
                新品上市
              </h3>
              <Swiper
                ref="newPrdSwiper"
                :options="swiperOptions"
              >
                <SwiperSlide
                  v-for="item in newProductList"
                  :key="item.id"
                >
                  <div class="prdNewCard border-0">
                    <div
                      class="prdNewCard__imgWrap bg-cover"
                      :style="{
                        backgroundImage:`url(${item.imageUrl[0]})`
                      }"
                    >
                      <span
                        class="prdNewCard__favoriteBadge swiper-no-class"
                        @click="clickHeart($event, item.id)"
                      >
                        <i :class="heartStyle(item.id)" />
                      </span>
                    </div>
                    <div class="prdNewCard__body card-body">
                      <h5
                        class="prdNewCard__title"
                        @click="goNewPrd(item.id)"
                      >
                        {{ item.title }}
                      </h5>
                      <p class="prdNewCard__price card-text">
                        NT${{ item.price }}
                      </p>
                      <p class="prdNewCard__originPrice">
                        <i>
                          NT${{ item.origin_price }}
                        </i>
                      </p>
                      <div
                        class="prdNewCard__cart"
                      >
                        <i
                          class="fas fa-shopping-cart"
                          @click.prevent="addToCart(item)"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <div
                  slot="pagination"
                  class="swiper-pagination"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="adBar" />
    <section>
      <div class="container  m-container-fluid">
        <div class="featureProduct">
          <h3 class="meta__sectionTitle">
            精選商品
          </h3>
          <div class="featureProduct__wrapper">
            <div class="featureProduct__classBanner flex-shrink-0">
              <div
                class="featureProduct__bannerTitle"
                :class="{'changeLocation':limitedProducts.length <= 3}"
              >
                <h4>{{ featureProductTitles[0] }}</h4>
                <p>{{ featureProductTitles[1] }}</p>
              </div>
            </div>
            <div class="featureProduct__listBox">
              <div class="container">
                <div class="row">
                  <div
                    v-for="(item) in limitedProducts"
                    :key="item.id"
                    class="col-xl-4 col-sm-6 productCardCol mb-3"
                  >
                    <ProductCard
                      :this-product="item"
                      :mb="'mb-0'"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container m-container-fluid">
        <div class="metaNews">
          <div class="metaNews__title">
            <h3 class="meta__sectionTitle metaNews__sectionTitle">
              META報報
            </h3>
          </div>
          <div class="metaNews__wrapper">
            <div class="metaNews__item">
              <div class="metaNews__itemPic">
                <img
                  src="@/assets/images/meta_act1.jpg"
                  alt=""
                >
              </div>
              <div class="metaNews__itemTxt">
                <h4>怎麼露營才好玩 /</h4>
                <p class="mb-0">
                  10種露營生活提案
                </p>
              </div>
            </div>
            <div class="metaNews__item">
              <div class="metaNews__itemPic">
                <img
                  src="@/assets/images/meta_act5.jpg"
                  alt=""
                >
              </div>
              <div class="metaNews__itemTxt">
                <h4>夏季踏青趣 /</h4>
                <p class="mb-0">
                  小家庭也能搞定的露營料理
                </p>
              </div>
            </div>
            <div class="metaNews__item">
              <div class="metaNews__itemPic">
                <img
                  src="@/assets/images/meta_act3.jpg"
                  alt=""
                >
              </div>
              <div class="metaNews__itemTxt">
                <h4>夏季踏青趣 /</h4>
                <p class="mb-0">
                  全台十大親子露營區特搜
                </p>
              </div>
            </div>
            <div class="metaNews__item">
              <div class="metaNews__itemPic">
                <img
                  src="@/assets/images/meta_act6.jpg"
                  alt=""
                >
              </div>
              <div class="metaNews__itemTxt">
                <h4>樂哈山賞櫻團 /</h4>
                <p class="mb-0">
                  距上次出團已經有半年多了
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid px-0">
        <div class="metaContactUs bg-cover">
          <div>
            <div class="metaContactUs__logo">
              <img
                src="@/assets/images/Meta-logo-white.png"
                alt=""
              >
            </div>
            <p class="metaContactUs__title">
              聯絡我們
            </p>
            <div class="metaContactUs__info">
              <span>客服專線：02-2655-0567</span>
              <span>服務時間：週一至週五 09:30-18:00</span>
              <span>客服信箱：maoup@maoup.com.tw</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import Wish from '@/mixin/Wish';
import Cart from '@/mixin/Cart';
import 'swiper/swiper-bundle.css';// ##github

export default {
  name: 'Index',
  components: {
    ProductCard,
    Swiper,
    SwiperSlide,
  },
  mixins: [Wish, Cart],
  data() {
    return {
      featurePrdList: [],
      featurePrdListNum: 6,
      featureProductTitles: ['帳篷', 'TENT'],
      swiperOptions: {
        direction: 'horizontal',
        speed: 2000,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        noSwiping: true,
        // noSwipingClass: 'prdNewCard__favoriteBadge',
        // swipeHandler: 'prdNewCard__favoriteBadge',
        // freeModeMomentum: false,
        // on: {
        //   click: (e) => { console.log(e); },
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          897: {
            slidesPerView: 5,
          },
          668: {
            slidesPerView: 3,
          },
        },
      },
    };
  },
  computed: {
    limitedProducts() {
      return this.$store.getters.getSearchProductsByNum(this.featurePrdListNum);
    },
    newProductList() {
      return this.$store.getters.getNewProductsByNum(10);
    },
    swiper() {
      return this.$refs.newPrdSwiper.$swiper;
    },
  },
  created() {
    this.$store.dispatch('getProducts');
    this.$store.dispatch('getNewProducts');
  },
  mounted() {
    this.swiper.slideTo(1, 2000, true);// @@資料已完成.啟動
  },
  methods: {
    goNewPrd(itemId) {
      this.$router.push({
        path: `/products/${itemId}`,
      });
    },
    setHomeSearchText(categoryTxt, ...categoryEngTxt) {
      this.featureProductTitles = [categoryTxt, ...categoryEngTxt];
      this.$store.commit('HOME_SEARCH_TEXT', categoryTxt);
    },
    slideToPrdArea() {
      $('body,html').animate({
        scrollTop: $('.featureProduct').offset().top,
      }, 1500);
    },
  },
};
</script>
