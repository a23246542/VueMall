<!-- ##麵包屑邏輯原本寫這樣 -->
<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb bg-transparent">
      <li
        v-for="(routerName, index) in breadcrumbList" :key="index+routerName"
        class="breadcrumb-item"
      >
        <router-link :to="{name:routerName,params:productSingleId}">
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
      productSingleId: '',
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
        this.productSingleId = this.$route.params;
        break;
      default:
        BreadcrumbItemName = '首頁';
        break;
      }
      return BreadcrumbItemName;
    },
  },
};