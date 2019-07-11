//import _ from "lodash";
import { FETCH_TASTES } from "../actions";

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
        obj[id] = item
        return obj
      }, {});
    default:
      return state;
  }
}