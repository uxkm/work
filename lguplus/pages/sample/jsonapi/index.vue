<template>
  <div>
    <h1>jsonapi</h1>
  </div>
</template>

<script>
export default {
  name: 'JsonapiIndex',
  components: {},
  data: () => ({
    isShowModal: false,
    articles: null,
  }),
  // --------------------------------------------------------------------------[lifecycle]
  mounted() {
    console.info('[mounted]', this.$jsonApi);
    this.$axios.$get('http://icanhazip.com');

    // this.articles = await this.$jsonApi.get('/article').then((articles) => {
    //     return articles.data;
    // });
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<style lang="scss" scoped></style>
