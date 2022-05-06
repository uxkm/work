<template>
  <div>
    <h1>axios - a</h1>
    <div>
      <p>
        <NuxtLink to="/sample/axios/a">a</NuxtLink>
      </p>
      <p>
        <NuxtLink to="/sample/axios/b">b</NuxtLink>
      </p>
      <p>
        <NuxtLink to="/sample/axios/c">c</NuxtLink>
      </p>
    </div>
    <div>
      <button @click="onApiTest">클릭</button>
    </div>
  </div>
</template>

<script>
import * as apiXtra from '~/js/api/xtra';

export default {
  name: 'AxiosA',
  layout: 'l-axios',
  //   middleware: ['seoInfo'],
  asyncData() {
    console.info('[asyncData]');
  },
  data() {
    return {};
  },
  fetch() {
    console.info('[fetch]');
  },
  computed: {
    // ...mapState([]),
    // ...mapGetters([]),
  },
  watch: {},
  mounted() {
    console.info('[mounted]');
  },
  beforeDestroy() {},
  methods: {
    // ...mapMutations([]),
    // ...mapActions([]),
    async onApiTest() {
      console.info('[onApiTest]');
      console.dir(this.$axios);
      const res1 = await apiXtra.GET_BOARD_LIST(this, { pageNo: 1, rowSize: 5 });
      console.info('[res1]', res1);

      const res2 = await apiXtra.GET_BOARD_DETAIL(this, 1);
      console.info('[res2]', res2);

      // const res3 = await apiXtra.POST_BOARD_WRITE(this, {
      //   content: '컨텐츠 내용',
      //   modDate: '2021-03-31',
      //   name: '이름123',
      //   regDate: 100,
      //   title: '타이틀123',
      // });
      // console.info('[res3]', res3);

      // const res1 = await this.$axios.$get(`http://localhost:9070/uhdc/xtra/boards/v1/?pageNo=1&rowSize=5`);
      // console.info('[res1]', res1);

      // const res2 = await this.$axios.get(`http://localhost:9070/uhdc/xtra/boards/v1/?pageNo=1&rowSize=5`);
      // console.info('[res2]', res2);
      // const serverPaging = JSON.parse(res2.headers['server-paging']);
      // console.info('[serverPaging]', serverPaging);
    },
  },
};
</script>

<style lang="scss" scoped></style>
