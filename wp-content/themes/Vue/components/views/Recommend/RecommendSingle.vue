<template>
        <div class="single-rec">
            <div class="img-wrap">
                <a :href="recommendation.img.url" class="image-light-box" :data-ilb2-caption="recommendation.img.alt">
                    <img class="img-wrap__img img-responsive" :src="recommendation.img.url" :alt="recommendation.img.alt" />
                </a>
            </div>
            <div class="text-wrap">
                <h3 class="text-wrap__title">{{recommendation.title}}</h3>
                <p class="text-wrap__content" v-html="recommendation.content"></p>
                <a v-if="recommendation.link" :href="recommendation.link" target="_blank" class="text-wrap__link secondary-button">Dowiedz się więcej</a>
            </div>
        </div>
</template>
<script>
  export default{
      name: 'SingleRecommendation',
      props: ['recommendation'],
    }
</script>
