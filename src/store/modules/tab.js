const state = {
  prs: [],
  user: ''
};

const getters = {
  selectedActiveTab: state => state.prs,
  selectedToken: state => state.user
};
const actions = {
  async addActiveTab ({ commit }, prs) {
    commit('setActiveTab', prs);
  },
  async removeActiveTab ({ commit }) {
    commit('resetActiveTab', []);
  },
  async tokenGeneration ({ commit }, user) {
    commit('settokenGeneration', user);
  }
};

const mutations = {
  setActiveTab: (state, prs) => (state.prs = prs),
  resetActiveTab: (state, prs) => (state.prs = prs),
  settokenGeneration: (state, user) => (state.user = user)
};

export default {
  state,
  getters,
  actions,
  mutations
};
