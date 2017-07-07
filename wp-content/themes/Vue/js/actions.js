import axios from 'axios';

export const getMenu = (menuID) => {
  return axios.get('/wp-json/wp-api-menus/v2/menus/2')
};
export const fetchDataPage = (pageID) => {
    return axios.get('/wp-json/acf/v2/post/' + pageID);
};

