const state = {
  message: "",
  exchanges: []
};

const getters = {
  allExchanges: state => state.exchanges,
  message: state => state.message
};

const actions = {
  addExchange({ commit }, message) {
    console.log("add exchange");
    commit("putExchange", message);
    commit("setMessage", "");
  },
  updateMessage({ commit, state }, message) {
    if (state.message !== message) {
      commit("setMessage", message);
    }
  }
};

const mutations = {
  putExchange: (state, exchange) => state.exchanges.unshift(exchange),
  setMessage: (state, message) => (state.message = message)
};

export default {
  state,
  actions,
  getters,
  mutations
};
