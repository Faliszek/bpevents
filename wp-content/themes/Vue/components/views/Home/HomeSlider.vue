<template>
  <div id="slider" :class="{ 'unvisible' : !sliderLoaded }">
    <div id="progress-bar" class="progress-bar"></div>
    <swiper :options="swiperOption" ref="mySwiper" >
      <swiper-slide v-for="(slide, index) in slides"  key="index" class="home-slide">
        <!--<div class="slide-img img-responsive" :style="{ backgroundImage: 'url(' + slide.slide_img.url + ')' }" ></div>-->
        <img class="slide-img img-responsive" :src="slide.slide_img.url"/>
        <div class="mask"></div>
        <div class="slide-content">
          <h1 class="slide-content__title">{{ slide.slide_title }}</h1>
          <p class="slide-content__text" v-html="slide.slide_text"></p>
          <home-slider-btn key="index" :slide="slide"></home-slider-btn>
        </div>
      </swiper-slide>
    </swiper>
      <i class="arrow-prev fa fa-angle-left"></i>
      <i class="arrow-next fa fa-angle-right"></i>
  </div>
</template>
<script type="text/babel">
  import {mapGetters} from 'vuex';
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import HomeSliderBtn  from './HomeSliderBtn.vue';

  export default{
    name: 'slider',
    props: ['slides','slidesArrived'],
    components: {
      swiper,
      swiperSlide,
      HomeSliderBtn
    },
    data() {
      return {
        swiperOption: {
          mousewheelControl: true,
          observeParents: true,
          nextButton: '.arrow-next',
          prevButton: '.arrow-prev',
          speed: 500,
          loop:false,
          autoplay: 4000,
          direction: 'horizontal',
          watchSlidesProgress: true,
        },
        swiperSlides: [],
        windowH: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + 'px',
        sliderLoaded: false,
      }
    },
    beforeCreate(){
    },

    created(){
      this.setSlider();
    },
    updated(){
      this.$el.style.height = this.windowH;
      this.setSlider();
    },
    mounted(){
    },
    methods: {
      setSlider(){
        this.swiperSlides = this.slides;
          setTimeout(() => {
            this.sliderLoaded = true;
            }, 1000);
      }
    }
  }
</script>
