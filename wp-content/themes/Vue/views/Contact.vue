<template xmlns:v-on="http://www.w3.org/1999/xhtml">
        <div class="contact content">

          <div class="container">
            <div class="row">
              <h1 class="text-center">Skontaktuj się ze mną!</h1>
              <div class="contact-wrap">
                <div class="col-xs-6">
                  <keep-alive>
                    <contact-desc :desc="content.rendered" :logo="logoID"></contact-desc>
                  </keep-alive>
                </div>
                <div class="contact-form-wrapper col-xs-6">
                  <contact-form :defines="defines"></contact-form>
                </div>
              </div>
            </div>
          </div>
        </div>

</template>
<script>
  import $ from 'jquery';
  import contactDesc from '../components/contact-desc.vue';
  import contactForm from '../components/contact-form.vue';

  export default{
    name: 'Contact',
    props: ['defines'],
    className: 'contact',
    components: {contactDesc, contactForm},
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
        content: this.content ? this.getDataContact() : '',
        logoID: {},
        success: ''
      }
    },
    created(){
        if(this.defines){
          this.getDataContact();
        }

    },
  methods: {
    getDataContact() {
      this.$http.get('/wp-json/wp/v2/pages/' + this.defines.contactPage)
          .then(response => {
            this.content =  response.body.content;
            this.logoID = response.body.featured_media;
          }, response => {
            console.log('Data could not be loaded', +response)
          });
      },
    },
    watch: {
      defines: function() {
        this.getDataContact();
      }
    }
  }
</script>
