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
  import { DATA_PAGE } from './js/data';
  import HeaderTheme from './components/header-theme.vue';
  import FooterTheme from './components/footer-theme.vue';

  export default {
    name: 'App',
    components: {
      HeaderTheme,
      FooterTheme,
    },
    data(){
      return {
        variables: DATA_PAGE,
      }
    },
  }
</script>
