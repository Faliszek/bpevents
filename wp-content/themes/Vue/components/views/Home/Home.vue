<!--suppress ALL -->
<template>
  <section id="home" class="content page__content" v-cloak>
    <div id="home-slider">
      <slider
        v-if="slides"
        :slides="slides">
      </slider>
      <div id="main-arrow-down" class="arrow-wrap" >
        <i class="fa fa-angle-down"></i>
      </div>
      <transition name="fade">
        <loader v-if="!slidesArrived"></loader>
      </transition>
    </div>
    <div class="container">
      <div class="row">
        <home-offers ref="OffersComponent"></home-offers>
        <home-content
          v-for="(block, index) in content" :block="block"
          :class="index%2 == 1 ? 'left-side' : 'right-side'" key="index">
        </home-content>
      </div>
    </div>


  </section>

</template>
<script type="text/babel">
  import {mapGetters} from 'vuex';
  import Slider from './HomeSlider.vue';
  import loader from '../loader.vue';
  import HomeOffers from './HomeOffers.vue';
  import HomeContent from './HomeContent.vue';
  import { scrollToElement, boundedChunksWithMutations } from '../../../js/helper';


export default{
    name: 'Home',
    props: ['defines'],
    components: {Slider, HomeOffers, HomeContent, loader},
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
    computed: {
      ...mapGetters({
        slides: 'getHomeSlides',
        offers: 'getHomeOffers',
        content: 'getHomeContent',
      })
    },
    data(){
      return {
        slidesArrived: false,
      }
    },
    created(){
      let ID = this.defines.homePage;
      this.$store.dispatch(
            'fetchDataPage',
            {ID, chunks: boundedChunksWithMutations(ID)}
      )
    },
    mounted() {
      this.attachArrowEvent();
    },

    methods: {
      attachArrowEvent(){
        document.getElementById('main-arrow-down').addEventListener('click', (e)=>{
          let el = this.$refs.OffersComponent.$el;
          scrollToElement(el, 500)
        })
      },
    }
  }
</script>
