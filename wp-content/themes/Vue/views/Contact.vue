<template xmlns:v-on="http://www.w3.org/1999/xhtml">
        <div class="content" style="padding-top:150px;">
          <form>
            <input :class="{ 'form-error': !validate.nameIsValid }" type="text" placeholder="Imię i nazwisko" v-model="data.name"><br />
            <input :class="{ 'form-error': !validate.topicIsValid }" type="text" placeholder="Temat wiadomości" v-model="data.topic"><br />
            <input :class="{ 'form-error': !validate.emailIsValid }" type="email" placeholder="E-mail" v-model="data.email"/><br />
            <textarea :class="{ 'form-error': !validate.messageIsValid }" placeholder="Masz pytania? Pisz śmiało ;)" v-model="data.message"></textarea><br />
            <input type="submit" v-on:click="sendMessage" />
          </form>
          {{data}}<br />
          {{validate}}
        </div>

</template>
<script>
  import $ from 'jquery';
  import { isMail, isName, isSafe } from '../js/helper';
  import toast from 'jquery-toast-plugin';
  export default{
    name: 'Contact',
    props: ['defines'],
    data(){
      return {
        msg: 'Kontakt',
        data: {
          name: this.name ? this.name : '',
          topic: this.topic ? this.topic : '',
          email: this.email ? this.email : '',
          message: this.message ? this.message : ''
        },
        validate: {
          emailIsValid: true,
          nameIsValid: true,
          topicIsValid: true,
          messageIsValid: true,
        },

        success: ''
      }
    },
    created(){
    },
    methods: {
      sendMessage: function(event){
        event.preventDefault();

        this.validateData();

        if(this.checkData() && this.validateData()) {
          $.toast({
            text:'Trwa wysyłanie wiadomości proszę czekać',
            showHideTransition: 'slide',
            loader:false,
            bgColor: 'rgba(0,0,0,0.8)',
            position: 'bottom-right',
            textAlign: 'center',
            hideAfter: 10000,
          });

          this.$http.post(''+this.defines.siteUrl+'/wp-admin/admin-ajax.php',
              {
                'action': 'send_mail',
                'data': this.data,
              },
          ).then(response => {
            $.toast().reset('all');
            $.toast({
              text:''+response.body.msg+'',
              showHideTransition: 'slide',
              loader:false,
              bgColor:'rgba(25, 180, 25, 0.8)',
              position: 'bottom-right',
              textAlign: 'center'
            });
            console.log(response);
            this.resetData();

          }, response => {
            $.toast().reset('all');
            $.toast({
              text:'Upsss.. coś poszło nie tak',
              showHideTransition: 'slide',
              loader:false,
              bgColor:'rgba(180, 25, 25, 0.8)',
              position: 'bottom-right',
              textAlign: 'center'
            });
          });

        }
      },

      resetData() {
        this.data.name = '';
        this.data.topic = '';
        this.data.email = '';
        this.data.message = '';
      },
      validateData() {
        let result = true;
        let name = this.data.name;
        let email = this.data.email;
        let topic = this.data.topic;
        let message = this.data.message;

        isMail(email) ? this.validate.emailIsValid = true : this.validate.emailIsValid = false;
        isName(name) ? this.validate.nameIsValid = true : this.validate.nameIsValid = false;
        isSafe(topic) ? this.validate.topicIsValid = true : this.validate.topicIsValid = false;
        isSafe(message) ? this.validate.messageIsValid = true : this.validate.messageIsValid = false;

        for (let key in this.validate) {
          let value = this.validate[key];
          if(!value){
            result = false;
            $.toast().reset('all');
            $.toast({
              text:'Pole zawiera niedozwolone znaki np. ^<>{}',
              showHideTransition: 'slide',
              loader:false,
              position:'bottom-right',
              bgColor: 'rgba(100,100,100,0.8)',
              textAlign: 'center',

            });
          } else {
            result = true;
          }
        }
        return result;
      },
      checkData() {
        let result = true;

        for (let key in this.data) {
          let value = this.data[key];
         if(value === ''){
           result = false;
           $.toast().reset('all');
           $.toast({
             text:'Wypełnij brakujące pola',
             showHideTransition: 'slide',
             loader:false,
             position:'bottom-right',
             bgColor: 'rgba(100,100,100,0.8)',
             textAlign: 'center',

           });
           return;
         }
        }
        return result;
      }
    }
  }
</script>
