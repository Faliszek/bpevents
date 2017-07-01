<!--suppress ALL -->
<template>
    <section id="gallery" class="gallery content" v-cloak>
        <h1 class="text-center">Galeria</h1>
        <div class="container">
            <div class="row">
                <div class="gallery-menu">
                </div>
                <ul class="photos photos-container">
                    <li class="eq-photo z-depth-1" v-for="(slide, index) in slides"  v-bind:key="slide">
                        <a :href="slide.picture.url" class="image-light-box" :data-ilb2-caption="slide.picture.description">
                            <img class="img-responsive" :src="slide.picture.url" :alt="slide.picture.alt" />
                        </a>
                    </li>
                </ul>

                <ul class="videos photos-container">
                    <li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xO83H3wAGP0" frameborder="0" allowfullscreen></iframe>
                    </li>
                    <li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xlnwXOea3gQ" frameborder="0" allowfullscreen></iframe>
                    </li>
                    <li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/uKvR9zT6B2k" frameborder="0" allowfullscreen></iframe>
                    </li>
                    <li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aaC51E1zd-A" frameborder="0" allowfullscreen></iframe>
                    </li>
                    <li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/uKvR9zT6B2k" frameborder="0" allowfullscreen></iframe>
                    </li>
                    <li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aaC51E1zd-A" frameborder="0" allowfullscreen></iframe>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
  import $ from 'jquery';
  import slick from 'slick-carousel';
  import imageLightbox from 'imagelightbox/src/imagelightbox.js';
  import _ from 'lodash';
  export default {
    name: 'Gallery',
    props: ['defines'],
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
        data: this.data ? this.getDataEq() : '',
        slides: '',
      }
    },
    mounted() {
      if(this.defines){
        this.getDataEq();
        this.shuffle();
      }
    },
    methods: {
      getDataEq() {
        this.$http.get('/wp-json/acf/v2/post/' + this.defines.galleryPage)
            .then(response => {
              this.data =  response.body.acf;
              this.getSlides();
              this.setImgPreview();
            }, response => {
              console.log('Data could not be loaded', +response)
            });
      },

      getSlides() {
        this.slides = this.data.eq;
      },

      setImgPreview(){
        setTimeout(function(){
            $('.image-light-box')
                .imageLightbox({
                    arrows:true,
                    overlay:true,
                    button: true,
                    caption: true
                });
        },0);
      },
      shuffle() {
        this.slides = _.shuffle(this.slides)
      }

    },

    watch: {
      defines: function() {
        this.getDataEq();
      }
    }
  }
</script>
