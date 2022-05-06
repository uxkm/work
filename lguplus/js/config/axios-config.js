export const axiosConfig = {
  proxy: process.env.ENV_TYPE === 'local' ? true : false,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
    delete: {},
    get: {},
    head: {},
    post: {},
    put: {},
    patch: {},
  },
};
