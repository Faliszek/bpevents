<template>
        <div id="slider">
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
    .home-slide{
        height:100%;
    }
</style>
<script type="text/babel">
    import $ from 'jquery';
    import slick from 'slick-carousel';
    import Waves from 'node-waves/dist/waves';

    export default{
      name: 'slider',
      props: ['slides', 'sliderLoaded'],
      data(){
        return{
          windowH: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)+'px',
          loaded: this.sliderLoaded,
        }
      },
      created(){
        this.attachResizeEvent();
      },
      updated(){
        this.$el.style.height = this.windowH;
        this.getSlides();
        console.log('updated slider')
      },

      methods: {
        getSlides(){
            $(this.$el).not('.slick-initialized')
                .on('init', (e)=>{
                  e.currentTarget.classList.remove('unvisible');
                  e.currentTarget.style.height = this.windowH;
                  Waves.init();
                  Waves.attach('.main-button');
                })
                .slick({
                  infinite: true,
                  speed: 500,
                  cssEase: 'ease-out',
                  arrows:true,
                  prevArrow: `<i class="arrow-prev fa fa-angle-left"></i>`,
                  nextArrow: `<i class="arrow-next fa fa-angle-right"></i>`,
                });

        },
        attachResizeEvent() {
          window.onresize = () => {
            $(this.$el).slick('setPosition')
          }
        }
      }
    }
</script>
