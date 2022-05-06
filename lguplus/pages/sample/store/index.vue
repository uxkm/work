<template>
  <div>
    <h1>/sample/store</h1>
    <div>
      <div>$store.state.sampleStore.valNum : {{ $store.state.sampleStore.valNum }}</div>
      <div>$store.state.sampleStore.valNum : {{ valNum }}</div>
      <div>
        <button @click="testMutation()">testMutation 증가</button>
      </div>
      <div>
        <button @click="testGetter()">getter</button>
      </div>
      <div>
        <button @click="testAction()">testAction</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('sampleStore');

export default {
  name: 'SampleStore',
  middleware: ['seoInfo'],
  data() {
    return {};
  },
  computed: {
    ...mapState(['valNum']),
    ...mapGetters(['TEST_GETTER']),
  },
  watch: {},
  mounted() {
    console.info('[mounted]');
    const arr = [1, 2, 3, 4, 5, 6, 7];
    _.forEach(arr, (item) => {
      console.info('[item]', item);
    });
    // this.INIT_MUTATION();
  },
  beforeDestroy() {
    console.info('[beforeDestroy]');
  },
  methods: {
    ...mapMutations(['INIT_MUTATION', 'TEST_MUTATION']),
    ...mapActions(['TEST_ACTION']),

    testMutation() {
      console.info('[testMutation]', this.$store);
      // this.$store.commit('sampleStore/TEST_MUTATION');
      this.TEST_MUTATION();
    },
    testAction() {
      console.info('[testAction]');
      // this.$store.dispatch('sampleStore/TEST_ACTION');
      this.TEST_ACTION();
    },
    testGetter() {
      // console.info('[callget]', this.$store.getters['sample/TEST_GETTER']());
      console.info('[callget]', this.TEST_GETTER());
    },
  },
};
</script>

<style lang="scss" scoped></style>
