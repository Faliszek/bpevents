<template>
  <header id="header">
    <nav class="main-nav">
      <div class="container">
        <div class="row">
          <a class="logo" href="/"></a>
          <div class="menu-main-container">
            <ul>
              <li @mouseover="fetchData(link.object_id)" :data-id="link.object_id" v-for="link in links">
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
  import { MAIN_MENU_ID } from '../js/data';
  import { boundedChunksWithMutations } from '../js/helper'
  export default {
    props: ['defines'],
    computed: {
      ...mapGetters({
        links: 'getMenuLinks'
      })
    },
    created(){
      this.$store.dispatch('getMenu', MAIN_MENU_ID);
    },
    methods: {
      fetchData(ID){
        this.$store.dispatch('fetchDataPage', {ID, chunks: boundedChunksWithMutations(ID) })
      }
    }
  }
</script>
