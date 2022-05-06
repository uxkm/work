const hljs = require('highlight.js'); // https://highlightjs.org/

export const markdownitConfig = {
  preset: 'default',
  html: true,
  linkify: true,
  breaks: true,
  runtime: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs language-${lang}"><code>` + hljs.highlight(lang, str, true).value + '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  },
};
