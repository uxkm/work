export default {
  BOARD_LIST_INFO_MUTATION(state, payload) {
    console.info('[BOARD_LIST_INFO_MUTATION]');
    state.boardListInfo = payload;
  },
  BOARD_WRITE_INFO_MUTATION(state, payload) {
    console.info('[BOARD_WRITE_INFO_MUTATION]');
    state.boardWriteInfo = payload;
  },
  BOARD_DETAIL_INFO_MUTATION(state, payload) {
    console.info('[BOARD_DETAIL_INFO_MUTATION]');
    state.boardDetailInfo = payload;
  },
  BOARD_TOTCNT_INFO_MUTATION(state, payload) {
    console.info('[BOARD_TOTCNT_INFO_MUTATION]');
    state.totCnt = payload;
  },
  BOARD_PRE_INFO_MUTATION(state, payload) {
    console.info('[BOARD_PRE_INFO_MUTATION]');
    state.pre = payload;
  },
  BOARD_NEXT_INFO_MUTATION(state, payload) {
    console.info('[BOARD_NEXT_INFO_MUTATION]');
    state.next = payload;
  },
};
