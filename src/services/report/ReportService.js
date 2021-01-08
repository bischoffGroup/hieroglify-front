import { hateoas } from '@/services/tools';
import webservice from '../webservice';

const version = 'v2';
const prefix = 'report';

export async function getChageStatusProducts() {
  return webservice
    .get(`${version}/${prefix}/productStatusChange`)
    .then(response => hateoas('productsStatusChange', response));
}
