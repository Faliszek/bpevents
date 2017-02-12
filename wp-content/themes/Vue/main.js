import CSS from './css/main.scss';
import Vue from 'vue';
import router from './router';
import VueResource from 'vue-resource';
import App from './App.vue';
Vue.config.devtools = true;

Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
