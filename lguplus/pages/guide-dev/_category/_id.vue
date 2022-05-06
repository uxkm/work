<template>
  <div class="p-markdown">
    <div>
      <div v-html="$md.render(model)"></div>
    </div>
  </div>
</template>

<script>
import markdownit from 'markdown-it';
const hljs = require('highlight.js'); // https://highlightjs.org/

// hljs.highlightAll();

export default {
  name: 'MarkdownGuide',
  layout: 'l-guide-dev',
  async asyncData({ app, params, $config }) {
    console.info('[params]', params, $config);

    const md = await app.$axios.$get(`${$config.baseURL}/guide-dev/md/${params.category}/${params.id}.md`);
    const model = markdownit({
      html: true,
      preset: 'default',
      linkify: true,
      breaks: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return `<pre class="hljs language-${lang}"><code>` + hljs.highlight(lang, str, true).value + '</code></pre>';
          } catch (__) {}
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
      },
    }).render(md);
    return {
      id: params.id,
      md,
      model,
    };
  },
  data() {
    return {};
  },
  fetch({ params }) {
    console.log('[fetch]', params.id);
  },
  computed: {},
  watch: {},
  mounted() {
    console.info('[mounted]');
  },
  beforeDestroy() {},
  methods: {},
};
</script>

<style lang="scss"></style>
