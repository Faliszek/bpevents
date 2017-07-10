export const gettersCreator = () => {
  return {
    getMenuLinks: state =>
        state.header.links,

    getHomeSlides: state =>
        state.home.slides,

    getHomeOffers: state =>
        state.home.offers,

    getHomeContent: state =>
        state.home.content,

    getContactDesc: state =>
        state.contact.desc,

    getContactImg: state =>
        state.contact.img,
    getRecommendations: state =>
        state.recommend.recommendations,

    getReference: state =>
        state.references.refs,

    getReferencesFacebookLink: state =>
        state.references.facebook_link,
  }


};


//

//
//     getGalleryEquipment: state =>
//     state.gallery.equipment,
//
//     getGalleryPhotos: state =>
//     state.gallery.photos,
//
//     getGalleryVideos: state =>
//     state.gallery.videos,
//

//
