<template>
    <div>
        <h1 class="text-center">Tu będą videła</h1>
        <ul class="gallery__videos videos-container">
            <li class="gallery__video z-depth-1 scale-hover-effect" v-for="(video, index) in videos"
                v-bind:key="index">
                <video width="100%"  height="100%">
                    <source :src="video.video.url" type="video/mp4">
                </video>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        props: ['videos'],
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
