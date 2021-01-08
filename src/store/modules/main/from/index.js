import suppliers from '@/store/modules/main/from/suppliers/suppliers';
import categories from '@/store/modules/main/from/categories/categories';
import collections from '@/store/modules/main/from/collections/collections';
import colors from '@/store/modules/main/from/colors/colors';
import grids from '@/store/modules/main/from/grids/grids';
import launchies from '@/store/modules/main/from/launchies/launchies';
import materialClassifications from '@/store/modules/main/from/materialClassifications/materialClassifications';
import pricings from '@/store/modules/main/from/pricings/pricings';
import productClassifications from '@/store/modules/main/from/productClassifications/productClassifications';
import sizes from '@/store/modules/main/from/sizes/sizes';

export default {
  use: () => ({
    suppliers: suppliers.use({}),
    categories: categories.use({}),
    collections: collections.use({}),
    colors: colors.use({}),
    grids: grids.use({}),
    launchies: launchies.use({}),
    materialClassifications: materialClassifications.use({}),
    pricings: pricings.use({}),
    productClassifications: productClassifications.use({}),
    sizes: sizes.use({}),
  })
};
