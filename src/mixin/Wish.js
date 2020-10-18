export default {
  computed: {
    wishItemIdList() {
      return this.$store.state.WishList.wishItemIdList;
    },
  },
  methods: {
    clickHeart(event, prdId) {
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
