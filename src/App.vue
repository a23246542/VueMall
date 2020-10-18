<template>
  <div id="app">
    <BaseLoading
      :active.sync="isLoading"
      :loader="'dots'"
      :color="'#3F3B00'"
      :opacity="0.7"
    />
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    this.$store.dispatch('initWish');
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/all";
</style>
