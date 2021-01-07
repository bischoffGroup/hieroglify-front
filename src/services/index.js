import {
  getProductsInformation,
  downloadProductsInformationXlsx
} from '@/services/translator/productsInformationService';
import { getProducts } from '@/services/translator/productsService';
import { getProductsSize } from '@/services/translator/productsSize';
import { getGroupings } from '@/services/from/productsService';
import { getSuppliers } from '@/services/from/FromService';
import {
  getImportedProduct,
  createProductPrice
} from '@/services/import/products';
import { getNotImportedMaterial } from '@/services/import/materials';

import { getTasks, changeTaskStatus } from '@/services/system/SystemService';
import { webservice, setToken } from '@/services/api';

export {
  changeTaskStatus,
  getProductsInformation,
  getProducts,
  downloadProductsInformationXlsx,
  getNotImportedMaterial,
  createProductPrice,
  getImportedProduct,
  getSuppliers,
  getProductsSize,
  getTasks,
  getGroupings,
  webservice,
  setToken
};
