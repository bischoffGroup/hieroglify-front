import suppliers from '@/store/modules/main/from/suppliers/suppliers';

export default {
  use: () => ({
    suppliers: suppliers.use({}),
  })
};
