import webservice from '../../../../services/webservice';

export default {
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
};
