import * as MODEL from './model';
import * as API_TEST from '~/js/api/apiTest';

export default {
  /**
   * ASYNC_DATA_PAGE_INIT
   * {dispatch, commit, getters, state, rootGetters, rootState}
   */
  ASYNC_DATA_PAGE_INIT({ commit }) {
    console.info('ASYNC_DATA_PAGE_INIT');
    /**
     * 스토어 모델 초기화
     */
    commit('BOARD_LIST_INFO_MUTATION', MODEL.BOARD_LIST_INFO_MODEL());
    commit('BOARD_WRITE_INFO_MUTATION', MODEL.BOARD_WRITE_INFO_MODEL());
  },

  /**
   * FETCH_PAGE_INIT
   * {dispatch, commit, getters, state, rootGetters, rootState}
   */
  FETCH_PAGE_INIT() {
    console.info('[FETCH_PAGE_INIT]');
  },

  /**
   * 게시판 리스트 업데이트
   */
  async BOARD_LIST_ACTION({ state, commit }, { start = 0, limit }) {
    const apiInfo = [
      API_TEST.GET_TOTAL_CNT(this),
      API_TEST.GET_BOARD_LIST(this, {
        start,
        limit,
      }),
    ];

    await Promise.all(apiInfo).then(([boardTotCnt, boardList]) => {
      console.info('[Promise.all]');
      const updateInfo = _.cloneDeep(state.boardListInfo);
      updateInfo.list = boardList;
      updateInfo.totRow = boardTotCnt.totalCnt;
      commit('BOARD_LIST_INFO_MUTATION', updateInfo);
    });
  },

  /**
   * 게시판 글 등록
   */
  async BOARD_WRITE_ACTION({ state }, dataInfo) {
    console.info('[BOARD_WRITE_INFO_ACTION]', dataInfo);
    return await API_TEST.POST_BOARD_CONTENT(this, dataInfo);
  },

  /**
   * 전체 카운트 증가
   */
  async CNT_PLUS_ACTION({ state }, dataInfo) {
    console.info('[CNT_PLUS_ACTION]', dataInfo);
    return await API_TEST.POST_TOTAL_CNT(this, dataInfo);
  },

  /**
   * 유효성 체크 모드 변경
   */
  VEE_MODE_CHANGE_ACTION({ state }, { mode = 'passive' }) {
    console.info('[VEE_MODE_CHANGE_ACTION]');
    const updateInfo = _.cloneDeep(state.boardWriteInfo);
    updateInfo.veeMode = mode;
    commit('BOARD_WRITE_INFO_MUTATION', updateInfo);
  },

  /**
   * 상세페이지 저장하기
   */
  async BOARD_DETAIL_ACTION({ state, commit, dispatch }, itemId) {
    console.info('[BOARD_DETAIL_ACTION]');
    const Details = [API_TEST.GET_TOTAL_CNT(this), API_TEST.GET_BOARD_LIST_DETAIL(this, itemId)];
    await Promise.all(Details).then(([boardTotCnt, boardDetailInfo]) => {
      const totCnt = boardTotCnt.totalCnt;
      const detailInfo = boardDetailInfo;
      commit('BOARD_TOTCNT_INFO_MUTATION', totCnt);
      commit('BOARD_DETAIL_INFO_MUTATION', detailInfo);
    });

    /**
     * 이전 다음페이지 저장하기
     */

    const currntId = Number(itemId);
    let preId = null;
    let nextId = null;
    let preItem = null;
    let nextItem = null;

    if (currntId === 1) {
      preId = null;
    } else {
      preId = currntId - 1;
    }

    if (currntId === Number(state.totCnt)) {
      nextId = null;
    } else {
      nextId = currntId + 1;
    }

    console.info('preId:', preId, 'nextId:', nextId);

    if (preId) {
      preItem = await API_TEST.GET_BOARD_LIST_DETAIL(this, preId);
      commit('BOARD_PRE_INFO_MUTATION', preItem);
    } else {
      commit('BOARD_PRE_INFO_MUTATION', null);
    }

    if (nextId) {
      nextItem = await API_TEST.GET_BOARD_LIST_DETAIL(this, nextId);
      commit('BOARD_NEXT_INFO_MUTATION', nextItem);
    } else {
      commit('BOARD_NEXT_INFO_MUTATION', null);
    }
  },
};
