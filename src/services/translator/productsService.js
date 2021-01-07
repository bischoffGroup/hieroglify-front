import webservice from '../webservice';

export const getProducts = products => new Promise((resolve, reject) => {
  webservice
    .post('v2/depara/carga/artigos', { produtos: products })
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
});
