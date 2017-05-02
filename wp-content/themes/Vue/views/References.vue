<template>
        <div id="references" class="refs content">
          <h1 class="text-center">Opinie</h1>
          <div class="container">
            <div class="row">
              <div id="refs" class="unvisible clearfix">
                <div class="ref " v-for="ref in refs">
                  <div class="ref__wrap">
                    <div class="ref__img">
                      <img class="img-responsive z-depth-1" :src="ref.ref_autor_img.url" :alt="ref.ref_autor_img.alt" />
                    </div>
                    <div class="ref__content">
                      <h4>{{ ref.ref_autor }}</h4>
                      <p class="text" v-html="ref.ref_opinion "></p>
                      <span class="date" v-html="modifyDate(ref.ref_data)"></span>
                      <a class="link" :href="ref.ref_link">Zobacz opinie</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--{{ refs }}-->
        </div>

</template>
<script>
  import $ from 'jquery';
  import slick from 'slick-carousel';

  export default{
      name: 'References',
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
            msg: 'References',
            meta_title: this.meta_title ? this.meta_title : '',
            refs: this.refs ? this.getRefs() : '',
          }
        },
      mounted() {
        if(this.defines){
          this.getData();
          this.meta_title = this.setMeta();
        }
      },
      methods: {
        setMeta() {
          console.log(this.$route);
        },
        getData() {
          this.$http.get('/wp-json/acf/v2/post/' + this.defines.referencesPage)
              .then(response => {
                this.refs = response.body.acf.opinion;
                this.setSlider();

              }, response => {
                console.log('Data could not be loaded', +response)
              });
        },

        getRefs(){
            this.data = this.data.eq;
        },
        setSlider(){
          let el = $('#refs');
          setTimeout(()=>{
            el.not('.slick-initialized').slick({
              infinite: true,
              speed: 700,
              lazyLoad:'ondemand',
              cssEase: 'cubic-bezier(1,0.5,0.8,1)',
              arrows:true,
              fade:true,
              prevArrow: `<i class="arrow-prev fa fa-angle-left"></i>`,
              nextArrow: `<i class="arrow-next fa fa-angle-right"></i>`,
            });
          }, 0);
          el.on('init', function(){
            el.removeClass('unvisible');
          });
        },
        modifyDate(s){
          let slash = '/';
          let r = new RegExp(slash, 'g');
          s += 'r.';
          return s.replace(r, '.');
        }
      },
    }
</script>
