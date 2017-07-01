<template>
  <div id="page">
    <!--<pre-loader :defines="this.variables"></pre-loader>-->
    <header-theme></header-theme>
      <transition name="slide-fade" mode="out-in">
        <router-view :defines="this.variables"></router-view>
      </transition>
    <footer-theme :defines="this.variables"></footer-theme>
  </div>
</template>
<script>
  import $ from 'jquery';
  import { DATA_PAGE } from './js/data';
  import Vue from 'vue';
  import PreLoader from './components/preloader.vue';
  import HeaderTheme from './components/header-theme.vue';
  import FooterTheme from './components/footer-theme.vue';

  export default {
    components: {
      PreLoader,
      HeaderTheme,
      FooterTheme,
    },
    data(){
      return {
        variables: DATA_PAGE ? DATA_PAGE : {},
      }
    },
    mounted(){
      this.setRoutesForWidget();
      this.setViewport();
    },
    methods: {
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
      setViewport(){
        document.write(`<style>.content { min-height: ${window.innerHeight}px }</style>`);
        //Nie jestem z tego dumny ;(
      }

    }
  }
</script>
