<template>
  <section role="contentinfo" class="uksection" aria-label="Layout">
    <h1 class="h1">{{ title }}</h1>
    <div class="uk-linkgroup">
      <nuxt-link to="/main-sub-customer" target="_blank" title="새창 열림">고객지원 서브 메인 기본 레이아웃 구조</nuxt-link>
      <nuxt-link to="/main-sub-my" target="_blank" title="새창 열림">마이페이지 서브 메인 기본 레이아웃 구조</nuxt-link>
    </div>
    <h1 class="h1">Z-Index</h1>
    <p class="h3">헤더(Fixed) - 200</p>
    <p class="h3">팝업 - 1000 ~ 1100</p>
    <p class="h3">컨텐츠 - 1 ~ 99</p>
    <p class="h3">퀵메뉴(있을 경우) - 100</p>
  </section>
</template>

<script>
export default {
  name: 'Layout',
  layout: 'guide',
  data() {
    return {
      title: 'Layout System',
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
