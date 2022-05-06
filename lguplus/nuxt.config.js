import path from 'path';
import dotenv from 'dotenv';

import { bootstrapVueConfig } from './js/config/bootstrap-vue-config';
import { proxyConfig } from './js/config/proxy-config';
import { momentConfig } from './js/config/moment-config';
import { gtmConfig } from './js/config/gtm-config';
import { markdownitConfig } from './js/config/markdownit-config';
import { axiosConfig } from './js/config/axios-config';

const webpack = require('webpack');

const env = process.env.NODE_ENV;
const envFile = `.env.${env}`;

/**
 * process.env.NODE_ENV 분기처리
 */
if (env === 'production') {
  dotenv.config({ path: path.join(__dirname, envFile) });
} else if (env === 'develop') {
  dotenv.config({ path: path.join(__dirname, envFile) });
} else if (env === 'staging') {
  dotenv.config({ path: path.join(__dirname, envFile) });
} else if (env === 'local') {
  dotenv.config({ path: path.join(__dirname, envFile) });
  /**
   * proxy 10개 넘개 설정할 경우 에러 방지 코드
   */
  require('events').EventEmitter.defaultMaxListeners = 20;
} else {
  dotenv.config({ path: path.join(__dirname, envFile) });
}

export default {
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false,
  },
  loading: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LG U+',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'LG유플러스 공식 온라인몰 유플러스샵에서 휴대폰, 인터넷, 스마트홈, 결합상품, 액세서리를 편리하고 저렴하게 신청하고 푸짐한 혜택까지 담아보세요.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/style/css/font.min.css' },
      { rel: 'stylesheet', href: '/style/css/bv.min.css' },
      { rel: 'stylesheet', href: '/style/css/style.min.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/node_modules/highlight.js/styles/darcula.css', lang: 'css' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/gtm' },
    { src: '~/plugins/slick-carousel.js', mode: 'client' },
    { src: '~/plugins/vue2-datepicker.js', mode: 'client' },
    { src: '~/plugins/vue-slider.js', mode: 'client' },
    { src: '~/plugins/vue-jstree.js', mode: 'client' },
    { src: '~/plugins/vee-validate.js', mode: 'client' },
    { src: '~/plugins/vue2-filters.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components/guide', '~/components/global-share'],

  /**
   * [공개 환경변수]
   * 서버 & 클라이언트
   * 비공개정보 사용 금지
   * $config 통해 접근
   */
  publicRuntimeConfig: {
    envtype: process.env.ENV_TYPE,
    baseURL: process.env.BASE_URL,
    axios: {
      baseURL: process.env.AXIOS_BASE_URL,

      protocol: process.env.AXIOS_PROTOCOL,

      fcmm: process.env.AXIOS_FCMM,
      sycm: process.env.AXIOS_SYCM,
      acce: process.env.AXIOS_ACCE,
      cusp: process.env.AXIOS_CUSP,
      entp: process.env.AXIOS_ENTP,

      evet: process.env.AXIOS_EVET,
      hiec: process.env.AXIOS_HIEC,
      mbec: process.env.AXIOS_MBEC,
      mbrm: process.env.AXIOS_MBRM,
      myin: process.env.AXIOS_MYIN,

      prdv: process.env.AXIOS_PRDV,
      shec: process.env.AXIOS_SHEC,
      shpr: process.env.AXIOS_SHPR,
      xtra: process.env.AXIOS_XTRA,
      ytra: process.env.AXIOS_YTRA,

      ztra: process.env.AXIOS_ZTRA,
    },
    asset: {
      imgURL: process.env.IMG_URL,
    },
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID,
    },
  },

  /**
   * [비공개 환경변수]
   * 서버
   * 비공개정보 사용
   * $config 통해 접근
   */
  privateRuntimeConfig: {},

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/device',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/redirect-module',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    '@nuxtjs/markdownit',
    '@nuxtjs/proxy',
    'nuxt-user-agent',
    'nuxt-healthcheck',
  ],

  moment: momentConfig,

  /**
   * 로컬일때 프록시 셋팅
   */
  proxy: proxyConfig(),

  /**
   * 'markdown-it-highlightjs'
   */
  markdownit: markdownitConfig,

  // gtm
  gtm: gtmConfig,

  /**
   * bootstrapVue 초기화 셋팅
   * 트리쉐이킹(tree shaking)을 고려하여 사용할 항목만 설정한다.
   */
  bootstrapVue: bootstrapVueConfig,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: axiosConfig,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: false,
    transpile: ['vee-validate/dist/rules'],
    extend(config, { isDev, isClient }) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common';
    },
    /**
     * plugins
     * 모든 모듈에서 자동으로 가져오기
     */
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        _: 'lodash',
      }),
    ],
    // end plugins
    /**
     * babel
     */
    babel: {
      compact: true,
      /**
       * [presets]
       * envName: server, client, modern
       * @param envName
       * @returns {(string|{corejs: {version: number}, targets: *})[][]}
       */
      presets({ envName }) {
        const envTargets = {
          client: { browsers: ['last 2 versions'], ie: 11 },
          server: { node: 'current' },
        };
        return [
          [
            '@nuxt/babel-preset-app',
            {
              targets: envTargets[envName],
              corejs: { version: 3 },
              modules: false, // false : 트리쉐이킹 사용
            },
          ],
        ];
      },
      /**
       * [plugins]
       * { isDev, isServer, isClient, isModern, isLegacy }
       */
      plugins({ isDev }) {
        if (!isDev) {
          return [['transform-remove-console', { exclude: ['error', 'warn'] }]];
        }
      },
    },
    // end babel
  },
};
