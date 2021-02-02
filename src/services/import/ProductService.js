import webservice from '../webservice';

const version = 'v2';
const prefix = 'products';

export async function getImportableProducts(valid) {
  return webservice.get(`${version}/${prefix}/importableProducts/${valid}`).then(response => response.data);
}
