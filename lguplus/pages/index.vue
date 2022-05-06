<template>
  <div>
    <h1>index</h1>
  </div>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex';
// const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('sampleStore');
export default {
  name: 'RootIndex',
  components: {},
  mixins: [],
  layout: 'default',
  middleware: [],
  asyncData() {
    console.info('[asyncData]');
  },
  data() {
    return {};
  },
  fetch() {
    console.info('[page-fetch]');
  },
  computed: {
    // ...mapState([]),
    // ...mapGetters([]),
  },
  watch: {},
  mounted() {
    console.info('[page-mounted]');
  },
  beforeDestroy() {
    console.info('[page-beforeDestroy]');
  },
  methods: {
    // ...mapMutations([]),
    // ...mapActions([]),
  },
};
</script>

<style lang="scss" scoped></style>
