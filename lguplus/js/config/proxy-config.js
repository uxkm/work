export const proxyConfig = () => {
  if (process.env.ENV_TYPE === 'local') {
    return {
      '/api-fcmm/': { target: process.env.PROXY_XTRA, pathRewrite: { '^/api-fcmm/': '' } },
      '/api-sycm/': { target: process.env.PROXY_SYCM, pathRewrite: { '^/api-sycm/': '' } },
      '/api-acce/': { target: process.env.PROXY_ACCE, pathRewrite: { '^/api-acce/': '' } },
      '/api-cusp/': { target: process.env.PROXY_CUSP, pathRewrite: { '^/api-cusp/': '' } },
      '/api-entp/': { target: process.env.PROXY_ENTP, pathRewrite: { '^/api-entp/': '' } },

      '/api-evet/': { target: process.env.PROXY_EVET, pathRewrite: { '^/api-evet/': '' } },
      '/api-hiec/': { target: process.env.PROXY_HIEC, pathRewrite: { '^/api-hiec/': '' } },
      '/api-mbec/': { target: process.env.PROXY_MBEC, pathRewrite: { '^/api-mbec/': '' } },
      '/api-mbrm/': { target: process.env.PROXY_MBRM, pathRewrite: { '^/api-mbrm/': '' } },
      '/api-myin/': { target: process.env.PROXY_MYIN, pathRewrite: { '^/api-myin/': '' } },

      '/api-prdv/': { target: process.env.PROXY_PRDV, pathRewrite: { '^/api-prdv/': '' } },
      '/api-shec/': { target: process.env.PROXY_SHEC, pathRewrite: { '^/api-shec/': '' } },
      '/api-shpr/': { target: process.env.PROXY_SHPR, pathRewrite: { '^/api-shpr/': '' } },
      '/api-xtra/': { target: process.env.PROXY_XTRA, pathRewrite: { '^/api-xtra/': '' } },
      '/api-ytra/': { target: process.env.PROXY_YTRA, pathRewrite: { '^/api-ytra/': '' } },

      '/api-ztra/': { target: process.env.PROXY_ZTRA, pathRewrite: { '^/api-ztra/': '' } },
    };
  } else {
    return {};
  }
};
