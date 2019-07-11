import { combineReducers } from "redux";
import TastesReducer from "./reducer-tastes";

const rootReducer = combineReducers({
  tastes: TastesReducer
});

export default rootReducer;