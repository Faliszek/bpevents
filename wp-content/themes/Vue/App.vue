<template>
  <div id="page">
    <header-theme></header-theme>
    <router-view :defines="this.variables"></router-view>
    <footer-theme :defines="this.variables"></footer-theme>
  </div>
</template>
<script>
  import Vue from 'vue';
  import router from './router';
  import HeaderTheme from './components/header-theme.vue';
  import FooterTheme from './components/footer-theme.vue';


  export default{
    components: {
      HeaderTheme,
      FooterTheme,

    },
    data(){
      return {
        msg: 'hello vue',
        variables: '',
      }
    },

    created(){
      this.data = this.getDefines();

    },
    methods: {
      getDefines() {
        this.$http.get('wp-json/defines/v2/info/').then(response => {
          this.variables = JSON.parse(response.body);
          const routes = this.setRoutes(this.variables.routes);
          router.addRoutes(routes);
        }, response => {
          console.log('Data cannot be loaded', +response);
        });
      },
      setRoutes(data){
        let array = [];
        data.forEach((route, index) => {
          console.log(route.path)
          array.push({
            name: route.name,
            path: route.path,
            component: require('./views/' + route.component + '.vue'),
          });

          if (index + 1 === data.length) {
            array.push({
              path: '*',
              component: require('./views/Home.vue'),
              redirect: '/'
            });
          }
        });
        return array;
      }
    }
  }
</script>
