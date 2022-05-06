<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="슬라이더">
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: 'SliderType',
  layout: 'guide',
  data() {
    return {
      title: 'Slider Type',
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
