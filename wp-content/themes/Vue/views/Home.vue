<!--suppress ALL -->
<template>
    <div id="home" class="content">
      <section id="home-slider">
        <!--<swiper :options="swiperOption" ref="mySwiperA" v-if="slides">-->
        <!--<swiper-slide class="home-slide" v-for="slide in slides">-->
        <!--<div class="slide-content">-->
        <!--<h1>{{ slide.slide_title }}</h1>-->
        <!--<p v-html="slide.slide_text"></p>-->
        <!--<router-link :to="{ name: slide.slide_link }">{{ slide.slide_btn_text }}</router-link>-->
        <!--</div>-->
        <!--<img class="img-responsive" :src="slide.slide_img.url" />-->

        <!--</swiper-slide>-->
        <!--<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>-->
        <!--<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next swiper-button-white" slot="button-next"></div>-->
        <!--</swiper>-->
        <div id="slider">
          <div class="home-slide" v-for="slide in slides">
            <div class="slide-content">
              <h1>{{ slide.slide_title }}</h1>
              <p v-html="slide.slide_text"></p>
              <router-link :to="{ name: slide.slide_link }">{{ slide.slide_btn_text }}</router-link>
            </div>
            <img class="img-responsive" :src="slide.slide_img.url" />

          </div>
        </div>
      </section>

      <section class="offer-block" v-if="offers">
        <div class="container">
          <div class="row">
            <div class="col-sm-4" v-for="offer in offers">
              <i :class="setIcon(offer.offer_icon)"></i>
              <h2>{{ offer.offer_title }}</h2>
              <p v-html="offer.offer_content"></p>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block" v-for="(block, index) in content" :class="index%2 == 1 ? 'left' : 'right'">
        <article >
          <h1>{{ block.title }}</h1>
          <p v-html="block.content"></p>
          <figure>
            <img :src="block.background.url" :alt="block.background.alt" />
          </figure>
        </article>

      </section>


    </div>

</template>
<script type="text/babel">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import $ from 'jquery';
  import slick from 'slick-carousel';

  export default{
    name: 'Home',
    props: ['defines'],
    components: { swiper, swiperSlide },
    data(){
      return {
        data: this.data ? this.getDataHome() : '',
        slides: this.slides ? this.setSlider() : '',
        offers: this.offers ? this.setOffersBlock() : '',
        content: this.content ? this.setContentBlocks() : '',
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
        this.getDataHome();
      }
    },
    methods: {
      getDataHome() {
        this.$http.get('/wp-json/acf/v2/post/' + this.defines.homePage)
            .then(response => {
              this.data =  response.body.acf;

                this.setSlider();
                this.setOffersBlock();
                this.setContentBlocks();

            }, response => {
              console.log('Data could not be loaded', +response)
            });
      },
      setSlider(){
          if(!this.slides && this.data.home_slides){
            this.slides =  this.data.home_slides;
            setTimeout(function(){$('#slider').slick()},0);
          }
      },

      setOffersBlock(){
        if(!this.offers && this.data.offers){
          this.offers =  this.data.offers;
        }
      },

      setContentBlocks() {
        if(!this.content && this.data.content_block){
          this.content =  this.data.content_block;
        }
      },

      setIcon(string){
        string = "fa fa-"+string;
        return string;
      }
    },

    watch: {
      defines: function() {
        this.getDataHome();
      }
    }
  }
</script>
