<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="LNB">
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'LNBType',
  layout: 'guide',
  data() {
    return {
      title: 'LNB Type',
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
