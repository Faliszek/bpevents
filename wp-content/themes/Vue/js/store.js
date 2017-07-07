import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    header: {
      links: []
    },
    contact: {
      desc: '',
      img: {},
    },

    gallery: {
      equipment: [],
      photos: [],
      videos: []
    },

    home: {
      slides: [],
      offers: [],
      content: [],
    },

    recommend: {
      recommendations: [],
    },

    references: {
      refs: [],
      facebook_link: ''
    },
  },

  getters: {
    getMenuLinks: state => state.header.links
  },
  mutations: {
    setMenuLinks: (state, data) => state.header.links = data
  },
  actions: {
    getMenu: (context, menuID) => {
      axios.get('/wp-json/wp-api-menus/v2/menus/' + menuID)
          .then((resp) => {
            let links = resp.data.items;
            context.commit('setMenuLinks', links)
          });
    }
  },


});

export default store;


