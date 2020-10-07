<template>
  <div class="shopping">
    <NavHeader />
    <div
      v-if="nowPage"
      class="processStep row"
    >
      <div class="col-md-8 mx-auto">
        <ul class="d-flex">
          <li class="processStep__item">
            <span class="processStep__number">1</span>
            購物車
          </li>
          <li class="processStep__item">
            <span class="processStep__number">2</span>
            填寫資料
          </li>
          <li class="processStep__item">
            <span class="processStep__number">3</span>
            訂單確認
          </li>
        </ul>
        <!-- @@bem -->
        <!-- <div class="progress progress--processStep"> -->
        <div class="processStep__progress progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{width:barWidth}"
          >
            <!-- style="width: 33%;" -->
          </div>
        </div>
      </div>
    </div>
    <router-view
      style="margin-bottom:80px"
      @change-page="changeBar"
    />
    <NavFooter />
  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader.vue';
import NavFooter from '@/components/NavFooter.vue';

export default {
  components: {
    NavHeader,
    NavFooter,
  },
  data() {
    return {
      barWidth: '0%',
    };
  },
  computed: {
    nowPage() {
      return this.$store.state.nowPage;
    },
  },
  watch: {
    nowPage(newVal) {
      // console.log('改變頁數', newVal);
      switch (newVal) {
      case 'order_preview':
        this.barWidth = '33%';
        break;
      case 'order_info':
        this.barWidth = '66%';
        break;
      case 'order_confirm':
        this.barWidth = '100%';
        break;
      default:
        break;
      }
    },
  },
  // activated() {
  //   console.log(this.$route.name);// @@activated無效
  // },
  mounted() {
    // this.initBar();
  },
  methods: {
    changeBar(nowPage) {// eslint-disable-line
      // console.log('換頁');
    },
  },
};
</script>
