<template>
  <div>
    <NavHeader />
    <router-view />
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
