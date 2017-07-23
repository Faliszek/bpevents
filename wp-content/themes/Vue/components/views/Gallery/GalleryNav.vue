<template>
  <div class="gallery__nav">
    <div class="gallery__nav-item photos-item active">
      <h6>Fotografie</h6>
    </div>
    <div class="gallery__nav-item video-item">
      <h6>Video</h6>
    </div>
    <div class="gallery__nav-item equipment-item">
      <h6>Sprzęt</h6>
    </div>
  </div>
</template>
<script>
  import Waves from 'node-waves/dist/waves';
  export default{
    name: 'gallery-nav',
    data(){
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
