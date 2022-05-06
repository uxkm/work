export const gtmConfig = {
  enabled: true,
  debug: true,
  id: undefined,
  layer: 'dataLayer',
  variables: {
    abcd: '1234',
  },

  pageTracking: true,
  pageViewEventName: 'nuxtRoute',

  autoInit: true,
  respectDoNotTrack: true,

  scriptId: 'gtm-script',
  scriptDefer: false,
  scriptURL: 'https://www.googletagmanager.com/gtm.js',
  crossOrigin: false,

  noscript: true,
  noscriptId: 'gtm-noscript',
  noscriptURL: 'https://www.googletagmanager.com/ns.html',
};
