<template>
  <div id="app">
    <BaseLoading
      :active.sync="isLoading"
      :loader="'dots'"
      :color="'#3F3B00'"
      :opacity="1"
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
    this.$store.dispatch('initWisht');
  },
};
</script>

<style lang="scss">
  @import "assets/scss/all";
  // @import "assets/scss/helpers/_helpers";
</style>
