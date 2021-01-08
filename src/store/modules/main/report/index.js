import changeStatusProducts from '@/store/modules/main/report/changeStatusProducts/changeStatusProducts';

export default {
  use: () => ({
    changeStatusProducts: changeStatusProducts.use({})
  })
};
