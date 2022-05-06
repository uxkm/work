export const state = () => ({
  seoInfo: null,
  id: null,
});

export const mutations = {
  SEO_INFO_MUTATION(state, payload) {
    state.seoInfo = payload;
  },
  ID_MUTATION(state, payload) {
    state.id = payload;
  },
};

export const actions = {
  /**
   * nuxtServerInit
   * @param {state, getters, commit, dispatch, rootGetters, rootState}
   */
  nuxtServerInit({ commit }, { req }) {
    console.info('[nuxtServerInit]');
    // commit('ID_MUTATION', 'butler');
    // if (req.session.user) {
    //   commit('user', req.session.user);
    // }
  },
};
