<template>
  <div>
    <NavHeader />
    <router-view
      class="header-pt"
    />
    <!-- </div> -->
    <NavFooter />
  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader.vue';
import NavFooter from '@/components/NavFooter.vue';

export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter,
  },
};
</script>

<style lang="scss" scoped>
.header-pt{
  padding-top: 80px;
}
</style>
