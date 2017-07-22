<template>
  <div class="offer-block">
    <h1 class="offer-block__title">Oferta</h1>
    <div class="col-sm-4 offer" v-for="offer in offers">
      <i :class="setIcon(offer.offer_icon)" class="z-depth-1"></i>
      <h3 class="offer__title">{{ offer.offer_title }}</h3>
      <p class="offer__content" v-html="offer.offer_content"></p>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },

    computed: {
      ...mapGetters({
        offers: 'getHomeOffers'
      })
    },
    methods: {
      setIcon(string){
        string = "icon icon-" + string;
        return string;
      },
    }
  }
</script>
