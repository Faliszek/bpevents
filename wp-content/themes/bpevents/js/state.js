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
      equipmentTitle: '',
      equipment: [],
      photosTitle: '',
      photos: [],
      videosTitle: '',
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
      facebookLink: ''
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