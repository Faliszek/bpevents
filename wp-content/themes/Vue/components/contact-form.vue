<template>
  <form id="contact-form" class="z-depth-3">
    <div class="form-group firstname">
      <input id="firstname" :class="{ 'form-error': !validate.nameIsValid }"
             class="input" type="text"
             @blur="removeError"
             placeholder="Imię i nazwisko" v-model="dataForm.name">

    </div>
    <div class="form-group email">
      <input id="email" :class="{ 'form-error': !validate.emailIsValid }"
             class="input" type="email"
             @blur="removeError"
             placeholder="E-mail" v-model="dataForm.email"/>
    </div>
    <div class="form-group topic">
      <input id="topic" :class="{ 'form-error': !validate.topicIsValid }"
             class="input" type="text"
             @blur="removeError"
             placeholder="Temat wiadomości" v-model="dataForm.topic">

    </div>
    <div class="form-group message">
      <textarea id="message" :class="{ 'form-error': !validate.messageIsValid }"
                class="input"
                @blur="removeError"
                placeholder="Masz pytania? Pisz śmiało ;)" v-model="dataForm.message"></textarea>

    </div>
    <button class="main-button center-block" type="submit" v-on:click="sendMessage">
      Wyślij
    </button>
  </form>
</template>
<script>
  import $ from 'jquery';
  import { isMail, isName, isSafe } from '../js/helper';
  import Waves from 'node-waves/dist/waves';
  import toast from 'jquery-toast-plugin';

  export default {
    name: 'contact-form',
    props: ['defines'],
    data() {
      return {
        dataForm: {
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
        }
      }
    },
    created(){
      setTimeout(function(){
        Waves.init();
        Waves.attach('.main-button');
      },0)
    },
    methods: {
      sendMessage: function (event) {
        event.preventDefault();
        let validated = this.validateData();

        if (validated) {
          $.toast({
            text: 'Trwa wysyłanie wiadomości proszę czekać',
            showHideTransition: 'slide',
            loader: false,
            bgColor: 'rgba(0,0,0,0.8)',
            position: 'bottom-right',
            textAlign: 'center',
            hideAfter: 10000,
          });

          this.$http.post('' + this.defines.siteUrl + '/wp-admin/admin-ajax.php',
              {
                'action': 'send_mail',
                'data': this.dataForm,
              },
          ).then(response => {
            console.log(this.response);
            $.toast().reset('all');
            $.toast({
              text: '' + response.body.msg + '',
              showHideTransition: 'slide',
              loader: false,
              bgColor: 'rgba(25, 180, 25, 0.8)',
              position: 'bottom-right',
              textAlign: 'center'
            });
            this.resetData();

          }, response => {
            $.toast().reset('all');
            $.toast({
              text: 'Upsss.. coś poszło nie tak, spróboj ponownie',
              showHideTransition: 'slide',
              loader: false,
              bgColor: 'rgba(180, 25, 25, 0.8)',
              position: 'bottom-right',
              textAlign: 'center'
            });
          });
        }
      },
      validateData() {
        let result = true;
        let name = this.dataForm.name;
        let email = this.dataForm.email;
        let topic = this.dataForm.topic;
        let message = this.dataForm.message;

        isMail(email) ? this.validate.emailIsValid = true : this.validate.emailIsValid = false;
        isName(name) ? this.validate.nameIsValid = true : this.validate.nameIsValid = false;
        isSafe(topic) ? this.validate.topicIsValid = true : this.validate.topicIsValid = false;
        isSafe(message) ? this.validate.messageIsValid = true : this.validate.messageIsValid = false;

        for (let key in this.dataForm) {
          let value = this.dataForm[key];
          if (value === '') {
            result = false;
            $.toast().reset('all');
            $.toast({
              text: 'Wypełnij brakujące pola',
              showHideTransition: 'slide',
              loader: false,
              position: 'bottom-right',
              bgColor: 'rgba(100,100,100,0.8)',
              textAlign: 'center',

            });
            return result;
          }
        }
        for (let key in this.validate) {
          let value = this.validate[key];
          result = false;
          if (!value && value !== '') {
            if(key === 'emailIsValid') {
              $.toast().reset('all');
              $.toast({
                text: 'Wprowadzony e-mail jest niepoprawny',
                showHideTransition: 'slide',
                loader: false,
                position: 'bottom-right',
                bgColor: 'rgba(100,100,100,0.8)',
                textAlign: 'center',
              });
              return result;
            }
            $.toast().reset('all');
            $.toast({
              text: 'Pole zawiera niedozwolone znaki np. ^<>{}',
              showHideTransition: 'slide',
              loader: false,
              position: 'bottom-right',
              bgColor: 'rgba(100,100,100,0.8)',
              textAlign: 'center',
            });
            return result;
          }
          else {
            result = true;
          }
        }
        return result;
      },
      removeError(e){
        e.target.classList.remove('form-error');
      },
      resetData() {
        this.dataForm.name = '';
        this.dataForm.topic = '';
        this.dataForm.email = '';
        this.dataForm.message = '';
      }
    }
  }
</script>