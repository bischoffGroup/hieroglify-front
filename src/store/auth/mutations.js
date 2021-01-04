export default {
  AUTH_USER_OK(state, user) {
    state.me = user;
    state.authenticated = true;
  },
  AUTH_USER_LOGOUT(state) {
    state.me = {};
    state.authenticated = false;
  }
};
