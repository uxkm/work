<template>
  <section role="contentinfo" class="uksection" aria-label="Toasts">
    <h1 class="h1">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Toasts',
  layout: 'guide',
  data() {
    return {
      title: 'Toasts',
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
