<template>
    <div class="contact-desc">
        <div class="logo"><img :src="picture.source_url" /></div>
        <div class="contact-info" v-html="desc"></div>
    </div>
</template>

<script>
  export default{
    props: ['logo', 'desc'],
    name: 'contact-desc',
    data() {
      return {
        picture:{}
      }
    },
    methods: {
        getLogo() {
          this.$http.get('/wp-json/wp/v2/media/' + this.logo)
              .then(response => {
                this.picture =  response.body;
              }, response => {
                console.log('Data could not be loaded', +response)
              });
        }

    },
    watch: {
      logo: function() {
        this.getLogo();
      }
    }

  }
</script>