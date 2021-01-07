// import actions from "./actions";
// import mutations from "./mutations";
// import state from "./state";
//
// export default {
//   actions,
//   mutations,
//   state
// };
import webservice from '@/services/webservice';

export default {
  use: () => ({
    state: {
      version: ''
    },
    mutations: {
      LOAD_VERSION(state, version) {
        state.version = version;
      }
    },
    actions: {
      loadVersion(context) {
        if (localStorage.getItem('version')) {
          context.commit('LOAD_VERSION', localStorage.getItem('version'));
        } else {
          return new Promise((resolve, reject) => {
            webservice
              .get('version')
              .then(response => {
                localStorage.setItem('version', response.data.success);
                context.commit('LOAD_VERSION', response.data.success);
                resolve(response);
              })
              .catch(error => {
                reject(error);
              });
          });
        }
      }
    },
    namespaced: true
  })
};
