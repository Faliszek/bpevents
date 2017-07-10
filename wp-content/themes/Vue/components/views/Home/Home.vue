<!--suppress ALL -->
<template>
  <section id="home" class="content page__content" v-cloak>
    <div id="home-slider">
      <slider
        v-if="slides"
        :slides="slides">
      </slider>
      <div class="arrow-wrap">
        <i class="fa fa-angle-down"></i>
      </div>
      <transition name="fade">
        <loader v-if="!sliderLoaded"></loader>
      </transition>
    </div>

    <div class="container">
      <div class="row">
        <home-offers></home-offers>
        <home-content
          v-for="(block, index) in content" :block="block"
          :class="index%2 == 1 ? 'left-side' : 'right-side'" key="index">
        </home-content>
      </div>
    </div>


  </section>

</template>
<script type="text/babel">
  import $ from 'jquery';
  import {mapGetters} from 'vuex';
  import slick from 'slick-carousel';
  import Slider from './HomeSlider.vue';
  import loader from '../loader.vue';
  import HomeOffers from './HomeOffers.vue';
  import HomeContent from './HomeContent.vue';

  export default{
    name: 'Home',
    props: ['defines'],
    components: {Slider, HomeOffers, HomeContent, loader},
    head: {
      // To use "this" in the component, it is necessary to return the object through a function
      title: function () {
        return {
          inner: this.$route.meta.site_title,
          separator: ' ',
        }
      },
      meta: function () {
        return [
          {name: 'description', content: this.$route.meta.desc},
          {name: 'title', content: this.$route.meta.title}
        ]
      }
    },
    computed: {
      ...mapGetters({
        slides: 'getHomeSlides',
        offers: 'getHomeOffers',
        content: 'getHomeContent',
      })
    },
    data(){
      return {
        sliderLoaded: false,
      }
    },
    created(){
      this.$store.dispatch(
          'fetchDataPage',
          {
            ID: this.defines.homePage,
            chunks: [
              {method: 'setHomeSlides', chunkType: 'home_slides'},
              {method: 'setHomeOffers', chunkType: 'offers'},
              {method: 'setHomeContent', chunkType: 'content_block'},
            ]
          })
      document.addEventListener('dataArrived', () => {
        setTimeout(() => {
          this.sliderLoaded = true
        }, 500);
      })
    },
    mounted() {
      this.attachArrowEvent();
    },
    updated(){
      this.setImgPreview();
    },
    methods: {
      attachArrowEvent(){
        this.$el
            .querySelector('.fa-angle-down')
            .addEventListener('click', () => {
              $('html, body').animate({
                scrollTop: $('.offer-block').offset().top
              });
            });
      },
      setImgPreview(){
        setTimeout(function () {
          $('.image-light-box')
              .imageLightbox({
                overlay: true,
                button: true,
                caption: true
              });
        }, 0);

      }
    }
  }
</script>
