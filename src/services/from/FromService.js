import webservice from '../webservice';

const version = 'v2';
const prefix = 'commonDataFormat';
export async function getSuppliers() {
  return webservice.get(`${version}/${prefix}/productSuppliers`).then(response => response.data);
}
export async function getGrids() {
  return webservice.get(`${version}/${prefix}/productGrids`).then(response => response.data);
}
export async function getColors() {
  return webservice.get(`${version}/${prefix}/productColors`).then(response => response.data);
}
export async function getCategories() {
  return webservice.get(`${version}/${prefix}/productCategories`).then(response => response.data);
}
export async function getProductClassifications() {
  return webservice.get(`${version}/${prefix}/productClassifications`).then(response => response.data);
}
export async function getMaterialClassification() {
  return webservice.get(`${version}/${prefix}/materialClassifications`).then(response => response.data);
}
export async function getCollections() {
  return webservice.get(`${version}/${prefix}/productCollections`).then(response => response.data);
}
export async function getLaunchies() {
  return webservice.get(`${version}/${prefix}/productLaunchies`).then(response => response.data);
}
export async function getPricings() {
  return webservice.get(`${version}/${prefix}/pricingTables`).then(response => response.data);
}
export async function getSizes() {
  return webservice.get(`${version}/${prefix}/productSizes`).then(response => response.data);
}
