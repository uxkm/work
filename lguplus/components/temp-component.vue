<template>
  <div>
    <h1>컴포넌트 샘플</h1>
  </div>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex';
// const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('sampleStore');
export default {
  name: 'TempComponent',
  components: {},
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
  beforeDestroy() {
    console.info('[beforeDestroy]');
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
