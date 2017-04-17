import '../css/main.scss';
// import 'materialize-css/js/buttons.js'
import 'node-waves/dist/waves.js'
import Vue from 'vue';
import router from '../router';
import VueResource from 'vue-resource';
import VueHead from 'vue-head';
import App from '../App.vue';

Vue.use(VueResource);
Vue.use(VueHead);
// Vue.http.options.root = 'http://bpevents.dev';
Vue.config.devtools = true;
Vue.http.options.emulateJSON = true;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

