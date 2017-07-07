<template>
        <section id="contact" class="contact page__content">
          <div class="container">
            <div class="row">
              <h1 class="text-center">Skontaktuj się ze mną!</h1>
              <div class="contact-wrap">
                <div class="col-xs-6">
                    <contact-desc :logo="logoID"></contact-desc>
                </div>
                <div class="contact-form-wrapper col-xs-6">
                  <contact-form :defines="defines"></contact-form>
                </div>
              </div>
            </div>
          </div>
        </section>

</template>
<script>
  import $ from 'jquery';
  import contactDesc from '../components/contact-desc.vue';
  import contactForm from '../components/contact-form.vue';

  export default{
    name: 'Contact',
    props: ['defines'],
    className: 'contact',
    components: {
      contactDesc,
      contactForm
    },
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
        logoID: {},
      }
    },
    created(){
//          fetchDataPage(this.defines.contactPage)
//              .then( (response) => {
//                let data = response.data.acf;
//                setContactDesc(this.state, data.desc);
//              });
    },
  methods: {

    }
  }
</script>
