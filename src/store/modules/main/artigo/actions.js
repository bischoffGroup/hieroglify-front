import webservice from '../../../../services/webservice';

export default {
  validate(context, artigos) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice
        .post('v2/artigos/validar/produtos', { produtos: artigos })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          context.commit('LOADING', false);
        });
    });
  },
  downloadValidateArtigo(context, artigos) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice.defaults.responseType = 'arraybuffer';
      webservice
        .post('v2/artigos/validar/produtos/download', { produtos: artigos })
        .then(response => {
          const filename = response.headers['content-disposition'].split(
            'filename='
          )[1];
          const blob = new Blob([response.data], { type: 'application/*' });
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = filename;
          link.click();
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          context.commit('LOADING', false);
        });
    });
  },
  validateArtigo(context, artigos) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice
        .post('v1/artigos/validar', { artigos })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          context.commit('LOADING', false);
        });
    });
  },
  importArtigo(context, artigos) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice
        .post('v1/artigos/importar', { artigos })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          context.commit('LOADING', false);
        });
    });
  },
  deleteArtigos(context, artigos) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice
        .delete('v1/artigos/destroy', {
          params: { artigos }
        })
        .then(response => {
          resolve(response.data.success);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          context.commit('LOADING', false);
        });
    });
  }
};
