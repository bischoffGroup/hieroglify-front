import materials from './materials/materials';
import products from './products/products';

export default {
  use: () => ({
    importableProducts: products.use(),
    importableMaterials: materials.use()
  })
};
