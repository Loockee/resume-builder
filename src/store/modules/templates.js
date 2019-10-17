import axios from 'axios';

const state = {
  templates: [],
  serializationTypes: [],
  eventTypes: []
};

const getters = {
  allTemplates: (state) => (state.templates),
  getTemplateById: (state) => (templateId) => (state.templates.filter(i => i.id === templateId)[0]),
  allSerializationTypes: (state) => (state.serializationTypes),
  serializationTypeById: (state) => (id) => (state.serializationTypes.filter(s => s.id === id)[0]),
  allEventTypes: (state) => (state.eventTypes),
  eventTypeById: (state) => (id) => (state.eventTypes.filter(e => e.id === id)[0])
};

const actions = {
  async fetchTemplates ({commit}) {
    const response = await axios.get('http://localhost:4301/api/v1/templates');
    const { content } = response.data;
    commit('setTemplates', content);
  },
  async fetchSerializationTypes({commit}) {
    const response = await axios.get('http://localhost:4301/api/v1/serialization-types');
    const { content } = response.data;
    commit('setSerializationTypes', content);
  },
  async fetchEventTypes({commit}) {
    const response = await axios.get('http://localhost:4301/api/v1/event-types');
    const { content } = response.data;
    commit('setEventTypes', content);
  }
};

const mutations = {
  setTemplates: (state, templates) => (state.templates = templates),
  setSerializationTypes: (state, types) => (state.serializationTypes = types),
  setEventTypes: (state, types) => (state.eventTypes = types),
};

export default {
  state,
  getters,
  actions,
  mutations,
}
