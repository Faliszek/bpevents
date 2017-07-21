<!--suppress ALL -->
<template>
    <section id="gallery" class="gallery content page__content" v-cloak>
        <h1 class="text-center page__title">Galeria</h1>
        <div class="container">
            <div class="row">
                <div class="gallery-menu">
                </div>
                <ul class="photos photos-container">
                    <li class="eq-photo z-depth-1" v-for="(slide, index) in slides"  v-bind:key="slide">
                        <a :href="slide.picture.url" class="image-light-box">
                            <img class="img-responsive" :src="slide.picture.url" :alt="slide.picture.alt" />
                        </a>
                    </li>
                 </ul>
            </div>
        </div>
    </section>
</template>
<style>
    li[data-id='10'] {
        display: none !important;
    }
</style>
<script>
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
            }, response => {
              console.log('Data could not be loaded', +response)
            });
      },

      getSlides() {
        this.slides = this.data.eq;
      },
      shuffle() {
        this.slides = _.shuffle(this.slides)
      }

    }
  }
</script>
