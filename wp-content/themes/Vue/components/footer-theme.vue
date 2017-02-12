<template>
  <footer>
    <div class="footer container">
      <div class="footer-content row">
        <div class="col-sm-5">
          <div class="contact-block">
            <div class="logo">
              <img class="img-responsive" src="" alt="" />
            </div>
            <div class="text" v-html="footerContact">
            </div>
          </div>

        </div>
        <div class="col-sm-3">
          <div class="site-map">
            {{ footerLinks }}
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-contact">
            {{ footerContactForm }}
          </div>
        </div>
      </div>
      <div class="footer-social">

      </div>
    </div>
  </footer>
</template>
<script type="text/babel">

  export default {
    name: 'FooterTheme',
    data() {
      return {
        footerContact: this.getWidget('footer-contact', 'footerContact'),
        footerContactForm: this.getWidget('footer-contact-form', 'footerContactForm'),
        footerLinks: this.getWidget('footer-links', 'footerLinks')
      }
    },
    methods: {
      getWidget(name, property){
        this.$http.get('/wp-json/wp-rest-api-sidebars/v1/sidebars/'+name).then(response => {
          this[property] = response.body.rendered
        }, response => {
          console.log('Sidebar could not be loaded', +response)
        });
      }
    }
  }
</script>
