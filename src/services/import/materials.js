import webservice from '../webservice';

export const getNotImportedMaterial = () => new Promise((resolve, reject) => {
  webservice
    .get('v1/artigos/materiais')
    .then(response => {
      resolve(response.data.success);
    })
    .catch(error => {
      reject(error);
    });
});
