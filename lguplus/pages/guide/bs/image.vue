<template>
  <section role="contentinfo" class="uksection" aria-label="Image">
    <h1 class="h1">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Image',
  layout: 'guide',
  data() {
    return {
      title: 'Image System',
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
