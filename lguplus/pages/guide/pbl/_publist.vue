<template>
  <div class="ukguide publishing" aria-label="UI/UX Guide">
    <Guide-publist-nav @reAcc2="changeAcc2" @reAcc1="changeAcc1" />
    <div class="ukmain">
      <!-- <Nuxt ref="mainComponent" /> -->
      <div class="only-show-pub" style="position: fixed; top: 0; left: 0; width: 100%; height: 600px; z-index: 500" v-if="pubVal.publist == 'pub114' && noticeStatus">
        <iframe src="https://docs.google.com/document/d/1ZeaHfLbwJZdQNIEZKiQVmbmbndVmbeGyn7uHvRt5CdY/edit?usp=sharing" frameborder="0"></iframe>
        <button class="btn-close-btn" @click="showDoc1">문서닫기</button>
      </div>
      <div class="only-show-pub" style="position: fixed; top: 0; left: 0; width: 100%; height: 600px; z-index: 500" v-if="pubVal.publist == 'dev114' && noticeStatus">
        <iframe src="https://docs.google.com/document/d/19j-yZqm4mUd8ifj0VNJAxP6mibsvI-Gn_3aQsh8YWlc/edit?usp=sharing" frameborder="0"></iframe>
        <button class="btn-close-btn" @click="showDoc1">문서닫기</button>
      </div>
      <div class="only-show-pub" style="position: fixed; top: 0; left: 0; width: 100%; height: 600px; z-index: 500" v-if="pubVal.publist == 'des114' && noticeStatus">
        <iframe src="https://docs.google.com/document/d/19j-yZqm4mUd8ifj0VNJAxP6mibsvI-Gn_3aQsh8YWlc/edit?usp=sharing" frameborder="0"></iframe>
        <button class="btn-close-btn" @click="showDoc1">문서닫기</button>
      </div>
      <div class="only-show-pub" style="position: fixed; top: 0; left: 0; width: 100%; height: 600px; z-index: 500" v-if="pubVal.publist == 'plan114' && noticeStatus">
        <iframe src="https://docs.google.com/document/d/1vUrfBWliSyLe3PaIRshmt_yg4ViU-qH5Ah5HAGFUEv0/edit?usp=sharing" frameborder="0"></iframe>
        <button class="btn-close-btn" @click="showDoc1">문서닫기</button>
      </div>
      <button class="btn-open-btn" @click="showDoc1" v-if="!noticeStatus">문서열기</button>
      <Guide-publist-table ref="mainComponent" />
    </div>
  </div>
</template>

<script>
export default {
  pageUrl: null,
  name: 'Guide',
  data() {
    return {
      pubVal: this.$route.params,
      noticeStatus: true,
    };
  },
  //   layout: 'guide',
  head() {
    return {
      title: 'LG U+ UI/UX Guide',
      link: [
        {
          rel: 'stylesheet',
          href: '/style/css/guide.min.css',
        },
      ],
      // script: [
      //   {
      //     src: 'https://code.jquery.com/jquery-3.5.1.min.js',
      //   },
      // ],
      bodyAttrs: {
        class: 'pulishingList-body',
      },
    };
  },
  methods: {
    changeAcc2(url) {
      this.$refs.mainComponent.avgAccount2(url);
      // xthis.pageUrl = url;
    },
    changeAcc1() {
      this.$refs.mainComponent.avgAccount1();
    },
    showDoc1() {
      console.log(7891);
      this.noticeStatus = !this.noticeStatus;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-close-btn,
.btn-open-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 18px;
  transform: translateY(100%);
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  padding: 5px 20px;
}
.btn-open-btn {
  position: absolute;
  top: 90px;
  bottom: auto;
  z-index: 500;
}
</style>
