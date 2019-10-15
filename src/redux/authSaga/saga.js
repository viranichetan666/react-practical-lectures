import { all, takeEvery, put, fork } from "redux-saga/effects"; // You can import select
import actions from "./actions";
import { loginApiHandler } from "services";

// const fakeApiCall = true;

export function* loginRequest() {
  yield takeEvery("LOGIN_REQUEST", function*() {
    const response = yield loginApiHandler({
      email: "chetan.virani@volansys.com",
      password: "123456"
    });

    if (response.status === 200) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: response.data.token,
        profile: "Profile"
      });
    } else {
      yield put({ type: actions.LOGIN_ERROR });
    }

    // You can Get current state values in this way if you need token or something else
    // const auth = yield select(state => state.auth.token);
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {});
}

export default function* rootSaga() {
  yield all([fork(loginRequest), fork(loginError)]);
}
