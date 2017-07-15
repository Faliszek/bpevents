export const mutationsCreator = () => {
  return {
    setMenuLinks: (state, data) => state.header.links = data,
    setHomeSlides: (state, data) => state.home.slides = data,
    setHomeOffers: (state, data) => state.home.offers = data,
    setHomeContent: (state, data) => state.home.content = data,
    setContactDesc: (state, data) => state.contact.desc = data,
    setContactImg: (state, data) => state.contact.img = data,
    setRecommendations: (state, data) => state.recommend.recommendations = data,
    setReference: (state, data) => state.references.refs = data,
    setReferencesFacebookLink: (state, data) => state.references.facebook_link = data,
    setFooterWidget: (state, data) => state.footer.widget = data,
    setFooterMenuLinks: (state, data) => state.footer.menu.links = data,
    setFooterMenuTitle: (state, data) => state.footer.menu.title = data
  }
};


    //
    // setGalleryEquipment: (state, data) => state.gallery.equipment = data,
    // setGalleryPhotos: (state, data) => state.gallery.photos = data,
    // setGalleryVideos: (state, data) => state.gallery.videos = data,
    //
