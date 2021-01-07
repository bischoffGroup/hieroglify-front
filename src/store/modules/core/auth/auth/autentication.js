// import actions from './actions';
// import mutations from './mutations';
// import state from './state';
// import getters from './getters';
//
// export default {
//   actions,
//   mutations,
//   state,
//   getters
// };
import { NAME_TOKEN } from '@/configs/config';
import webservice, { setToken } from '@/services/webservice';
import { setToken as st2 } from '@/services';

const RESOURCE = 'login';

export default {
  use: () => {
    const store = {
      state: {
        me: {
        },
        authenticated: false
      },
      mutations: {
        AUTH_USER_OK(state, user) {
          state.me = user;
          state.authenticated = true;
        },
        AUTH_USER_LOGOUT(state) {
          state.me = {};
          state.authenticated = false;
        }
      },
      actions: {
        theme(context, theme) {
          localStorage.setItem(`theme-${localStorage.getItem(NAME_TOKEN)}`, theme);
        },
        login(context, credenciais) {
          context.commit('LOADING', true);
          return new Promise((resolve, reject) => {
            webservice
              .post(`${RESOURCE}`, credenciais)
              .then(response => {
                localStorage.setItem(NAME_TOKEN, response.data.success.token);
                setToken(response.data.success.token);
                context.commit('AUTH_USER_OK', response.data.success);
                resolve(response.data);
              })
              .catch(error => {
                reject(error);
              })
              .finally(() => {
                context.commit('LOADING', false);
              });
          });
        },
        logout(context) {
          localStorage.removeItem(NAME_TOKEN);
          context.commit('AUTH_USER_LOGOUT');
        },
        checkLogin(context) {
          const accessToken = localStorage.getItem(NAME_TOKEN);
          return new Promise((resolve, reject) => {
            if (!accessToken) {
              context.commit('AUTH_USER_LOGOUT');
              reject(new Error('[TOKEN UNDEFINED]'));
            }
            setToken(accessToken);
            st2(accessToken);
            return webservice
              .get('v1/get/details')
              .then(response => {
                context.commit('AUTH_USER_OK', response.data.success);
                return resolve(response);
              })
              .catch(error => {
                localStorage.removeItem(NAME_TOKEN);
                context.commit('AUTH_USER_LOGOUT');
                return reject(error);
              });
          });
        }
      },
      getters: {
        authToken: state => state.me.token
      },
      namespaced: true,
    };
    return store;
  }
};
