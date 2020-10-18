export default {
  computed: {
    // heartStyle() { // ##
    //   return this.wishItemIdList.indexOf(this.thisProduct.id) === -1
    //     ? 'far fa-heart'
    //     : 'fas fa-heart text-primary';
    // },
    // ...mapState(['wishItemIdList']),//%%模組的難怪失敗要用物件
    wishItemIdList() {
      return this.$store.state.WishList.wishItemIdList;// @@放在各別組件是否更耗效能
    },
  },
  methods: {
    clickHeart(event, prdId) {
      console.log('clickHeart', event);
      // const posi = this.wishItemIdList.indexOf(prdId);
      // if (posi === -1) {
      //   this.$store.commit('ADD_WISH', prdId);
      // } else {
      //   this.$store.commit('REMOVE_WISH', prdId);
      // }
      if (event.toElement.classList.contains('far')) { // 未加入收藏
        this.$store.commit('ADD_WISH', prdId);
      }

      if (event.toElement.classList.contains('fas')) { // 已加入收藏
        this.$store.commit('REMOVE_WISH', prdId);
      }
    },
    heartStyle(itemId) { // ##
      return this.wishItemIdList.indexOf(itemId) === -1
        ? 'far fa-heart'
        : 'fas fa-heart text-primary';
    },
  },
};
