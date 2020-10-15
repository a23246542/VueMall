<template>
  <nav
    v-if="breadcrumbList[0]"
    aria-label="breadcrumb"
  >
    <ol class="breadcrumb bg-transparent">
      <li
        v-for="(routerObj, index) in breadcrumbList"
        :key="index+routerObj.title"
        class="breadcrumb-item"
      >
        <router-link :to="{name:routerObj.routerName,params:routerObj.params?routerObj.params:''}">
          {{ routerObj.title }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      productSingleId: '',
    };
  },
  computed: {
    breadcrumbList() {
      return this.$store.state.breadcrumbList;
    },
  },
  methods: {
  },
};
</script>

<style>

</style>
