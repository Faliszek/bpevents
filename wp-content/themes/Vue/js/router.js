import VueRouter from 'vue-router';

const VueRouterCreator = (data) => {
    // let router = new VueRouter({
    //   mode: 'history',
    //   root: '/',
    // });
    console.log(data);
//     // const routes = [];
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
//   router.addRoutes(routes);
//   router.beforeEach((to, from, next) => {
//     $('.content').css('min-height', window.innerHeight+'px');
//     next();
//   });
//   return router;
};

export default VueRouterCreator;
