<template>
    <div class="contact-desc">
        <!--<div class="logo"><img :src="picture.source_url" /></div>-->
        <div class="contact-info">{{desc}}</div>
    </div>
</template>

<script>
  export default{
    name: 'contact-desc',
    data() {
      return {
        desc: ''
      }
    },
    created(){
      console.log(this)
    },

  }
</script>