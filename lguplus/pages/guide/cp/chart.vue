<template>
  <section role="contentinfo" class="uksection" aria-label="Chart">
    <h1 class="h1">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Chart',
  layout: 'guide',
  data() {
    return {
      title: 'Chart',
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
