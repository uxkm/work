<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="GNB">
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'GNBType',
  layout: 'guide',
  data() {
    return {
      title: 'GNB Type',
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="scss" scoped></style>
