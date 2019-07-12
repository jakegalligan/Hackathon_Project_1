import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import TastesReducer from "./reducer-tastes";

const rootReducer = combineReducers({
  tastes: TastesReducer,
  form: formReducer
});

export default rootReducer;