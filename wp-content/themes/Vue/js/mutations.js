export const mutationsCreator = () => {
  return {
    setMenuLinks: (state, data) => state.header.links = data,
    setContactDesc: (state, data) => state.contact.desc = data,
    setContactImg: (state, data) => state.contact.img = data,
  }
};


    //
    // setGalleryEquipment: (state, data) => state.gallery.equipment,
    // setGalleryPhotos: (state, data) => state.gallery.photos,
    // setGalleryVideos: (state, data) => state.gallery.videos,
    //
    // setHomeSlides: (state, data) => state.home.slides,
    // setHomeOffers: (state, data) => state.home.offers,
    // setHomeContent: (state, data) => state.home.content,
    //
    // setRecommendations: (state, data) => state.recommend.recommendations,
    //
    // setReference: (state, data) => state.references.refs,
    // setReferencesFacebookLin: (state, data) => state.references.facebook_link