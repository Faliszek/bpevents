import Vue from 'vue';

export const actionsCreators = () => {
  return {
    getMenu: (context, menuID) => {
      Vue.http
          .get('/wp-json/wp-api-menus/v2/menus/' + menuID)
          .then((resp) => {
            let links = resp.body.items;
            context.commit('setMenuLinks', links)
          });
    },

    fetchDataPage: (context, params) => {
      Vue.http
          .get('/wp-json/acf/v2/post/' + params.ID)
          .then((resp) => {
            let data = resp.body.acf;
            let event = new Event('dataArrived');
            console.log(data);
            params.chunks.forEach((item) => {
              console.log(item.method);
              context.commit(item.method, data[item.chunkType]);
            });

            document.dispatchEvent(event);

          });
      },

    sendContactForm(context, params){
      let beforeSend = new Event('beforeSend');
      document.dispatchEvent(beforeSend);
      Vue.http
          .post('/wp-admin/admin-ajax.php',
          {
            'action': 'send_mail',
            'data': params,
          },
      ).then(response => {
        let contactFormSend = new Event('contactFormSend');
        contactFormSend.data = response;
        document.dispatchEvent(contactFormSend);
      }, response => {
        let failSendForm = new Event('failSendForm');
        document.dispatchEvent(failSendForm);
      });
    }
  }
};