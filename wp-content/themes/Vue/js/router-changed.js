import { DATA_PAGE } from './data';
import VueRouter from 'vue-router';

export const VueRouterCreator = () => {
  let data = DATA_PAGE;
  let routes = [];
  const router = new VueRouter({
    mode: 'history',
    root: '/',
  });

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

      if (index + 1 === routes.length) {
        mappedRoutes.push({
          path: '*',
          component: require('../views/Home.vue'),
          redirect: '/'
        });
      }
    });
    return mappedRoutes;
  };
  routes = assignRoutesToComponents(data.routes);
  router.addRoutes(routes);
  router.beforeEach((to, from, next) => {
    $('.content').css('min-height', window.innerHeight+'px');
    next();
  });

  return router;
};


//
//
//     const routes = this.setRoutes(data.routes);
// ;
// //        }, response => {
// //        });
//   setRoutes(data){
//     let array = [];
//     data.forEach((route, index) => {
//       array.push({
//         name: route.name,
//         path: route.path,
//         component: require('./views/' + route.component + '.vue'),
//         meta: {
//           site_title: route.site_title,
//           title: route.meta_title,
//           desc: route.meta_desc
//         }
//       });
//
//       if (index + 1 === data.length) {
//         array.push({
//           path: '*',
//           component: require('./views/Home.vue'),
//           redirect: '/'
//         });
//       }
//     });
//     return array;
//   },