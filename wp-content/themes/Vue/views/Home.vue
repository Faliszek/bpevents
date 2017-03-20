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
  import $ from 'jquery';
  import slick from 'slick-carousel';
  import slider from '../components/slider.vue';

  export default{
    name: 'Home',
    props: ['defines'],
    components: {slider},
    data(){
      return {
        data: this.data ? this.getDataHome() : '',
        slides: this.slides ? this.setDataSlider() : '',
        offers: this.offers ? this.setOffersBlock() : '',
        content: this.content ? this.setContentBlocks() : '',
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

                this.setDataSlider();
                this.setOffersBlock();
                this.setContentBlocks();

            }, response => {
              console.log('Data could not be loaded', +response)
            });
      },
      setDataSlider(){
          if(!this.slides && this.data.home_slides){
            this.slides =  this.data.home_slides;
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
