import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue'

import VueNativeSock from 'vue-native-websocket';

import store from './store';
Vue.use(VueNativeSock, 'ws://localhost:1337', { store: store });

import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
