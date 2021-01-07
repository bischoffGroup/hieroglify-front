import preloader from '@/store/modules/core/preloader/preloader/preloader';

export default {
  use: () => ({
    preloader: preloader.use()
  })
};
