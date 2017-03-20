<template xmlns:v-on="http://www.w3.org/1999/xhtml">
        <div class="content" style="padding-top:150px;">
          <form>
            <input type="text" placeholder="Imię" v-model="data.name"><br />
            <input type="text" placeholder="Nazwisko" v-model="data.surname"><br />
            <input type="email" placeholder="E-mail" v-model="data.email"/><br />
            <textarea placeholder="Masz pytania? Pisz śmiało ;)" v-model="data.message"></textarea><br />
            <input type="submit" v-on:click="sendMessage" />
          </form>
          {{data}}
        </div>

</template>
<script>
  export default{
    name: 'Contact',
    data(){
      return {
        msg: 'Kontakt',
        data: {
          name: this.name,
          surname: this.surname,
          email: this.email,
          message: this.message
        }
      }
    },
    created(){
    },
    methods: {
      sendMessage: function(event){
        this.$http.post('/someUrl', {foo: 'bar'}).then(response => {

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
        event.preventDefault();
        console.log('wyslano wiadomość');
      }
    }
  }
</script>
