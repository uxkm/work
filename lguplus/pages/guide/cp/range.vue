<template>
  <section role="contentinfo" class="uksection" aria-label="Rating">
    <h1 class="h1">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Rating',
  layout: 'guide',
  data() {
    return {
      title: 'Rating',
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
