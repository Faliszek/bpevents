<!--suppress ALL -->
<template>
  <section id="home" class="content page__content" v-cloak>
    <div id="home-slider" class="home__slider">
      <transition name="flash" mode="out-in">
        <component
          :is="slidesArrived"
          :slides-arrived="slidesArrived = 'slider'"
          :slides="slides">
        </component>
      </transition>
    </div>
    <transition name="flash" appear>
      <div class="container" v-show="showRestContent">
        <div class="row">
          <home-offers ref="OffersComponent"></home-offers>
          <home-content
            v-for="(block, index) in content" :block="block"
            :class="index%2 == 1 ? 'left-side' : 'right-side'" key="index">
          </home-content>
        </div>
      </div>
    </transition>
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
    components: {
      'slider' : Slider,
      'loader': loader,
      HomeOffers,
      HomeContent, },
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
        slidesArrived: 'loader',
        showRestContent: false,
      }
    },
    created(){
      let ID = this.defines.homePage;
      this.$store.dispatch(
            'fetchDataPage',
            {ID, chunks: boundedChunksWithMutations(ID)}
      )
    },
    watch : {
      slidesArrived : {
        handler: function(val, oldVal) {
          if(val === 'slider'){
            setTimeout(() => { this.showRestContent = true}, 500)
          }
        },
        deep: true
      }
    }
  }
</script>
