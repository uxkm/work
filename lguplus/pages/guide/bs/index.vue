<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="Foundation">
    <h1>{{ title }} <span>Web</span></h1>
    <div class="uk-sub-description">
      <Guide-flag />
    </div>
    <Guide-snb-bs />
  </section>
</template>

<script>
export default {
  name: 'Base',
  layout: 'guide',
  data() {
    return {
      title: 'Foundation',
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
