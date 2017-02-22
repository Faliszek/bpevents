<template>
  <div id="content">
    <header-theme></header-theme>
    <router-view :defines="this.variables"></router-view>
    <footer-theme :defines="this.variables"></footer-theme>
  </div>
</template>
<script>
  import HeaderTheme from './components/header-theme.vue';
  import FooterTheme from './components/footer-theme.vue';
  export default{
    components: {
      HeaderTheme,
      FooterTheme
    },
    data(){
      return {
        msg: 'hello vue',
        variables: '',
      }
    },

    created(){
      this.getDefines();
    },
    methods: {
      getDefines() {
          this.$http.get('wp-json/defines/v2/info/').then(response => {
            this.variables = JSON.parse(response.body);
          }, response => {
            console.log('Data cannot be loaded', +response);
          });
      }
    }
  }
</script>
