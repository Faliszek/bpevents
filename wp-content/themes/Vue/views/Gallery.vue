<!--suppress ALL -->
<template>
    <div id="gallery" class="content" style="padding-top:100px;">
        {{defines}}
        <section id="eq-slider">
            <swiper :options="swiperOption" ref="mySwiperB" v-if="slides">
                <swiper-slide class="eq-slide" v-for="slide in slides">
                    <div class="eq-content">
                    </div>
                </swiper-slide>
                <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
        </section>
    </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default{
    name: 'Gallery',
    components: { swiper, swiperSlide },
    props: ['defines'],
    data(){
      return {
        data: this.data ? this.getDataEq() : '',
        msg: 'Equipment',
        slides: '',
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
    methods: {
      getDataEq() {
        this.$http.get('/wp-json/acf/v2/post/' + this.defines.galleryPage)
            .then(response => {
              this.data =  response.body;
            }, response => {
              console.log('Data could not be loaded', +response)
            });
      },
    },

    watch: {
      defines: function() {
        this.getDataEq();
      }
    }
  }
</script>
