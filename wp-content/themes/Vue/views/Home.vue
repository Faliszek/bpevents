<!--suppress ALL -->
<template>
  <div class="content">
    <swiper :options="swiperOption" ref="mySwiperA">
      <swiper-slide class="home-slide" v-for="slide in slides">
        <div class="slide-content">
          <h2>{{ slide.slide_title }}</h2>
          <p v-html="slide.slide_text"></p>
          <a href="#">{{ slide.slide_btn_text }}</a>
        </div>
        <img class="img-responsive" :src="slide.slide_img.url" />

      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>



  </div>
</template>
<script type="text/babel">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default{
    name: 'Home',
    props: ['defines'],
    components: { swiper, swiperSlide },
    data(){
      return {
        slides: this.slides ? this.getSlider() : '',
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 300,
          effect: 'fade'
        }
      }
    },
    mounted() {
      if(this.defines){
        this.getSlider();
      }
    },
    methods: {
      getSlider(){
        this.$http.get('/wp-json/acf/v2/post/' + this.defines.homePage + '/home_slides')
            .then(response => {
              this.slides =  response.body.home_slides;
              console.log(this)
//              this.$emit('mounted');

            }, response => {
              console.log('Sidebar could not be loaded', +response)
            });
      }
    },

    watch: {
      defines: function(){
        this.getSlider();
      }
    }
  }
</script>
