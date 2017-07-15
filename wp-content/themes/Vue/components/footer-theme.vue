<template>
  <footer id="footer">
    <div class="footer container">
      <div class="footer-content row">
        <div class="col-sm-4 footer__block">
          <div class="logo"></div>
        </div>

        <div class="col-sm-4 footer__block" v-if="widget">
          <div class="widget.id">
            <div :class="widget.class">
              <aside class="widget" v-html="widget.rendered">
              </aside>
            </div>
          </div>
        </div>

        <div class="col-sm-4 footer__block" v-if="links">
          <div class="footer_menu.id">
            <h4>{{ footer_menu_title }}</h4>
            <ul class="site-map">
              <li v-for="link in links">
                <router-link
                  :to="{ path: link.object_slug }"
                  class="menu-item">
                  {{ link.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script type="text/babel">
  import { mapGetters } from 'vuex';
  import {FOOTER_MENU_ID} from '../js/data';

  export default {
    name: 'FooterTheme',
    props: ['defines'],
    computed: {
      ...mapGetters({
        widget: 'getFooterWidget',
        links: 'getFooterMenuLinks',
        footer_menu_title: 'getFooterMenuTitle'
      })
    },
    beforeMount() {
      this.$store.dispatch('getWidget', 'footer-contact');
      this.$store.dispatch('getMenu', FOOTER_MENU_ID);
    }
  }
</script>
