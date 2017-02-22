<template>
  <footer>
    <div class="footer container">
      <div class="footer-content row">
        <div class="col-sm-5">
          <div class="contact-block">
            <div class="logo">
              <img class="img-responsive" src="" alt="" />
            </div>
            <div class="text" v-if="footerContact">
              <aside class="widget" v-html="footerContact.rendered">
              </aside>
            </div>
          </div>

        </div>
        <div class="col-sm-3">
          <div class="site-map" v-if="footerLinks">
            <aside class="widget" v-html="footerLinks.rendered">
            </aside>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-contact" v-if="footerContactForm">
            <aside class="widget" v-html="footerContactForm.rendered">
            </aside>
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
    props: ['defines'],
    data() {
      return {
        footerContact: this.footerContact = this.getWidget('footer-contact', 'footerContact'),
        footerContactForm: this.getWidget('footer-contact-form', 'footerContactForm'),
        footerLinks: this.getWidget('footer-links', 'footerLinks'),
      }
    },

    updated(){
      this.setRoutesForWidget();
    },
    methods: {
      getWidget(name, property){
        this.$http.get('/wp-json/wp-rest-api-sidebars/v1/sidebars/'+name).then(response => {
          this[property] = response.body;

        }, response => {
          console.log('Sidebar could not be loaded', +response)
        });
      },

      setRoutesForWidget() {
        let menuLinks = document.getElementById('menu-footer');
        if(typeof menuLinks != 'undefined' && menuLinks != null) {
          Array.from(menuLinks.children).forEach((el)=>{
            let a = el.getElementsByTagName('a')[0];
            let path = a.getAttribute('href');
            a.href = path.replace(this.defines.siteUrl, '');
            a.addEventListener('click', (e) => {
              e.preventDefault();
              console.log(e.srcElement.getAttribute('href'));
              this.$router.push({path: e.srcElement.getAttribute('href')});
            })

          })
        }
      },
    },

  }
</script>
