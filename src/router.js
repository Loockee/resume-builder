import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Cockpit360 from './views/Cockpit360.vue';
import DataInjecter from './components/DataInjecter';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cockpit360',
      name: 'cockpit360',
      component: Cockpit360
    },
    {
      path: '/injecter',
      name: 'injecter',
      component: DataInjecter
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
