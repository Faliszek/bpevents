<template>
    <div id="slider" class="unvisible">
        <div class="home-slide" v-for="slide in slides">
            <div class="slide-img img-responsive" :style="{ backgroundImage: 'url(' + slide.slide_img.url + ')' }" ></div>
            <div class="mask"></div>
            <div class="slide-content">
                <h1 class="slide-content__title">{{ slide.slide_title }}</h1>
                <p class="slide-content__text" v-html="slide.slide_text"></p>
                <router-link :to="{ name: slide.slide_link }" class="slide-content__link main-button">
                    {{ slide.slide_btn_text }}
                </router-link>
            </div>

        </div>
    </div>

</template>
<style>
    .slick-initialized .slick-slide {
        outline:none;
    }
</style>
<script type="text/babel">
    import $ from 'jquery';
    import slick from 'slick-carousel';
    import Waves from 'node-waves/dist/waves';

    export default{
      name: 'slider',
      props: ['slides', 'options', 'url'],
      data(){
        return{
          windowH:'',
        }
      },
      created(){
        this.windowH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)+'px';
      },
      mounted(){
        let el = this.$el;
        $(window).on('resize', ()=>{
          this.windowH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)+'px';
          $(el).css('height', this.windowH)
        })
      },

      methods: {
        getSlides(){
          let el = this.$el;
          setTimeout(()=>{
            $(el).not('.slick-initialized').slick({
              infinite: true,
              speed: 500,
              cssEase: 'ease-out',
              arrows:true,
              prevArrow: `<i class="arrow-prev fa fa-angle-left"></i>`,
              nextArrow: `<i class="arrow-next fa fa-angle-right"></i>`,
            });
          }, 0);

          $(el).on('init', ()=>{
            $(el).removeClass('unvisible');
            $(el).css('height', this.windowH);
            Waves.init();
            Waves.attach('.main-button');
          });
        },
      },
      watch : {
        slides: function(){
          this.getSlides();
        }
      }

    }
</script>
