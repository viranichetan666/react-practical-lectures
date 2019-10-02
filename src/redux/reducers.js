import auth from "./auth/reducer";
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const createReducer = asyncReducers =>
  combineReducers({
    auth,
    router: routerReducer,
    ...asyncReducers
  });

export default createReducer;
