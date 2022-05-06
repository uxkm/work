import queryString from 'query-string';

/**
 * 서비스 코드 : xtra
 */
const SERVICE_CODE = 'xtra';

/**
 * 게시판 리스트
 * @param {*} $ctx
 * @param {*} dataInfo
 */
export const GET_BOARD_LIST = async ($ctx, dataInfo = null) => {
  const protocol = $ctx.$config.axios.protocol;
  const baseURL = $ctx.$config.axios[SERVICE_CODE];
  /**
   * url
   * 유의할점 : url 시작점 '/' 마지막에도 '/' 꼭 넣어 줘야한다.
   */
  let url = `/boards/v1/`;
  if (dataInfo) {
    const stringified = queryString.stringify(dataInfo);
    url += `?${stringified}`;
  }
  const response = await $ctx.$axios.get(`${protocol}//${baseURL}${url}`);
  return response;
};

/**
 * 게시판 상세
 * @param {*} $ctx
 * @param {*} boardNo
 */
export const GET_BOARD_DETAIL = async ($ctx, boardNo = null) => {
  const protocol = $ctx.$config.axios.protocol;
  const baseURL = $ctx.$config.axios[SERVICE_CODE];

  let url = `/boards/v1/${boardNo}/`;

  const response = await $ctx.$axios.get(`${protocol}//${baseURL}${url}`);
  return response;
};

/**
 * 게시판 작성
 * @param {*} $ctx
 * @param {*} dataInfo
 */
export const POST_BOARD_WRITE = async ($ctx, dataInfo = null) => {
  const protocol = $ctx.$config.axios.protocol;
  const baseURL = $ctx.$config.axios[SERVICE_CODE];

  let url = `/boards/v1/`;

  const response = await $ctx.$axios.post(`${protocol}//${baseURL}${url}`, dataInfo);
  return response;
};
