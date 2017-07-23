<template>
  <div class="gallery__block">
    <h5 class="text-center title" v-if="title">{{ title }}</h5>
    <ul class="gallery__photos photos-container">
      <li class="gallery__photo z-depth-1 unvisible scale-hover-effect"
          v-for="(photo, index) in photos"
          :key="index">

        <img v-img v-render
             class="img-responsive img"
             :src="photo.picture.url"
             :alt="photo.picture.alt"
        />
      </li>
    </ul>

  </div>
</template>
<script>
  export default{
    props: ['title', 'photos'],
  }
</script>
