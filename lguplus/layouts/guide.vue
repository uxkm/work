<template>
  <div class="ukguide" aria-label="UI/UX Guide">
    <Guide-nav />
    <input id="ukSnbToggle" type="checkbox" name="ukSnbToggle" class="uktoggle" checked />
    <label for="ukSnbToggle" class="uktoggle-label"><span class="label-open">좌측메뉴 열기</span><span class="label-close">좌측메뉴 접기</span></label>
    <div class="ukmain">
      <Guide-snb />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  layout: 'guide',
  head() {
    return {
      title: 'LG U+ UI/UX Guide',
      link: [
        {
          rel: 'stylesheet',
          href: '/style/css/guide.min.css',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
