<template>
  <section role="contentinfo" class="uksection" aria-label="Spacing">
    <h1 class="h1">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Spacing',
  layout: 'guide',
  data() {
    return {
      title: 'Spacing System',
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
