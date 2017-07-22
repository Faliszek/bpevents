import '../css/main.scss';
import 'node-waves/dist/waves.js'
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueHead from 'vue-head';
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueImg from 'v-img';
import store from './store';
import router from './router'
import { sync } from 'vuex-router-sync';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueHead);
Vue.use(VueAwesomeSwiper);
Vue.use(VueImg);

Vue.directive('render', {
  bind(el) {
    let checkImg = setInterval(() => {
      if (el.complete) {
        el.parentNode.classList.remove('unvisible');
        el.classList.add('opacity-show');
        if (el.classList.contains('opacity-show')) {
          clearInterval(checkImg)
        }
      }
    }, 300)
  }
});



Vue.config.devtools = true;
Vue.http.options.emulateJSON = true;

sync(store, router);
import App from '../App.vue';
const Root = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});


