<template xmlns:v-on="http://www.w3.org/1999/xhtml">
        <div class="contact content">

          <div class="container">
            <div class="row">
              <h1 class="text-center">Skontaktuj się ze mną!</h1>
              <div class="contact-wrap">
                <div class="col-xs-6">
                  <keep-alive>
                    <contact-desc :desc="content.rendered" :logo="logoID"></contact-desc>
                  </keep-alive>
                </div>
                <div class="contact-form-wrapper col-xs-6">
                  <form id="contact-form" class="z-depth-3">

                    <div class="form-group firstname">
                      <!--<label for="firstname">Imię i nazwisko</label>-->
                      <input id="firstname" :class="{ 'form-error': !validate.nameIsValid }"
                             class="input" type="text"
                             @blur="removeError"
                             placeholder="Imię i nazwisko" v-model="data.name">

                    </div>
                    <div class="form-group email">
                      <!--<label for="email">E-mail</label>-->
                      <input id="email" :class="{ 'form-error': !validate.emailIsValid }"
                             class="input" type="email"
                             @blur="removeError"
                             placeholder="E-mail" v-model="data.email"/>
                    </div>
                    <div class="form-group topic">
                      <!--<label for="topic">Temat wiadomości</label>-->
                      <input id="topic" :class="{ 'form-error': !validate.topicIsValid }"
                             class="input" type="text"
                             @blur="removeError"
                             placeholder="Temat wiadomości" v-model="data.topic">

                    </div>
                    <div class="form-group message">
                      <!--<label for="message">Treść wiadomość</label>-->
                      <textarea id="message" :class="{ 'form-error': !validate.messageIsValid }"
                                class="input"
                                @blur="removeError"
                                placeholder="Masz pytania? Pisz śmiało ;)" v-model="data.message"></textarea>

                    </div>
                    <button class="main-button center-block" type="submit" v-on:click="sendMessage">
                      Wyślij
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

</template>
<script>
  import $ from 'jquery';
  import { isMail, isName, isSafe } from '../js/helper';
  import Waves from 'node-waves/dist/waves';
  import toast from 'jquery-toast-plugin';
  import contactDesc from '../components/contact-desc.vue';

  export default{
    name: 'Contact',
    props: ['defines'],
    className: 'contact',
    components: {contactDesc},
    head: {
      // To use "this" in the component, it is necessary to return the object through a function
      title: function () {
        return {
          inner: this.$route.meta.site_title,
          separator: ' ',
        }
      },
      meta: function(){
        return [
          { name: 'description', content: this.$route.meta.desc },
          { name: 'title', content: this.$route.meta.title }
        ]
      }
    },
    data(){
      return {
        msg: 'Kontakt',
        content: this.content ? this.getDataContact() : '',
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
        logoID: {},
        success: ''
      }
    },
    created(){
        if(this.defines){
          this.getDataContact();
        }
      setTimeout(function(){
        Waves.init();
        Waves.attach('.main-button');
      },0)
    },
  methods: {
    getDataContact() {
      this.$http.get('/wp-json/wp/v2/pages/' + this.defines.contactPage)
          .then(response => {
            this.content =  response.body.content;
            this.logoID = response.body.featured_media;
            console.log(this.logoID);
          }, response => {
            console.log('Data could not be loaded', +response)
          });
    },
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
                'data': this.data,
              },
          ).then(response => {
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
            console.log(response);
          });
        }
      },
      removeError(e){
        e.target.classList.remove('form-error');
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

        for (let key in this.data) {
          let value = this.data[key];
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
      }
    },
    watch: {
      defines: function() {
        this.getDataContact();
      }
    }
  }
</script>
