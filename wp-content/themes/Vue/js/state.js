export const stateCreator = () => {
  return {
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
    footer: {
      widget: {},
      menu: {
        title: '',
        links: []
      }
    }
  }
};