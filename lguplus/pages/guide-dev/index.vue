<template>
  <div class="p-markdown">
    <div>
      <div v-html="getMarkdown(0)"></div>
    </div>
  </div>
</template>

<script>
import markdown_0 from '~/pages/guide-dev/index.md';

export default {
  name: 'GuideDev',
  layout: 'l-guide-dev',
  middleware: [
    ({ redirect }) => {
      redirect('/guide-dev/vue/2-1');
    },
  ],
  asyncData({ app, params }) {
    return {
      mdInfo: [markdown_0],
    };
  },
  data() {
    return {};
  },

  fetch() {},
  computed: {},
  watch: {},
  mounted() {
    console.info('[mounted]');
  },
  beforeDestroy() {},
  methods: {
    getMarkdown(num) {
      return this.mdInfo[num];
    },
  },
};
</script>

<style lang="scss" scoped></style>
