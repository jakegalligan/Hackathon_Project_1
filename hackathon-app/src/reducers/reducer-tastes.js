import _ from "lodash";
import { FETCH_TASTES, FETCH_ARTICLES } from "../actions";

const generateId = () => Math.round(Math.random() * 100000000);

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_TASTES:
      const similar = action.payload.data.Similar.Results;
      similar.unshift(action.payload.data.Similar.Info[0]);
      return similar.reduce((obj, item) => {
        let id = generateId();
        let url = item.wUrl;
        let wUrlTitle = url.substring(url.lastIndexOf('/') + 1, url.length);
        let newItem = Object.assign({}, item, { wUrlTitle }, { 'id': id });
        obj[id] = newItem;
        return obj
      }, {});
    case FETCH_ARTICLES:
      var searchUrl = action.payload.config.url;
      var urlTitle = searchUrl.substring(searchUrl.lastIndexOf('=') + 1, searchUrl.length);
      var imageUrl;
      if (action.payload.data && action.payload.data.query.pages[0].original) {
        imageUrl = action.payload.data.query.pages[0].original.source;
      } else {
        imageUrl = 'none';
      }
      return _.mapValues(state, (taste) => (taste.wUrlTitle === urlTitle) ? Object.assign({}, taste, { imageUrl }) : taste);
    default:
      return state;
  }
}