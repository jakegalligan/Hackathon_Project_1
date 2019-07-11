//import _ from "lodash";
import { FETCH_TASTES, FETCH_ARTICLES } from "../actions";

const generateId = () => Math.round(Math.random() * 100000000);

export default function (state = {}, action) {
 switch (action.type) {
   case FETCH_TASTES:
     console.log(action.payload.data.Similar.Info[0]);
     const similar = action.payload.data.Similar.Results;
     similar.unshift(action.payload.data.Similar.Info[0]);
     console.log(similar);
     return similar.reduce((obj, item) => {
       let id = generateId();
       //item['wUrlPath'] = item.wUrl.substring(item.wUrl.lastIndexOf('/')+1, item.wUrl.length());
       obj[id] = item;
       return obj
     }, {});
   case FETCH_ARTICLES:
     console.log(action);
     console.log(action.payload.data.query.pages[0].original.source); 
     return state;
   default:
     return state;
 }
}