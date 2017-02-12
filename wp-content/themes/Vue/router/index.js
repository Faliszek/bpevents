import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import References from '../views/References.vue';
import Equipment from '../views/Equipment.vue';
import Contact from '../views/Contact.vue';
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },

    {
      path: '/referencje',
      component: References
    },

    {
      path: '/sprzet',
      component: Equipment
    },

    {
      path: '/kontakt',
      component: Contact
    },

    {
      path: '*',
      component: Home,
      redirect : '/'
    },
  ],
});