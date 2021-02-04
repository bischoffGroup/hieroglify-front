import webservice from '../webservice';

const version = 'v2';
const prefix = 'reports';

export async function getChageStatusProducts() {
  return webservice.get(`${version}/${prefix}/productStatusChange`).then(response => response.data);
}
