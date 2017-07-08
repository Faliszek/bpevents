<!--suppress ALL -->
<template>
    <section id="home"  class="content page__content" v-cloak>
      <div id="home-slider">
          <slider
            v-if="slides"
            :slides="slides"
          ></slider>
        <div class="arrow-wrap">
          <i class="fa fa-angle-down"></i>
        </div>
        <div v-show="!sliderLoaded" class="loader">
          <div class="loader-wrap">
            <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
              <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
          </div>
        </div>

      </div>

      <div class="offer-block" v-if="offers">
        <div class="container">
          <div class="row">
            <h1 class="offer-block__title">Oferta</h1>
            <div class="col-sm-4 offer" v-for="offer in offers">
              <i :class="setIcon(offer.offer_icon)" class="z-depth-1"></i>
              <h3 class="offer__title">{{ offer.offer_title }}</h3>
              <p class="offer__content" v-html="offer.offer_content"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-block" v-if="content" v-for="(block, index) in content" :class="index%2 == 1 ? 'left-side' : 'right-side'">
        <div class="container">
        <div class="row">
        <article class="content-block__article">
          <h1 class="content-block__title">{{ block.title }}</h1>
          <div class="content-block__wrapper">
          <p class="content-block__text" v-html="block.content"></p>
            <figure class="content-block__img">
              <a :href="block.background.url" class="image-light-box" :data-ilb2-caption="block.background.description">
              <img :src="block.background.url" :alt="block.background.alt" class="img-responsive z-depth-3" />

              </a>
              <figcaption v-if="block.background.description">{{ block.background.description }}</figcaption>
            </figure>
          </div>

        </article>
        </div>
        </div>
      </div>


    </section>

</template>
<script type="text/babel">
  import $ from 'jquery';
  import slick from 'slick-carousel';
  import slider from './HomeSlider.vue';

  export default{
    name: 'Home',
    props: ['defines'],
    components: {slider},
    head: {
      // To use "this" in the component, it is necessary to return the object through a function
      title: function () {
        return {
          inner: this.$route.meta.site_title,
          separator: ' ',
        }
      },
      meta: function(){
        return [
          { name: 'description', content: this.$route.meta.desc },
          { name: 'title', content: this.$route.meta.title }
        ]
      }
    },
    data(){
      return {
          slides: [],
          offers: [],
          content: [],

          sliderLoaded: false,
      }
    },
    mounted() {
      this.getDataHome();
      this.attachArrowEvent();
    },
    methods: {
      getDataHome() {

        this.$http.get('/wp-json/acf/v2/post/'+this.defines.homePage)
            .then(response => {
              let store = this.store;
              this.slides = response.body.acf.home_slides;
              this.offers = response.body.acf.offers;
              this.content = response.body.acf.content_block;
              setTimeout(()=> {
                $(this.$el.querySelector('.loader')).fadeOut(()=>{
                  this.setSliderLoaded();
                });
              }, 1500)
            }, response => {
              console.log('Data could not be loaded', +response)
            });

      },
      attachArrowEvent(){
        this.$el
            .querySelector('.fa-angle-down')
            .addEventListener('click', () => {
              $('html, body').animate({
                scrollTop: $('.offer-block').offset().top
              });
            });

      },
      setSliderLoaded(){
        this.sliderLoaded = true;
      },
      setIcon(string){
        string = "fa fa-"+string;
        return string;
      },
      setImgPreview(){
        setTimeout(function(){
          $('.image-light-box')
              .imageLightbox({
                overlay:true,
                button: true,
                caption: true
              });
        },0);
      },
    }
  }
</script>
