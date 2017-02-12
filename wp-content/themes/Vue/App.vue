<template>
    <div>
        <header-theme></header-theme>
            <router-view></router-view>
        <footer-theme></footer-theme>
    </div>
</template>
<script>
    import HeaderTheme from './components/header-theme.vue';
    import FooterTheme from './components/footer-theme.vue';
    export default{
        components:{
          HeaderTheme,
          FooterTheme
        },
      ready(){
          window.location.href = '/'
      },
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
