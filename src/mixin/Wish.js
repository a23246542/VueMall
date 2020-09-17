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
    clickHeart(itemId) {
      // console.log('clickHeart');
      const posi = this.wishItemIdList.indexOf(itemId);
      if (posi === -1) {
        this.$store.commit('ADD_WISH', itemId);
      } else {
        this.$store.commit('REMOVE_WISH', posi);
      }
    },
    heartStyle(itemId) { // ##
      return this.wishItemIdList.indexOf(itemId) === -1
        ? 'far fa-heart'
        : 'fas fa-heart text-primary';
    },
  },
};
