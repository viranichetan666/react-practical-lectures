import { all } from "redux-saga/effects";
import todoSagas from "./todo/saga";
import authSagas from "./authSaga/saga";

export default function* rootSaga() {
  yield all([todoSagas(), authSagas()]);
}
