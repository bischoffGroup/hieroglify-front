import { webservice } from "@/services";

export const getImportedProduct = () => {
  return new Promise((resolve, reject) => {
    webservice
      .get(`v1/artigos/importados`)
      .then(response => {
        resolve(response.data.success);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export const getNotImportedProduct = () => {
  return new Promise((resolve, reject) => {
    webservice
      .get(`v1/artigos/produtos`)
      .then(response => {
        resolve(response.data.success);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export const createProductPrice = artigos => {
  return new Promise((resolve, reject) => {
    webservice
      .post(`v3/artigos/registrar/precos`, artigos)
      .then(response => {
        resolve(response.data.success);
      })
      .catch(error => {
        reject(error);
      });
  });
};
