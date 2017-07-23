<!--suppress ALL -->
<template>
  <section id="gallery" class="gallery content page__content" v-cloak>
    <h1 class="text-center page__title">Galeria</h1>
    <div class="container">
      <div class="row">
        <gallery-nav></gallery-nav>

        <videos-gallery
          :title="videosTitle"
          :videos="videos">
        </videos-gallery>

        <equipment-gallery
          :title="equipmentTitle"
          :equipment="equipment">
        </equipment-gallery>

        <photos-gallery
          :title="photosTitle"
          :photos="photos">
        </photos-gallery>


      </div>
    </div>
  </section>
</template>
<script>
  import _ from 'lodash';
  import {mapGetters} from 'vuex';
  import {boundedChunksWithMutations} from '../../../js/helper';
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
      GalleryNav,
      PhotosGallery,
      VideosGallery,
      EquipmentGallery,
    },
    computed: {
      ...mapGetters({
        photosTitle: 'getGalleryPhotosTitle',
        photos: 'getGalleryPhotos',
        videosTitle: 'getGalleryVideosTitle',
        videos: 'getGalleryVideos',
        equipmentTitle: 'getGalleryEquipmentTitle',
        equipment: 'getGalleryEquipment',
      })
    },
    created(){
      let ID = this.defines.galleryPage;
      this.$store.dispatch(
          'fetchDataPage',
          {ID, chunks: boundedChunksWithMutations(ID)}
      )
    }
  }
</script>
