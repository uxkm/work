<template>
  <div>
    <h1>axios - b</h1>
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
  </div>
</template>

<script>
export default {
  name: 'AxiosB',
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
  },
};
</script>

<style lang="scss" scoped></style>
