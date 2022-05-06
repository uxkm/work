<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="Tab">
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'TabType',
  layout: 'guide',
  data() {
    return {
      title: 'Tab Type',
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
