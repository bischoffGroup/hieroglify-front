import Vue from 'vue';
import VueRouter from 'vue-router';

import map from './map';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'hash',
  // base : process.env.BASE_URL,
  // root: '/',
  routes: map
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
