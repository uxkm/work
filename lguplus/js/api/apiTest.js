export const GET_BOARD_LIST = async ($ctx, data) => {
  // console.info('[GET_AXIOS_TEST > $ctx]', $ctx);
  const serviceBaseURL = $ctx.$config.axios.baseURL;
  const requstUrl = `/board?_start=${data.start}&_limit=${data.limit}&_sort=id&_order=desc`;
  const response = await $ctx.$axios.$get(serviceBaseURL + requstUrl);
  return response;
};

export const GET_BOARD_LIST_DETAIL = async ($ctx, id) => {
  // console.info('[GET_AXIOS_TEST > $ctx]', $ctx);
  const serviceBaseURL = $ctx.$config.axios.baseURL;
  const requstUrl = `/board/${id}`;
  const response = await $ctx.$axios.$get(serviceBaseURL + requstUrl);
  return response;
};

export const GET_TOTAL_CNT = async ($ctx) => {
  // console.info('[GET_AXIOS_TEST > $ctx]', $ctx);
  const serviceBaseURL = $ctx.$config.axios.baseURL;
  const requstUrl = `/cnt`;
  const response = await $ctx.$axios.$get(serviceBaseURL + requstUrl);
  return response;
};

export const POST_BOARD_CONTENT = async ($ctx, data) => {
  const serviceBaseURL = $ctx.$config.axios.baseURL;
  const requstUrl = `/board`;
  const response = await $ctx.$axios.$post(serviceBaseURL + requstUrl, data);
  return response;
};

export const POST_TOTAL_CNT = async ($ctx, data) => {
  const conifg = {
    totalCnt: data,
  };
  const serviceBaseURL = $ctx.$config.axios.baseURL;
  const requstUrl = `/cnt`;
  const response = await $ctx.$axios.$post(serviceBaseURL + requstUrl, conifg);
  return response;
};

export const DELETE_BOARD_LIST = async ($ctx) => {};

export const UPDATE_BOARD_LIST = async ($ctx) => {};

// http://localhost:9070/uhdc/xtra/boards/v1/?pageNo=1&rowSize=5
export const WAS_GET_BOARD_LIST = async ($ctx) => {
  const serviceBaseURL = $ctx.$config.axios.xtra;
  const requstUrl = `/uhdc/xtra/boards/v1/?pageNo=1&rowSize=5`;
  const response = await $ctx.$axios.get(serviceBaseURL + requstUrl);
  return response;
};
