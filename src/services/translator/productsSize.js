import { webservice } from "@/services";

export const getProductsSize = products => {
  return new Promise((resolve, reject) => {
    webservice
      .post(`v2/depara/carga/grades`, { produtos: products })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
