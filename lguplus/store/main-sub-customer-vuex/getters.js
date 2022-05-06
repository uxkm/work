export default {
  BOARD_LIST_INFO_GETTER: (state) => () => {
    return 'get :' + state;
  },

  BOARD_WRITE_INFO_GETTER: (state) => () => {
    return 'get :' + state;
  },
};
