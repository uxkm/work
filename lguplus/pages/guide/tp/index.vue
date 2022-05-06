<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="공통 템플릿">
    <h1>{{ title }} <span>Web</span></h1>
    <div class="uk-sub-description">
      <Guide-flag />
    </div>
    <Guide-snb-tp />
  </section>
</template>

<script>
export default {
  name: 'Temp',
  layout: 'guide',
  data() {
    return {
      title: '공통 템플릿',
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
