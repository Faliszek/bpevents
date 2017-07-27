<!--suppress ALL -->
<template>
  <section id="gallery" class="gallery content page__content" v-cloak>
    <page-title :title="title"></page-title>
    <div class="container">
      <div class="row">
        <gallery-nav v-on:change-gallery="changeActiveGallery"  :active-gallery="activeGallery"></gallery-nav>

        <transition name="scale" mode="out-in" appear>
          <h5 id="gallery-title" class="text-center gallery__title " v-show="activeTitle" v-html="activeTitle"></h5>
        </transition>
        <transition name="scale" mode="out-in">
          <component :is="activeGallery"></component>
        </transition>
      </div>
    </div>
  </section>
</template>
<script>
  import _ from 'lodash';
  import {mapGetters} from 'vuex';
  import {boundedChunksWithMutations} from '../../../js/helper';
  import PageTitle from '../../page-title.vue';
  import GalleryNav from './GalleryNav.vue'
  import PhotosGallery from './GalleryPhotos.vue'
  import VideosGallery from './GalleryVideos.vue'
  import EquipmentGallery from './GalleryEquipment.vue'
  export default {
    name: 'Gallery',
    props: ['defines'],
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
    components: {
      PageTitle,
      GalleryNav,
      'photos-gallery': PhotosGallery,
      'videos-gallery': VideosGallery,
      'equipment-gallery': EquipmentGallery,
    },
    computed: {
        ...mapGetters({
          photosTitle: 'getGalleryPhotosTitle',
          videosTitle: 'getGalleryVideosTitle',
          equipmentTitle: 'getGalleryEquipmentTitle',
        })
    },
    data(){
      return{
        activeGallery: '',
        activeTitle: '',
        title: 'Galeria'
      }
    },
    created(){
      let ID = this.defines.galleryPage;
      this.$store.dispatch(
          'fetchDataPage',
          {ID, chunks: boundedChunksWithMutations(ID)}
      )
    },

    mounted(){
      document.addEventListener('galleryDataArrived', ()=>{
        this.activeTitle = this.photosTitle;
        this.activeGallery = 'photos-gallery';
      })
    },
    methods: {
      changeActiveGallery(data){
        this.activeTitle = '';
        setTimeout(()=> { this.activeTitle = this[data.choosenTitle]},600)
        this.activeGallery = data.choosenGallery;
      }
    }

  }
</script>
