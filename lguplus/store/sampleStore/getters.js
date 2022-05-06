export default {
  TEST_GETTER: (state) => () => {
    return 'get :' + state.valStr;
  },
};
