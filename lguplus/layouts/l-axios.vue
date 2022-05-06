<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import global from '~/js/mixins/global';

export default {
  name: 'LayoutAxios',
  mixins: [global],
  // middleware: ['seoInfo'],
  mounted() {},
};
</script>

<style></style>
