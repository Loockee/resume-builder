import Vue from 'vue';
import Vuex from 'vuex';

import templates from './modules/templates';
import websocket from "./modules/websocket";
import messaging from "./modules/messaging";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    templates,
    websocket,
    messaging,
  }
});
