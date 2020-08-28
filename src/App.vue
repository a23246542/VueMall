<template>
  <div id="app">
    <BaseLoading :active.sync="isLoading"/>
    <router-view/>
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
};
</script>

<style lang="scss">
  @import "assets/scss/all";
</style>
