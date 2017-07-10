<template>
    <div class="container">
        <div class="row">
            <page-title :title="title"></page-title>
        </div>
    </div>
</template>
<script>
    import pageTitle from './page-title.vue';

    export default{
        data(){
            return{
                title:'hello vue',
                content: {}
            }
        },
        components:{
            pageTitle
        }
    }
</script>
