<template>
    <div  class="content">
        {{msg}}
    </div>
</template>
<script type="text/babel">

  import FooterTheme from '../components/footer-theme.vue';
    export default{
      name: 'Home',
        components: {
          FooterTheme
        },
        data(){
            return{
                msg:'Home'
            }
        },
    }
</script>
