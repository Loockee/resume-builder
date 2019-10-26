import axios from 'axios';

const state = {
  templates: [],
  serializationTypes: [],
  eventTypes: [],
  keys:[],
  requestHistory: []
};

const getters = {
  allTemplates: (state) => (state.templates),
  getTemplateById: (state) => (templateId) => (state.templates.filter(i => i.id === templateId)[0]),
  allSerializationTypes: (state) => (state.serializationTypes),
  serializationTypeById: (state) => (id) => (state.serializationTypes.filter(s => s.id === id)[0]),
  allEventTypes: (state) => (state.eventTypes),
  eventTypeById: (state) => (id) => (state.eventTypes.filter(e => e.id === id)[0]),
  allAvailableKeys: (state) => (state.keys),
  allRequests: (state) => (state.requestHistory)
};

const actions = {
  async fetchTemplates ({commit}) {
    const response = await axios.get('http://localhost:4301/api/v1/templates');
    const { content } = response.data;
    commit('setTemplates', content);
    const types = [];
    content.forEach(({id, name, description}) => {
      types.push({id, name, description});
    });
    commit('setEventTypes', types);
  },
  async fetchSerializationTypes({commit}) {
    const response = await axios.get('http://localhost:4301/api/v1/serialization-types');
    const { content } = response.data;
    commit('setSerializationTypes', content);
  },
  async fetchEventTypes({commit}) {
    // for use with
    const response = await axios.get('http://localhost:4301/api/v1/event-types');
    const { content } = response.data;
    commit('setEventTypes', content);
  },
  async fetchKeys({commit}) {
    const response = await axios.get('http://localhost:4301/api/v1/keys');
    const { content } = response.data;
    commit('setKeys', content);
  },
  async sendData({commit}, data) {
    const response = await axios.post('http://localhost:4301/api/v1/messages', data);
    const { content } = response.data;
    commit('addRequest', {request: data, response: content});
  }
};

const mutations = {
  setTemplates: (state, templates) => (state.templates = templates),
  setSerializationTypes: (state, types) => (state.serializationTypes = types),
  setEventTypes: (state, types) => (state.eventTypes = types),
  setKeys: (state, keys) => (state.keys = keys),
  addRequest: (state, request) => (state.requestHistory.unshift(request))
};

export default {
  state,
  getters,
  actions,
  mutations,
}
