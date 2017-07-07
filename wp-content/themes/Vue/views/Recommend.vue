<template>
    <section id="recommend" class="content page__content">
        <div class="container">
            <div class="row">
                <h1 class="text-center page__title">Polecamy</h1>
                <div class="recommendation__wrap">
                    <div v-for="r in recommendations" class="single-rec">
                        <div class="img-wrap">
                            <a :href="r.img.url" class="image-light-box" :data-ilb2-caption="r.img.alt">
                                <img class="img-wrap__img img-responsive" :src="r.img.url" :alt="r.img.alt" />
                            </a>
                        </div>
                        <div class="text-wrap">
                            <h3 class="text-wrap__title">{{r.title}}</h3>
                            <p class="text-wrap__content" v-html="r.content"></p>
                            <a v-if="r.link" :href="r.link" target="_blank" class="text-wrap__link secondary-button">Dowiedz się więcej</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import $ from 'jquery';

    export default{
      name: 'Recommend',
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
            return{
                recommendations: []
            }
        },
        created(){
          this.getData()
        },
        mounted(){
          setTimeout(()=> {
            this.setImgPreview();
          }, 0);
        },

        methods: {
          getData() {
            console.log(this.defines);
            this.$http.get('/wp-json/acf/v2/post/' + this.defines.recommendPage)
                .then(response => {
                  console.log(response.body.acf);
                  this.recommendations = response.body.acf.recommendations;
                }, response => {
                  console.log('Data could not be loaded', +response)
                });
          },

          setImgPreview(){
              $('.image-light-box')
                  .imageLightbox({
                    arrows:true,
                    overlay:true,
                    button: true,
                    caption: true
                  });
          }
        }
    }
</script>
