<template>
    <div id="slider" class="unvisible">
        <div class="home-slide" v-for="slide in slides">
            <div class="slide-content">
                <h1>{{ slide.slide_title }}</h1>
                <p v-html="slide.slide_text"></p>
                <router-link :to="{ name: slide.slide_link }">{{ slide.slide_btn_text }}</router-link>
            </div>
            <img class="img-responsive" :src="slide.slide_img.url" />

        </div>
    </div>

</template>
<style>

</style>
<script type="text/babel">
    import $ from 'jquery';
    import slick from 'slick-carousel';

    export default{
      name: 'slider',
      props: ['slides', 'options', 'url'],
      data(){
        return{
          msg:'slider',
        }
      },
      mounted(){

      },

      methods: {
        getSlides(){
          let el = this.$el;
          setTimeout(()=>{
            $(el).not('.slick-initialized').slick();
          }, 0);

          $(el).on('init', function(){
            $(el).removeClass('unvisible');
          });
        }
      },
      watch : {
        slides: function(){
          this.getSlides();
        }
      }

    }
</script>
