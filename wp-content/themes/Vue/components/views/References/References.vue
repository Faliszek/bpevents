<template>
  <section id="references" class="refs page__content">
    <page-title :title="title"></page-title>
    <div class="container">
      <div class="row">
        <div id="refs" class="clearfix">
          <reference-single
            :reference="reference"
            v-for="(reference, index) in refs"
            key="index"></reference-single>
        </div>
      </div>
      <div class="row btn-row">
        <a class="main-button facebook-button" :href="facebook_link" target="_blank">Zobacz więcej opinii</a>
      </div>
    </div>
    <!--{{ refs }}-->
  </section>

</template>
<script>
  import $ from 'jquery';
  import slick from 'slick-carousel';
  import PageTitle from '../page-title.vue';
  import ReferenceSingle from './ReferenceSingle.vue';
  import {mapGetters} from 'vuex';

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
      meta: function () {
        return [
          {name: 'description', content: this.$route.meta.desc},
          {name: 'title', content: this.$route.meta.title}
        ]
      }
    },
    components: {
      PageTitle,
      ReferenceSingle
    },
    computed: {
      ...mapGetters({
        refs: 'getReference',
        facebook_link: 'getReferencesFacebookLink'
      })
    },
    data(){
      return {
        title: 'Opinie'
      }
    },
    created() {
      this.$store.dispatch(
          'fetchDataPage',
          {
            ID: this.defines.referencesPage,
            chunks: [
              {method: 'setReference', chunkType: 'opinion'},
              {method: 'setReferencesFacebookLink', chunkType: 'facebook_link'}
            ]
          }
      );
    },
    updated(){
      this.setSlider();
      this.setImgPreview();

    },
    methods: {
      setSlider(){
        let el = $('#refs');
        el.not('.slick-initialized').slick({
          infinite: true,
          speed: 700,
          cssEase: 'ease-out',
          arrows: true,
          fade: true,
          prevArrow: `<i class="arrow-prev fa fa-angle-left"></i>`,
          nextArrow: `<i class="arrow-next fa fa-angle-right"></i>`,
        })
      },
      setImgPreview(){
        $('.image-light-box')
            .imageLightbox({
                  arrows: true,
                  overlay: true,
                  button: true,
                  caption: true
             });
      }
    },
  }
</script>
