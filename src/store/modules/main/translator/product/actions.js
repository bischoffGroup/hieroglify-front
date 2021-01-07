import { getProducts } from '@/services';

export default {
  generateProducts(context, products) {
    context.commit('LOADING', true, { root: true });
    getProducts(products)
      .then((response) => {
        context.commit('PRODUCTS', response);
        context.commit('PRODUCTS_COLUMNS');
      })
      .catch()
      .finally(() => {
        context.commit('LOADING', false, { root: true });
      });
  },
};
