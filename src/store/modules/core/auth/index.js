import autentication from './auth/autentication';

export default {
  use: () => ({
    auth: autentication.use()
  })
};
