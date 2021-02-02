import products from './products/products';

export default {
  use: () => ({
    importableProducts: products.use()
  })
};
