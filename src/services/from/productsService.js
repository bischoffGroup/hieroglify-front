import webservice from '../webservice';

export const getGroupings = () => new Promise((resolve, reject) => {
  webservice
    .get('v2/depara/classificacoes')
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
});
