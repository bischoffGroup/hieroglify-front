import notifications from '@/store/modules/core/notifications/notification/notifications';

export default {
  use: () => ({
    notifications: notifications.use()
  })
};
