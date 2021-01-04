import { webservice } from "@/services";

export const getProducts = products => {
  return new Promise((resolve, reject) => {
    webservice
      .post(`v2/depara/carga/artigos`, { produtos: products })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
