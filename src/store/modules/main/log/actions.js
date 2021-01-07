import webservice from '../../../../services/webservice';

export default {
  loadLogEntradasGet(context) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice
        .get('v1/log/entradas/get')
        .then(response => {
          localStorage.setItem('log-get', JSON.stringify(response));
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
  loadLogEntradasPost(context) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice
        .get('v1/log/entradas/post')
        .then(response => {
          localStorage.setItem('log-post', JSON.stringify(response));
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
  loadLogImportacoesErros(context) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice
        .get('v1/log/importacoes/erros')
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
  loadLogImportacoesHistorico(context) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice
        .get('v1/log/importacoes')
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
  }
};
