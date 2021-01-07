import webservice from '../../../../services/webservice';

export default {
  download(context, response) {
    const filename = response.headers['content-disposition'].split(
      'filename='
    )[1];
    const blob = new Blob([response.data], { type: 'application/*' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  },
  gerarGradeDownload(context, produtos) {
    context.commit('LOADING', true);
    webservice.defaults.responseType = 'arraybuffer';
    webservice
      .post('v2/depara/carga/grades/download', { produtos })
      .then(response => {
        context.dispatch('download', response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        context.commit('LOADING', false);
      });
  },
  gerarCombinacaoDownload(context, produtos) {
    context.commit('LOADING', true);
    webservice.defaults.responseType = 'arraybuffer';
    webservice
      .post('v2/depara/carga/artigos/download', { produtos })
      .then(response => {
        context.dispatch('download', response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        context.commit('LOADING', false);
      });
  },
  gerarFTDownload(context, produtos) {
    context.commit('LOADING', true);
    webservice.defaults.responseType = 'arraybuffer';
    webservice
      .post('v2/depara/carga/ft/download', { produtos })
      .then(response => {
        context.dispatch('download', response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        context.commit('LOADING', false);
      });
  },
  gerarGrade(context, produtos) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice
        .post('v2/depara/carga/grades', { produtos })
        .then(response => {
          context.commit('GRADES_LOAD', response.data);
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
  gerarCombinacao(context, produtos) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice
        .post('v2/depara/carga/artigos', { produtos })
        .then(response => {
          context.commit('COMBINACOES_LOAD', response.data);
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
  gerarFT(context, produtos) {
    context.commit('LOADING', true);
    return new Promise((resolve, reject) => {
      webservice
        .post('v2/depara/carga/ft', { produtos })
        .then(response => {
          context.commit('FICHAS_LOAD', response.data);
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
  deleteItemState(context, tipo) {
    switch (tipo) {
      case 'GRADE':
        context.commit('GRADES_DELETE');
        break;
      case 'COMBINACAO':
        context.commit('COMBINACOES_DELETE');
        break;
      case 'FICHA':
        context.commit('FICHAS_DELETE');
        break;
      case 'CLASSIF_MATERIAL':
        context.commit('CLASSIF_MATERIAIS_DELETE');
        break;
      case 'CLASSIF_PRODUTO':
        context.commit('CLASSIF_PRODUTOS_DELETE');
        break;
    }
  },
  buscarClassificacoes(context, tipo) {
    context.commit('LOADING');
    return new Promise((resolve, reject) => {
      webservice
        .get('v2/depara/classificacoes')
        .then(response => {
          if (tipo === 'materiais') {
            context.commit(
              'CLASSIF_MATERIAIS_LOAD',
              response.data.success.materiais
            );
          }
          if (tipo === 'produtos') {
            context.commit(
              'CLASSIF_PRODUTOS_LOAD',
              response.data.success.produtos
            );
          }
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
  criarClassificacao(context, classif) {
    context.commit('LOADING');
    return new Promise((resolve, reject) => {
      webservice
        .post('v2/depara/criar-classificacao', classif)
        .then(response => {
          context.dispatch(
            'buscarClassificacoes',
            classif.tipo === 'produtos' ? 'produtos' : 'materiais'
          );
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
  excluirClassificacao(context, classif) {
    context.commit('LOADING');
    return new Promise((resolve, reject) => {
      webservice
        .post('v2/depara/excluir-classificacao', classif)
        .then(response => {
          context.dispatch(
            'buscarClassificacoes',
            classif.tipo === 'produtos' ? 'produtos' : 'materiais'
          );
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
