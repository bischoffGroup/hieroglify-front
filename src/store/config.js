import from from '@/store/modules/main/from';
import importable from '@/store/modules/main/import';
import system from '@/store/modules/main/system';
import auth from '@/store/modules/core/auth';
import notifications from '@/store/modules/core/notifications';
import preloader from '@/store/modules/core/preloader';
import report from '@/store/modules/main/report';

export const storeMainFromModule = { modules: { ...from.use() }, namespaced: true };
export const storeMainImportModule = { modules: { ...importable.use() }, namespaced: true };
export const storeMainSystemModule = { modules: { ...system.use() }, namespaced: true };
export const storeMainReportModule = { modules: { ...report.use() }, namespaced: true };

export const storeCoreAuthModule = { modules: { ...auth.use() } };
export const storeCoreNotificationsModule = { modules: { ...notifications.use() } };
export const storeCorePreloaderModule = { modules: { ...preloader.use() } };
