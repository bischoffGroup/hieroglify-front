import webservice from '../webservice';

export const getImportedProduct = () => new Promise((resolve, reject) => {
  webservice
    .get('v1/artigos/importados')
    .then(response => {
      resolve(response.data.success);
    })
    .catch(error => {
      reject(error);
    });
});
export const getNotImportedProduct = () => new Promise((resolve, reject) => {
  webservice
    .get('v1/artigos/produtos')
    .then(response => {
      resolve(response.data.success);
    })
    .catch(error => {
      reject(error);
    });
});
export const createProductPrice = artigos => new Promise((resolve, reject) => {
  webservice
    .post('v3/artigos/registrar/precos', artigos)
    .then(response => {
      resolve(response.data.success);
    })
    .catch(error => {
      reject(error);
    });
});
