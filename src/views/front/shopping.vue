<template>
  <div class="shopping">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link :to="{name:'home'}" tag="a" class="navbar-brand">
        首頁
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{name:'購物清單'}" tag="a" class="nav-link">
              購物清單
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'收件資訊'}" class="nav-link">
              收件資訊
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'最後確認'}" class="nav-link">
              最後確認
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'訂單完成'}" class="nav-link">
              訂單完成
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="processStep row">
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
          <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
               :style="{width:barWidth}"
          >
            <!-- style="width: 33%;" -->
          </div>
        </div>
      </div>
    </div>
    <router-view
      @changePage="changeBar"
    />
    <p>shopping-footer</p>
  </div>
</template>
<script>
export default {
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
    nowPage(newVal, val) {
      console.log('改變頁數', newVal);

      switch (newVal) {
      case 'order_preview':
        this.barWidth = '33%';
        break;// %%難怪一直跑出66%
      case 'order_info':
        this.barWidth = '66%';
        break;
      case 'order_confirm':
        this.barWidth = '100%';
        break;
      }
    },
  },
  // created() {
  mounted() {
    // this.initBar();
  },
  methods: {
    changeBar(nowPage) {
      console.log('換頁');
    },
    // initBar() {
    //   const { path } = this.$route;
    //   console.log(this.$route);//%% 會是shopping/order_preview

    //   switch(path){
    //     case 'order_preview':
    //       this.barWidth = '33%';
    //     case 'order_info':
    //       this.barWidth = '66%';
    //   }
    // }
  },
};
</script>
