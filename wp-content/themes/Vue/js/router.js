import { DATA_PAGE } from './data';
import store from './store';
import VueRouter from 'vue-router';
import { getRouteComponentID, boundedChunksWithMutations } from './helper.js'

const assignRoutesToComponents = (dataRoutes) => {
  let mappedRoutes = [];
  dataRoutes.forEach((route, index) => {
    mappedRoutes.push({
      name: route.name,
      path: route.path,
      component:
          require(`../components/views/${route.component}/${route.component}.vue`),
      meta: {
        site_title: route.site_title,
        title: route.meta_title,
        desc: route.meta_desc
      }
    });

    if (index + 1 === dataRoutes.length) {
      mappedRoutes.push({
        path: '*',
        component: require('../components/views/Home/Home.vue'),
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
  routes: routesCreator(),

});

// router.beforeEach((to, from, next) => {
  // let ID = getRouteComponentID(to.name).ID;
  // store.dispatch('fetchDataPage', {ID, chunks: boundedChunksWithMutations(ID) })
  // next();
// })

export default router;