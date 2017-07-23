<template>
  <div class="gallery__block">
    <h5 class="text-center title" v-if="title">{{ title }}</h5>
    <ul class="gallery__videos videos-container">
      <li class="gallery__video z-depth-1 scale-hover-effect video-player"
          v-for="(video, index) in videos"
          :key="index">
        <div class="gallery__video-wrap video-player-wrap">
          <video-player
                         ref="videoPlayer"
                         v-render="'video'"
                         :options="{
                         sources: [{
                          type: 'video/mp4',
                          src: video.video.url
                         }],
                         poster: video.miniature.url
                         }">
          </video-player>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import { videoPlayer } from 'vue-video-player'
  export default{
    props: ['title', 'videos'],
    components: {
      videoPlayer
    },
    data(){
      return {
        playerOptions: {

          // component options
          start: 0,
          playsinline: false,

          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "/static/images/author.jpg",
        }
      }
    }
  }
</script>
