<template xmlns:v-on="http://www.w3.org/1999/xhtml">
        <div class="content" style="padding-top:150px;">
          <form>
            <input type="text" placeholder="Imię i nazwisko" v-model="data.name"><br />
            <input type="text" placeholder="Temat wiadomości" v-model="data.topic"><br />
            <input type="email" placeholder="E-mail" v-model="data.email"/><br />
            <textarea placeholder="Masz pytania? Pisz śmiało ;)" v-model="data.message"></textarea><br />
            <input type="submit" v-on:click="sendMessage" />
          </form>
          {{data}}
        </div>

</template>
<script>
  import $ from 'jquery';
  export default{
    name: 'Contact',
    props: ['defines'],
    data(){
      return {
        msg: 'Kontakt',
        data: {
          name: this.name,
          topic: this.topic,
          email: this.email,
          message: this.message
        }
      }
    },
    created(){
    },
    methods: {
      sendMessage: function(event){

        event.preventDefault();
        this.$http.post(''+this.defines.siteUrl+'/wp-admin/admin-ajax.php',
            {
              'action': 'send_mail',
              'data': this.data,
            },
      ).then(response => {

          // get status
          response.status;

          // get status text
          response.statusText;

          // get 'Expires' header
          response.headers.get('Expires');

          // get body data
          this.someData = response.body;

        }, response => {
          // error callback
        });
        console.log(event);
        console.log('wyslano wiadomość');
      }
    }
  }
</script>
