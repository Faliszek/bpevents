<template>
  <div class="ref">
    <div class="ref__wrap">
      <div class="ref__img">
        <a :href="reference.ref_autor_img.url"
           class="image-light-box"
           :data-ilb2-caption="reference.ref_autor_img.description">
          <img class="img-responsive z-depth-1"
               :src="reference.ref_autor_img.url"
               :alt="reference.ref_autor_img.alt"/>
        </a>
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
