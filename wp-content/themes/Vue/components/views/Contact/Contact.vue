<template>
  <section id="contact" class="contact page__content">
    <div class="container">
      <div class="row">
        <h1 class="text-center">Skontaktuj się ze mną!</h1>
        <div class="contact-wrap">
            <contact-desc></contact-desc>
            <contact-form :defines="defines"></contact-form>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
  import $ from 'jquery';
  import contactDesc from './ContactDesc.vue';
  import contactForm from './ContactForm.vue';

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
      meta: function () {
        return [
          {name: 'description', content: this.$route.meta.desc},
          {name: 'title', content: this.$route.meta.title}
        ]
      }
    },
    created(){
      this.$store.dispatch(
          'fetchDataPage',
          {
            ID: this.defines.contactPage,
            chunks: [
              {method: 'setContactDesc', chunkType: 'desc'},
              {method: 'setContactImg', chunkType: 'img'}
            ]
          });
    }
  }
</script>
