import webservice from '../webservice';

export const getProductsSize = products => new Promise((resolve, reject) => {
  webservice
    .post('v2/depara/carga/grades', { produtos: products })
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
});
