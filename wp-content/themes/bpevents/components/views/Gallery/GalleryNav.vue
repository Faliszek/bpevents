<template>
  <div class="gallery__nav">
    <div @click="changeGallery"
         data-gallery="photos-gallery"
         data-gallery-title="photosTitle"
         :class="[{active : activeGallery === photosComponent.name } , 'gallery__nav-item photos-item']">
      <h6>Fotografie</h6>
    </div>

    <div @click="changeGallery"
         data-gallery="videos-gallery"
         data-gallery-title="videosTitle"
         :class="[{active : activeGallery === videosComponent.name } , 'gallery__nav-item photos-item']">
      <h6>Video</h6>
    </div>
    <div @click="changeGallery"
         data-gallery="equipment-gallery"
         data-gallery-title="equipmentTitle"
         :class="[{active : activeGallery === equipmentComponent.name } , 'gallery__nav-item photos-item']">
      <h6>Sprzęt</h6>
    </div>

  </div>
</template>
<script>
  import Waves from 'node-waves/dist/waves';
  import PhotosGallery from './GalleryPhotos.vue'
  import VideosGallery from './GalleryVideos.vue'
  import EquipmentGallery from './GalleryEquipment.vue'

  export default{
    name: 'gallery-nav',
    props: ['activeGallery'],
    data(){
      return{
        photosComponent: PhotosGallery,
        videosComponent: VideosGallery,
        equipmentComponent: EquipmentGallery
      }
    },
    components: {
      PhotosGallery,
      VideosGallery,
      EquipmentGallery
    },
    methods: {
      changeGallery(e){
        let el  = e.currentTarget;
        let choosenGallery = el.getAttribute('data-gallery');
        this.$emit('change-gallery', choosenGallery);
      }
    }
  }
</script>
