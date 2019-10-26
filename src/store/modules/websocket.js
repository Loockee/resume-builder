import Vue from 'vue';

const state = {
  messages: [],
  socket: {
    isConnected: false,
    message: '',
    reconnectError: false,
  }
};

const getters = {
  allMessage: (state) => (state.messages)
};

const actions = {
  sendMessage({commit, state}, message) {
    console.log(`number of message is ${state.messages.length}`);
    console.log('sending message: ', message);
    Vue.prototype.$socket.send(message);
    commit('addMessage', message);
  }
};

const mutations = {
  SOCKET_ONOPEN (state, event)  {
    Vue.prototype.$socket = event.currentTarget;
    state.socket.isConnected = true
  },
  SOCKET_ONCLOSE (state, event)  {
    console.log('close event', event);
    state.socket.isConnected = false;
  },
  SOCKET_ONERROR (state, event)  {
    console.error(state, event)
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE (state, message)  {
    state.socket.message = message;
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.info(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  },
  addMessage: (state, message) => (state.messages.push(message))
};

export default {
  state,
  getters,
  actions,
  mutations
}
