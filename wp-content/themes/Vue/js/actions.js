import axios from 'axios';
export const actionsCreators = () => {
  return {
    getMenu: (context, menuID) => {
      axios
          .get('/wp-json/wp-api-menus/v2/menus/' + menuID)
          .then((resp) => {
            let links = resp.data.items;
            context.commit('setMenuLinks', links)
          });
    },

    fetchDataPage: (context, params) => {
      axios
          .get('/wp-json/acf/v2/post/' + params.ID)
          .then((resp) => {
            let data = resp.data.acf;
            console.log(data);
            console.log(params);
            params.chunks.forEach((item) => {
              console.log(item.method);
              context.commit(item.method, data[item.chunkType])
            })
          });
      }
  }
};