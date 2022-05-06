<template>
  <div>
    <h1>페이지 샘플</h1>
  </div>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex';
// const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('sampleStore');

export default {
  name: 'TempPage',
  components: {},
  mixins: [],
  layout: 'default',
  middleware: [],
  asyncData() {
    console.info('[page-asyncData]');
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
  // --------------------------------------------------------------------------[lifecycle]
  mounted() {
    console.info('[page-mounted]');
  },
  beforeDestroy() {
    console.info('[page-beforeDestroy]');
  },
  methods: {
    // ------------------------------------------------------------------------[init]
    // ------------------------------------------------------------------------[business]
    // ------------------------------------------------------------------------[util]
    // ------------------------------------------------------------------------[event]
    // ...mapMutations([]),
    // ...mapActions([]),
  },
};
</script>

<style lang="scss" scoped></style>
