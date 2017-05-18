import '../css/main.scss';
import 'node-waves/dist/waves.js'
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueHead from 'vue-head';
import App from '../App.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueHead);
Vue.config.devtools = true;
Vue.http.options.emulateJSON = true;

const router = new VueRouter({
  mode: 'history',
  root: '/',
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

export default router;