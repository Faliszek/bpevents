import '../css/main.scss';
import 'node-waves/dist/waves.js'
import { DATA_PAGE } from './data';
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueHead from 'vue-head';
import VueRouter from 'vue-router'
import VueRouterCreator from './router.js';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueHead);

Vue.config.devtools = true;
Vue.http.options.emulateJSON = true;


import App from '../App.vue';
new Vue({
  el: '#app',
  VueRouterCreator,
  template: '<App/>',
  components: { App }
});

// export default router;