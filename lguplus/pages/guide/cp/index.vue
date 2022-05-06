<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="Component">
    <h1>{{ title }} <span>Web</span></h1>
    <div class="uk-sub-description">
      <Guide-flag />
    </div>
    <Guide-snb-cp />
  </section>
</template>

<script>
export default {
  name: 'Compoent',
  layout: 'guide',
  data() {
    return {
      title: 'Component',
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="scss"></style>
