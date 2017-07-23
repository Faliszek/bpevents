<template>
  <div class="gallery__block">
    <h5 class="text-center title" v-if="title">{{ title }}</h5>
    <ul class="gallery__eqs eqs-container">
      <li class="gallery__eq z-depth-1 unvisible scale-hover-effect"
          v-for="(eq, index) in equipment"
          :key="index">
        <img v-img v-render
             class="img-responsive img"
             :src="eq.picture.url"
             :alt="eq.picture.alt"
        />
        <figcaption class="description">
          <h5 class="text-center" v-if="eq.picture.description">{{eq.picture.description}}</h5>
        </figcaption>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    props: ['title', 'equipment'],
  }
</script>
