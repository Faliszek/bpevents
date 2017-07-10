<template>

  <div class="contact-desc col-xs-6">
    <div class="logo"><img :src="picture.url" :alt="picture.alt" /></div>
    <div class="contact-info" v-html="desc"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default{
    name: 'contact-desc',
    computed: {
      ...mapGetters({
        desc: 'getContactDesc',
        picture: 'getContactImg'
      })
    }
  }
</script>