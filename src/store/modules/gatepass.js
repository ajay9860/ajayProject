const state = {
  gatepassAttemptCount: 0
};

const getters = {
  gatepassAttemptCount: state => state.gatepassAttemptCount
};

const actions = {
  async incrementGatepassAttemptCount ({ commit }) {
    commit('increment');
  },
  async resetGatepassAttemptCount ({ commit }) {
    commit('reset');
  }
};

const mutations = {
  increment: (state) => (state.gatepassAttemptCount++),
  reset: (state) => (state.gatepassAttemptCount = 0)
};

export default {
  state,
  getters,
  actions,
  mutations
};
