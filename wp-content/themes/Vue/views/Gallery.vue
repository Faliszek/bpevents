<!--suppress ALL -->
<template>
    <section id="gallery" class="content" style="padding-top:100px;" v-cloak>
        <h1>Galeria</h1>
            <div id="eq-slider">
                <div class="eq-slide" v-for="slide in slides">
                        <img class="img-responsive" :src="slide.picture.url" :alt="slide.picture.alt" />
                </div>
            </div>
    </section>
</template>
<script>
  import $ from 'jquery';
  import slick from 'slick-carousel';

  export default{
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
      }
    },
    methods: {
      getDataEq() {
        console.log(this.defines.galleryPage)
        this.$http.get('/wp-json/acf/v2/post/' + this.defines.galleryPage)
            .then(response => {
              this.data =  response.body.acf;
              this.getSlides();
              setTimeout(function(){
                $('#eq-slider').slick();
              },0);
            }, response => {
              console.log('Data could not be loaded', +response)
            });
      },

      getSlides() {
        this.slides = this.data.eq;
      }
    },

    watch: {
      defines: function() {
        this.getDataEq();
      }
    }
  }
</script>
