import { DATA_PAGE } from './data';
import VueRouter from 'vue-router';

const assignRoutesToComponents = (dataRoutes) => {
  let mappedRoutes = [];
  dataRoutes.forEach((route, index) => {
    mappedRoutes.push({
      name: route.name,
      path: route.path,
      component: require('../views/'+route.component+'.vue'),
      meta: {
        site_title: route.site_title,
        title: route.meta_title,
        desc: route.meta_desc
      }
    });

    if (index + 1 === dataRoutes.length) {
      mappedRoutes.push({
        path: '*',
        component: require('../views/Home.vue'),
        redirect: '/'
      });
    }
  });
  return mappedRoutes;
};

const routesCreator = () => {
  return assignRoutesToComponents(DATA_PAGE.routes)
};

const router = new VueRouter({
  mode: 'history',
  root: '/',
  routes: routesCreator()
});

export default router;