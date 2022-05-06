<template>
  <section role="contentinfo" class="uksection" aria-label="Popover">
    <h1 class="h1">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Popover',
  layout: 'guide',
  data() {
    return {
      title: 'Popover',
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
