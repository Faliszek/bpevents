<template>
  <div class="ref">
    <div class="ref__wrap">
      <div class="ref__img scale-hover-effect">
          <img v-img class="img-responsive z-depth-1"
               :src="reference.ref_autor_img.url"
               :alt="reference.ref_autor_img.alt"/>
      </div>
      <div class="ref__content">
        <h4>{{ reference.ref_autor }}</h4>
        <p class="text" v-html="reference.ref_opinion "></p>
        <a class="link" :href="reference.ref_link">Zobacz opinie</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['reference'],
  }
</script>
