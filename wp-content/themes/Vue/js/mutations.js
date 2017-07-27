export const mutationsCreator = () => {
  return {
    setMenuLinks: (state, data) => state.header.links = data,

    setHomeSlides: (state, data) => state.home.slides = data,
    setHomeOffers: (state, data) => state.home.offers = data,
    setHomeContent: (state, data) => state.home.content = data,

    setContactDesc: (state, data) => state.contact.desc = data,
    setContactImg: (state, data) => state.contact.img = data,

    setRecommendRecommendations: (state, data) => state.recommend.recommendations = data,

    setReferencesRefs: (state, data) => state.references.refs = data,
    setReferencesFacebookLink: (state, data) => state.references.facebookLink = data,

    setGalleryEquipmentTitle: (state, data) => state.gallery.equipmentTitle = data,
    setGalleryEquipment: (state, data) => state.gallery.equipment = data,
    setGalleryPhotosTitle: (state, data) => state.gallery.photosTitle = data,
    setGalleryPhotos: (state, data) => state.gallery.photos = data,
    setGalleryVideosTitle: (state, data) => state.gallery.videosTitle = data,
    setGalleryVideos: (state, data) => state.gallery.videos = data,

    setFooterWidget: (state, data) => state.footer.widget = data,
    setFooterMenuLinks: (state, data) => state.footer.menu.links = data,
    setFooterMenuTitle: (state, data) => state.footer.menu.title = data
  }
};
