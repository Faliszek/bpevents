<!--suppress ALL -->
<template>
    <div id="home" class="content" v-cloak>
      <section id="home-slider">
        <keep-alive>
          <slider :slides="this.slides"></slider>
        </keep-alive>
      </section>

      <section class="offer-block" v-if="offers">
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
      </section>
      <section class="content-block" v-for="(block, index) in content" :class="index%2 == 1 ? 'left-side' : 'right-side'">
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
      </section>


    </div>

</template>
<script type="text/babel">
  import $ from 'jquery';
  import slick from 'slick-carousel';
  import slider from '../components/slider.vue';

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
        data: this.data ? this.getDataHome() : '',
        slides: this.slides ? this.setDataSlider() : '',
        offers: this.offers ? this.setOffersBlock() : '',
        content: this.content ? this.setContentBlocks() : '',
      }
    },
    mounted() {
//      if(this.defines){
        this.getDataHome();
//      }
    },
    methods: {
      getDataHome() {
        this.$http.get('/wp-json/acf/v2/post/'+this.defines.homePage)
            .then(response => {
              console.log(response);
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
          }
      },

      setOffersBlock(){
        if(!this.offers && this.data.offers){
          this.offers =  this.data.offers;
          this.setImgPreview();
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
    },

    watch: {
      defines: function() {
        this.getDataHome();
      }
    }
  }
</script>
