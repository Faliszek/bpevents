<template>
  <header id="header">
    <nav class="main-nav">
      <div class="container">
        <div class="row">
          <a class="logo" href="/"></a>
          <div class="menu-main-container">
            <ul>
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
    </nav>
  </header>
</template>
<script type="text/babel">
  import Waves from 'node-waves/dist/waves';
  import { mapGetters } from 'vuex';

  export default {
    props: ['defines'],
    computed: {
      ...mapGetters({
        links: 'getMenuLinks'
      })
    },
    created(){
      this.$store.dispatch('getMenu', 2);
    },
  }
</script>
