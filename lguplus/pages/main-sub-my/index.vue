<template>
  <div class="p-main-sub-my">
    <div class="submain-section">
      <div class="toparea-contents">
        <section class="sub-top">
          <h1 class="h1">Title</h1>
        </section>
        <!-- //.sub-top -->
      </div>
      <!-- //.toparea-wrap -->
      <div class="middlearea-contents">
        <div class="middlearea">
          <p class="h3">서브헤딩</p>
        </div>
        <!-- //.middlearea -->
      </div>
      <!-- //.middlearea-contents -->
    </div>
    <!-- //.submain-section  -->
  </div>
</template>

<script>
export default {
  layout: 'l-sub-main',
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: '/style/css/p-main-sub-my.min.css',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
