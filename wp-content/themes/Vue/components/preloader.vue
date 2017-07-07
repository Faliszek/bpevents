<template>
    <div>
        <div class="loader">
            <div class="loader__wrap">
                <div class="loader__msg"><h1>{{msg}}</h1></div>
            </div>
        </div>
    </div>
</template>
<style>
    h1{
        text-align:center;
    }
    .loader{
        background:#fff;
        width:100%;
        height:100%;
        z-index:1000;
        position:absolute;
        top:0;
        left:0;
    }

    .loader__wrap {
        width:100%;
        height:100%;
        position:relative;
    }

    .loader__msg{
        position:absolute;
        width:30%;
        height:30%;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
    }
</style>
<script>
    import $ from 'jquery';
    export default{
      name: 'pre-loader',
      props: ['defines'],
        data(){
            return{
                msg:'hello vue'
            }
        },
        beforeMount(){
          this.loadAllData(this.defines)
        },
        methods: {
          loadAllData(data){
            data.routes.forEach((route)=>{
              this.$router.push({name: route.name});
            });
            $(this.$el).fadeOut('slow');
              console.log(this.$route);
          }
        }
    }
</script>
