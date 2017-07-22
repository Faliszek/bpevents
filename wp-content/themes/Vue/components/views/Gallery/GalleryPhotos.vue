<template>
  <ul class="gallery__photos photos-container">
    <li class="gallery__photo z-depth-1 unvisible scale-hover-effect" v-for="(photo, index) in photos"
        v-bind:key="index">
      <img v-img v-render class="img-responsive " :src="photo.picture.url" :alt="photo.picture.alt"/>
    </li>
  </ul>
</template>
<script>
  export default{
    props: ['photos'],
  }
</script>
