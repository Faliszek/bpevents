<template>
        <div id="references" class="content" style="padding-top:150px;">
          <h1>Opinie</h1>
          <div id="refs">
            {{defines}}
            {{ meta_title }}
            <div class="ref" v-for="ref in refs">
              <img class="img-responsive" :src="ref.ref_autor_img.url" :alt="ref.ref_autor_img.alt" />
              <h2>{{ ref.ref_autor }}</h2>
              <p v-html="ref.ref_opinion "></p>
              <span v-html="modifyDate(ref.ref_data)"></span>
            </div>
          </div>
          <!--{{ refs }}-->
        </div>

</template>
<script>
    export default{
      name: 'References',
      props: ['defines'],
      head: {
        // To use "this" in the component, it is necessary to return the object through a function
        title: function () {
          return {
            inner: this.$route.meta.title,
            separator: '',
          }
        },
        meta: function(){
          return [
            { name: 'description', content: this.$route.meta.desc }
          ]
        }
      },
        data(){
          return {
            msg: 'References',
            meta_title: this.meta_title ? this.meta_title : '',
            refs: this.refs ? this.getRefs() : '',
          }
        },
      mounted() {
        if(this.defines){
          this.getDataEq();
          this.meta_title = this.setMeta();
        }
      },
      methods: {
        setMeta() {
          console.log(this.$route);
        },
        getDataEq() {
          this.$http.get('/wp-json/acf/v2/post/' + this.defines.referencesPage)
              .then(response => {
                this.refs = response.body.acf.opinion;
              }, response => {
                console.log('Data could not be loaded', +response)
              });
        },

        getRefs(){
            this.data = this.data.eq;
        },
        modifyDate(s){
          let slash = '/';
          let r = new RegExp(slash, 'g');
          s += 'r.';
          return s.replace(r, '.');
        }
      },
    }
</script>
