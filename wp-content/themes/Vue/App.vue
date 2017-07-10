<template>
  <div id="page">
    <header-theme :defines="this.variables"></header-theme>
    <transition name="slide-fade" mode="out-in">
      <keep-alive>
        <router-view :defines="this.variables"></router-view>
      </keep-alive>
    </transition>
    <footer-theme :defines="this.variables"></footer-theme>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { DATA_PAGE } from './js/data';
  import HeaderTheme from './components/header-theme.vue';
  import FooterTheme from './components/footer-theme.vue';
  import Container from './components/views/container.vue';
  export default {
    name: 'App',
    components: {
      HeaderTheme,
      Container,
      FooterTheme,
    },
    data(){
      return {
        variables: DATA_PAGE,
      }
    },
  }
</script>
