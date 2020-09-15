<template>
  <div class="meta index">
    <div class="meta__banner bg-cover"></div>
    <div class="meta__container container">
      <section class="metaSlogan">
        <h2>戶外露營 X 風格時尚 X 品味生活</h2>
        <p>
          城市中的氣息，是否讓你沒有時間停下思考，總是被時間趕著走<br>
          偶爾來場大自然，遠眺綠景為自己停下腳步，欣賞這無盡的美，準備好自己的旅程吧！
        </p>
      </section>
      <section class="metaPrdtab__Container">
        <ul class="d-flex">
          <li class="metaPrdTab__item flex-center">
            <div class="metaPrdTab__itemBox">
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
            <div class="metaPrdTab__itemBox">
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
            <div class="metaPrdTab__itemBox">
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
            <div class="metaPrdTab__itemBox">
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
                  露營的美好 活出生活中的美學
                </div>
              </div>
              <div class="metaCopyPart1__pic">
                <div class="col-6 col-md-4">
                  <img src="/images/content_pic1.jpg" alt="">
                </div>
                <div class="col-6 col-md-4">
                  <img src="/images/content_pic2.jpg" alt="">
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
            <img src="/images/content_pic3.jpg" alt="">
          </div>
        </div>
      </section>
      <section class="metaCopyPart3">
        <div class="metaCopyPart3__contentBlock">
          <div class="metaCopyPart3__txtBox outline d-flex align-items-center">
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
          <div class="metaCopyPart3__pic outline">
            <div class="metaCopyPart3__picItem pic1">
              <img src="/images/content_pic4.jpg" alt="">
            </div>
            <div class="metaCopyPart3__picItem pic2">
              <img src="/images/content_pic5.jpg" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="newProductList outline">
              <h3>新品上市</h3>
              <Swiper ref="newPrdSwiper" :options="swiperOptions">
                <SwiperSlide
                  v-for="item in newProductList" :key="item.id"
                >
                  <img :src="item.imageUrl[0]" alt="" style="width:100%">
                  <!-- <ProductCard
                    :this-product="item"
                    :mb="'mb-0'"
                  ></ProductCard> -->
                </SwiperSlide>

                <div slot="pagination" class="swiper-pagination"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="adBar"></div>
    <section>
      <div class="container">
        <div class="featureProduct">
          <h3>精選產品</h3>
          <div class="featureProduct__wrapper">
            <div class="featureProduct__classBanner outline flex-shrink-0">
              <!-- <img src="/images/tent_bg.jpg" alt=""> -->
              帳篷TENT+box-shadow
            </div>
            <div class="featureProduct__listBox">
              <div class="container">
                <div class="row">
                  <ProductCard
                    v-for="(item) in limitedProducts" :key="item.id"
                    :this-product="item"
                    :mb="'mb-2'"
                  ></ProductCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="metaNews">
          <div class="metaNews__title">
            <h3>最新消息</h3>
          </div>
          <div class="metaNews__wrapper">
            <div class="metaNews__item">
              <div class="metaNews__itemPic">
                <img src="/images/meta_act1.jpg" alt="">
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
                <img src="/images/meta_act2.jpg" alt="">
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
                <img src="/images/meta_act3.jpg" alt="">
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
                <img src="/images/meta_act4.jpg" alt="">
              </div>
              <div class="metaNews__itemTxt">
                <h4>夏季踏青趣 /</h4>
                <p class="mb-0">
                  全台十大親子露營區特搜
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
            <div class="metaContactUs__logo outline">
              Meta
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
import ProductCard from '@/components/ProductCard.vue';// @@沒加.vue有紅線?
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import 'swiper/css/swiper.css';
import 'swiper/swiper-bundle.css';// ##github

export default {
  name: 'Index',
  components: {
    ProductCard,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      featurePrdList: [],
      num: 6,
      swiperOptions: {
        direction: 'horizontal',
        speed: 2000,
        loop: true,
        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false,
        // },
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 896px
          897: {
            slidesPerView: 5,
          },
          // when window width is >= 668px
          668: {
            slidesPerView: 3,
          },
          // when window width is >= 569px
          569: {
            slidesPerView: 2,
          },
        },
      },
    };
  },
  computed: {
    products() {
      return this.$store.state.CusProducts.products;
    },
    limitedProducts() {
      return this.$store.getters.getProductsByNum(this.num); // @@原理
    },
    newProductList() {
      return this.$store.getters.getProductsByNum(10);
    },
    swiper() {
      return this.$refs.newPrdSwiper.$swiper;
    },
  },
  watch: {
    products() {
      // this.featurePrdList
    },
  },
  created() {
    this.$store.dispatch('getProducts');
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper);
    // this.swiper.slideTo(1, 2000, true);// @@原理 資料已完成.啟動
    this.swiper.slideTo(3, 1000, true);// 滑到第幾,時間,回彈禁止
  },
};
</script>
