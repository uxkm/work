<template>
  <div>
    <h1>v-runtime-template</h1>
    <div v-html="global"></div>
    <div ref="tgRef">
      <v-runtime-template :template="tpl"></v-runtime-template>
    </div>
    <!-- <button @click="insertStyle">click</button> -->
  </div>
</template>

<script>
import VRuntimeTemplate from 'v-runtime-template';

export default {
  components: {
    VRuntimeTemplate,
  },
  data() {
    return {
      name: 'abcd',
      template: `<div class="hello">
      <button @click="insertStyle">click22</button>
      <h2>Hello {{ name }}!</h2>
      </div>`,
      global: null,
      tpl: null,
      dataInfo: '데이터 정보',
    };
  },
  async fetch() {
    console.info('[fetch]');
    const serviceBaseURL = this.$config.axios.baseURL;
    const requstUrl = '/adminInfo';
    const response = await this.$axios.$get(serviceBaseURL + requstUrl);
    console.info('[response]', response);
    this.global = response.global;
    this.tpl = response.tpl;
    // const data = {
    //   start: this.start,
    //   limit: this.limit,
    // };
    // const boardList = await getBoardList(this, data);

    // this.boardData = boardList;
  },
  methods: {
    insertStyle() {
      console.info('[insertStyle]', this.$refs.tgRef);
      //   $(this.$refs.tgRef).append('<style>.hello > h2{color:red;}</style>');
    },
    fun0() {
      console.info('[fun0]');
    },
    fun1() {
      console.info('[fun1]');
    },
    fun2() {
      console.info('[fun2]');
    },
  },
};
</script>

<style lang="scss" scoped></style>
