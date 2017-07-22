<template>
    <div class="gallery__nav">
        <div class="gallery__nav-item photos-item active">
            <h5>Fotografie</h5>
        </div>
        <div class="gallery__nav-item video-item">
            <h5>Video</h5>
        </div>
        <div class="gallery__nav-item equipment-item">
            <h5>Sprzęt</h5>
        </div>
    </div>
</template>
<script>
  import Waves from 'node-waves/dist/waves';
  export default{
        name: 'gallery-nav',
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
