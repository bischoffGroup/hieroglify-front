import { hateoas } from '@/services/tools';
import webservice from '../webservice';

const version = 'v2';
const prefix = 'common_data_format';
export async function getSuppliers() {
  return webservice
    .get(`${version}/${prefix}/productSuppliers`)
    .then(response => hateoas('suppliers', response));
}
