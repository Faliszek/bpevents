export const gettersCreator = () => {
  return {
    getMenuLinks: state => state.header.links,

    getHomeSlides: state => state.home.slides,
    getHomeOffers: state => state.home.offers,
    getHomeContent: state => state.home.content,

    getContactDesc: state => state.contact.desc,
    getContactImg: state => state.contact.img,


    getRecommendRecommendations: state => state.recommend.recommendations,
    getReferencesRefs: state => state.references.refs,
    getReferencesFacebookLink: state => state.references.facebookLink,

    getGalleryEquipment: (state) => state.gallery.equipment,
    getGalleryPhotos: (state) => state.gallery.photos,
    getGalleryVideos: (state) => state.gallery.videos,
    
    getFooterWidget: state => state.footer.widget,
    getFooterMenuLinks: state => state.footer.menu.links,
    getFooterMenuTitle: state => state.footer.menu.title
  }

};


//


//
