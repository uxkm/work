<template>
  <div class="ukheader">
    <p class="guide-logo">
      <a href="/guide/"><img :src="$config.asset.imgURL + '/images/common/BI-white.svg'" alt="LGU plus 로고" /> UI/UX Guide</a>
    </p>
    <nav class="uknav">
      <Nuxt-link to="/guide/" exact>프로젝트 환경</Nuxt-link>
      <Nuxt-link to="/guide/bs" exact>Foundation</Nuxt-link>
      <Nuxt-link to="/guide/cp" exact>Component</Nuxt-link>
      <Nuxt-link to="/guide/tp" exact>Template</Nuxt-link>
      <Nuxt-link to="/guide/wa/wacheck" exact>웹 접근성 체크리스트</Nuxt-link>
      <Nuxt-link to="/guide/wa/wareport" exact>웹 접근성 요약보고서</Nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'GuideNav',
};
</script>
