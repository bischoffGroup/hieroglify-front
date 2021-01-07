import from from '@/store/modules/main/from';
import system from '@/store/modules/main/system';
import auth from '@/store/modules/core/auth';
import notifications from '@/store/modules/core/notifications';
import preloader from '@/store/modules/core/preloader';

export const storeMainFromModule = { modules: { ...from.use() }, namespaced: true };
export const storeMainSystemModule = { modules: { ...system.use() }, namespaced: true };

export const storeCoreAuthModule = { modules: { ...auth.use() } };
export const storeCoreNotificationsModule = { modules: { ...notifications.use() } };
export const storeCorePreloaderModule = { modules: { ...preloader.use() } };
