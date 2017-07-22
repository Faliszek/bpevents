<template>
    <div>
        <h1 class="text-center">Tu będą zdjęcia sprzętu</h1>
        <ul class="gallery__eqs eqs-container">
            <li class="gallery__eq z-depth-1 unvisible scale-hover-effect" v-for="(eq, index) in equipment"
                v-bind:key="index">
                <img v-img v-render class="img-responsive " :src="eq.picture.url" :alt="eq.picture.alt"/>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
      props: ['equipment'],
      data(){
            return{
                msg:'hello vue'
            }
        },
      methods: {
        created(){
          console.log(this.equipment)
        }
      }

    }
</script>
