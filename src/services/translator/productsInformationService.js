import webservice from '../webservice';

export const download = response => {
  const filename = response.headers['content-disposition'].split('filename=')[1];
  const blob = new Blob([response.data], { type: 'application/*' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};
export const getProductsInformation = products => new Promise((resolve, reject) => {
  webservice
    .post('v2/depara/carga/ft', { produtos: products })
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
});
export const downloadProductsInformationXlsx = products => {
  webservice.defaults.responseType = 'arraybuffer';
  webservice
    .post('v2/depara/carga/ft/download', { produtos: products })
    .then(response => {
      this.download(response);
    })
    .catch(error => {
      console.log(
        '[ERROR -> productsInformationService.js -> downloadProductsInformationXlsx]  ',
        error
      );
    });
};
