import authAction from "./actions";

const initState = {
  isLogin: false,
  accessToken: null
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case authAction.LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
        accessToken: action.accessToken
      };
    case authAction.LOGOUT:
      return {
        ...state,
        isLogin: action.isLogin,
        accessToken: null
      };
    default:
      return state;
  }
}
