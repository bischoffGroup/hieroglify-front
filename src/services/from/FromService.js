import { hateoas } from '@/services/tools';
import webservice from '../webservice';

const version = 'v2';
const prefix = 'common_data_format';
export async function getSuppliers() {
  return webservice
    .get(`${version}/${prefix}/productSuppliers`)
    .then(response => hateoas('productSuppliers', response));
}
export async function getGrids() {
  return webservice
    .get(`${version}/${prefix}/productGrids`)
    .then(response => hateoas('productGrids', response));
}
export async function getColors() {
  return webservice
    .get(`${version}/${prefix}/productColors`)
    .then(response => hateoas('productColors', response));
}
export async function getCategories() {
  return webservice
    .get(`${version}/${prefix}/productCategories`)
    .then(response => hateoas('productCategories', response));
}
export async function getProductClassifications() {
  return webservice
    .get(`${version}/${prefix}/productClassifications`)
    .then(response => hateoas('productClassifications', response));
}
export async function getMaterialClassification() {
  return webservice
    .get(`${version}/${prefix}/materialClassifications`)
    .then(response => hateoas('materialClassifications', response));
}
export async function getCollections() {
  return webservice
    .get(`${version}/${prefix}/productCollections`)
    .then(response => hateoas('productCollections', response));
}
export async function getLaunchies() {
  return webservice
    .get(`${version}/${prefix}/productLaunchies`)
    .then(response => hateoas('productLaunchies', response));
}
export async function getPricings() {
  return webservice
    .get(`${version}/${prefix}/pricingTables`)
    .then(response => hateoas('productPricings', response));
}
export async function getSizes() {
  return webservice
    .get(`${version}/${prefix}/productSizes`)
    .then(response => hateoas('productSizes', response));
}
