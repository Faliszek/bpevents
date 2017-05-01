<template>

  <div id="page">
    <header-theme></header-theme>
    <transition name="slide-fade" mode="out-in">
      <router-view :defines="this.variables"></router-view>
    </transition>
    <footer-theme :defines="this.variables"></footer-theme>
    <div class="loader"></div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import router from './router';
  import HeaderTheme from './components/header-theme.vue';
  import FooterTheme from './components/footer-theme.vue';
  import $ from 'jquery';

  export default{
    components: {
      HeaderTheme,
      FooterTheme,

    },
    data(){
      return {
        variables: '',
      }
    },

    created(){
      this.data = this.getDefines();
      this.className = this.$route.name;
    },
    methods: {
      getDefines() {
        this.$http.get('wp-json/defines/v2/info/').then(response => {
          this.variables = JSON.parse(response.body);
          const routes = this.setRoutes(this.variables.routes);
          router.addRoutes(routes);
          router.beforeEach((to, from, next) => {
            $('.content').css('min-height', window.innerHeight+'px');
            next();
          });
          this.setRoutesForWidget();
        }, response => {
          console.log('Data cannot be loaded', +response);
        });
      },
      setRoutes(data){
        let array = [];
        data.forEach((route, index) => {
          array.push({
            name: route.name,
            path: route.path,
            component: require('./views/' + route.component + '.vue'),
            meta: {
              site_title: route.site_title,
              title: route.meta_title,
              desc: route.meta_desc
            }
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
      },

      setRoutesForWidget() {
        let menuLinks = document.getElementById('menu-footer');
        if(typeof menuLinks != 'undefined' && menuLinks != null) {
          Array.from(menuLinks.children).forEach((el)=>{
            let a = el.getElementsByTagName('a')[0];
            let path = a.getAttribute('href');
            a.href = path.replace(this.variables.siteUrl, '');
            a.addEventListener('click', (e) => {
              e.preventDefault();
              let routeName = e.srcElement.getAttribute('href').replace(/\//g, '');
              this.$router.push({name: routeName});
            })
          })
        }
      },
    }
  }
</script>
