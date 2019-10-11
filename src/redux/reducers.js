import auth from "./auth/reducer";
import authSaga from "./authSaga/reducer";
import todo from "./todo/reducer";
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const createReducer = asyncReducers =>
  combineReducers({
    auth,
    authSaga,
    todo,
    router: routerReducer,
    ...asyncReducers
  });

export default createReducer;
