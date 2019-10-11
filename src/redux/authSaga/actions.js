const actions = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGOUT: "LOGOUT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  GET_USER_PROFILE: "GET_USER_PROFILE",

  loginSaga: () => ({
    type: actions.LOGIN_REQUEST
  }),

  logoutSaga: () => ({
    type: actions.LOGOUT
  })
};
export default actions;
