
export const setMenuLinks = (state, DATA) => {
  return state.header.links = DATA;
};
export const setContactDesc = (state, DATA) => {
  state.contact.desc = DATA;
  return state;
};

export const setContactImg = (state, DATA) => {
  return state.contact.img = DATA
};

export const setGalleryEquipment = (state, DATA) => {
  return state.gallery.equipment = DATA
};

export const setGalleryPhotos = (state, DATA) => {
  return state.gallery.photos = DATA
};

export const setGalleryVideos = (state, DATA) => {
  return state.gallery.videos = DATA
};

export const setHomeSlides = (state, DATA) => {
  return state.home.slides = DATA
};
export const setHomeOffers = (state, DATA) => {
  return state.home.offers = DATA
};
export const setHomeConten = (state, DATA) => {
  return state.home.content = DATA
};

export const setRecommendation = (state, DATA) => {
  return state.recommend.recommendations = DATA
};

export const setReference = (state, DATA) => {
  return state.references.refs = DATA
};

export const setReferencesFacebookLin = (state, DATA) => {
  return state.references.facebook_link = DATA
};;
