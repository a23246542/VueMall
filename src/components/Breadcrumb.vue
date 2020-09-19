<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb bg-transparent">
      <li
        v-for="(routerName, index) in breadcrumbList" :key="index+routerName"
        class="breadcrumb-item"
      >
        <router-link :to="{name:routerName}">
          {{ BreadcrumbItemName(routerName) }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed: {
    breadcrumbList() {
      return this.$store.state.breadcrumbList;
    },
  },
  methods: {
    BreadcrumbItemName(routerName) {
      let BreadcrumbItemName = '';

      switch (routerName) {
      case 'home':
        BreadcrumbItemName = '首頁';
        break;
      case 'products':
        BreadcrumbItemName = '商品一覽';
        break;
      case 'productSingle':
        BreadcrumbItemName = '商品資訊';
        break;
      default:
        BreadcrumbItemName = '首頁';
        break;
      }
      return BreadcrumbItemName;
    },
  },
};
</script>

<style>

</style>
