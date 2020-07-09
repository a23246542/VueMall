<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <dashboard/> -->
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import dashboard from './views/back/dashboard.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    dashboard,
  },
};
</script>

<style lang="scss">
  @import "assets/scss/all";
</style>
