import { webservice } from "@/services";

export const download = response => {
  let filename = response.headers["content-disposition"].split("filename=")[1];
  let blob = new Blob([response.data], { type: "application/*" });
  let link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};
export const getProductsInformation = products => {
  return new Promise((resolve, reject) => {
    webservice
      .post(`v2/depara/carga/ft`, { produtos: products })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export const downloadProductsInformationXlsx = products => {
  webservice.defaults.responseType = "arraybuffer";
  webservice
    .post(`v2/depara/carga/ft/download`, { produtos: products })
    .then(response => {
      this.download(response);
    })
    .catch(error => {
      console.log(
        "[ERROR -> productsInformationService.js -> downloadProductsInformationXlsx]  ",
        error
      );
    });
};
