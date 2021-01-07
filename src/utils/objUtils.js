// import Vue from 'vue';
// import { capitalizeFirstLetter } from '@/utils/StringsUtils';
// import { isArray, isString } from './ParametersRequiredUtils';
//
// export const getDeepValueByPath = (obj, path, opts = {}) => {
//   if (typeof obj === 'undefined' || obj === null) return;
//   if (typeof path === 'undefined' || path === null) return;
//   const localOps = {
//     separator: '.',
//     ...opts
//   };
//   if (!Array.isArray(path)) {
//     path = path.split(localOps.separator);
//   }
//   const key = path.shift();
//   let response = obj[key];
//   if (typeof response === 'undefined' || response === null) {
//     const patt = /(\[\d+])/;
//     if (patt.test(key)) {
//       const nArray = JSON.parse(key);
//       const index = nArray.pop();
//       if (index < obj.length) {
//         response = obj[index];
//       }
//     }
//   }
//   return !path.length ? response : getDeepValueByPath(response, path, localOps);
// };
//
// export const getDeepValueByPathVuelidate = (obj, path, opts = {}) => {
//   if (typeof obj === 'undefined' || obj === null) return;
//   if (typeof path === 'undefined' || path === null) return;
//   const localOps = {
//     separator: '.',
//     ...opts
//   };
//   if (!Array.isArray(path)) {
//     path = path.split(localOps.separator);
//   }
//   const key = path.shift();
//   if (typeof obj[key] === 'undefined' || obj[key] === null) {
//     const patt = /(\[\d+])/;
//     if (patt.test(key)) {
//       const nArray = JSON.parse(key);
//       const index = nArray.pop();
//       const item0 = obj.$each.$iter[index];
//       return getDeepValueByPathVuelidate(item0, path, localOps);
//     }
//   }
//   return !path.length ? obj[key] : getDeepValueByPathVuelidate(obj[key], path, localOps);
// };
//
// export const deleteDeepKeyByPath = (obj, path, opts) => {
//   if (typeof obj === 'undefined' || obj === null) return;
//   if (typeof path === 'undefined' || path === null) return;
//   const localOps = {
//     separator: '.',
//     ...opts
//   };
//   if (!Array.isArray(path)) {
//     path = path.split(localOps.separator);
//   }
//   const key = path.shift();
//   if (typeof obj[key] === 'undefined' || obj[key] === null) return;
//   if (!path.length) {
//     delete obj[key];
//   } else {
//     deleteDeepKeyByPath(obj[key], path, localOps);
//   }
// };
//
// export const stringIsArrayIndex = (key) => {
//   const patt = /(\[\d+])/; // [0] ou [1] ou [420] ou [n]
//   if (patt.test(key)) {
//     const nArray = JSON.parse(key);
//     const index = nArray.pop();
//     return {
//       index, status: true
//     };
//   } return {
//     status: false
//   };
// };
//
// export const setDeepValueByPath = (obj, path, value, lastPath = [], objOrigin = undefined, opts = {}) => {
//   try {
//     if (typeof obj === 'undefined' || obj === null) return;
//     if (typeof path === 'undefined' || path === null) return;
//     if (typeof objOrigin === 'undefined' || objOrigin === null) objOrigin = obj;
//     const localOps = {
//       separator: '.',
//       ...opts
//     };
//     if (!Array.isArray(path)) {
//       path = path.split(localOps.separator);
//     }
//     const key = path.shift();
//     let target = key;
//     if (typeof obj[target] === 'undefined' || obj[target] === null) {
//       const arrayIndex = stringIsArrayIndex(key);
//       if (arrayIndex.status) {
//         if (!Array.isArray(obj)) {
//           const lastPathCopy = [...lastPath];
//           const result = setDeepValueByPath(objOrigin, lastPathCopy, [], [], objOrigin, localOps);
//           const fakeTaget = lastPath[lastPath.length - 1];
//           obj = result.obj[fakeTaget];
//         }
//         target = arrayIndex.index;
//       }
//     }
//
//     if (!path.length) {
//       Vue.set(obj, target, value);
//       return { obj, value, origin: objOrigin };
//     }
//     if (typeof obj[target] === 'undefined' || obj[target] === null) {
//       Vue.set(obj, target, {});
//     }
//     lastPath.push(key);
//     return this.setDeepValueByPath(obj[target], path, value, lastPath, objOrigin, localOps);
//   } catch (error) {
//     console.error(`[ObjectsUtils][setDeepValueByPath][Error]${error}`);
//   }
// };
//
// export const isObject = (item) => (!!item && typeof item === 'object' && true && !Array.isArray(item));
//
// // export const mergeDeepVue = (target, ...sources) => {
// //   if (!sources.length) return target;
// //   const source = sources.shift();
// //
// //   if (isObject(target) && isObject(source)) {
// //     Object.keys(source).forEach(key => {
// //       if (isObject(source[key])) {
// //         if (!target[key]) Vue.set(target, key, {});
// //         this.mergeDeep(target[key], source[key]);
// //       } else {
// //         Vue.set(target, key, source[key]);
// //       }
// //     });
// //     // for (const key in source) {
// //     //   if (isObject(source[key])) {
// //     //     if (!target[key]) Vue.set(target, key, {});
// //     //     this.mergeDeep(target[key], source[key]);
// //     //   } else {
// //     //     Vue.set(target, key, source[key]);
// //     //   }
// //     // }
// //   }
// //   return this.mergeDeep(target, ...sources);
// // };
//
// export const mergeDeep = (target, ...sources) => {
//   if (!sources.length) return target;
//   const source = sources.shift();
//
//   if (isObject(target) && isObject(source)) {
//     Object.keys(source).forEach(key => {
//       if (isObject(source[key])) {
//         if (!target[key]) Object.assign(target, { [key]: {} });
//         mergeDeep(target[key], source[key]);
//       } else {
//         Object.assign(target, { [key]: source[key] });
//       }
//     });
//     // for (const key in source) {
//     //   if (isObject(source[key])) {
//     //     if (!target[key]) Object.assign(target, { [key]: {} });
//     //     mergeDeep(target[key], source[key]);
//     //   } else {
//     //     Object.assign(target, { [key]: source[key] });
//     //   }
//     // }
//   }
//
//   return mergeDeep(target, ...sources);
// };
//
// export function mergeDeepFromArray(array) {
//   isArray(array, '[ObjectsUtils][mergeDeepFromArray] Parametro array tem que ser um array de objects');
//   return array.reduce((total, currentValue) => mergeDeep(total, currentValue), {});
// }
//
// // export const mergeDeepModel = (target, ...sources) => {
// //   if (!sources.length) return target;
// //   const source = sources.shift();
// //
// //   if (isObject(target) && isObject(source)) {
// //     Object.keys(source).forEach(key => {
// //       if (isObject(source[key])) {
// //         if (!target[key]) Object.assign(target, { [key]: {} });
// //         mergeDeepModel(target[key], source[key]);
// //       }
// //       if (Array.isArray(source[key])) {
// //         if (typeof target[key] === 'undefined' || target[key].length <= 0) {
// //           Object.assign(target, { [key]: source[key] });
// //         } else {
// //           const sArray = source[key];
// //           if (sArray.length > 0) {
// //             const tArray = target[key];
// //             const mapDireita = sArray.map(e => {
// //               const t = tArray.find(f => e.id === f.id || f.id === 'new');
// //               if (t) {
// //                 if (t.id === 'new') {
// //                   t.id = uuidv4();
// //                 }
// //                 return mergeDeepModel(t, e);
// //               }
// //               return e;
// //             });
// //
// //             Object.assign(target, { [key]: mapDireita });
// //           }
// //         }
// //       } else {
// //         Object.assign(target, { [key]: source[key] });
// //       }
// //     });
// //     // for (const key in source) {
// //     //   if (isObject(source[key])) {
// //     //     if (!target[key]) Object.assign(target, { [key]: {} });
// //     //     mergeDeepModel(target[key], source[key]);
// //     //   }
// //     //   if (Array.isArray(source[key])) {
// //     //     if (typeof target[key] === 'undefined' || target[key].length <= 0) {
// //     //       Object.assign(target, { [key]: source[key] });
// //     //     } else {
// //     //       const sArray = source[key];
// //     //       if (sArray.length > 0) {
// //     //         const tArray = target[key];
// //     //         const mapDireita = sArray.map(e => {
// //     //           const t = tArray.find(f => e.id === f.id || f.id === 'new');
// //     //           if (t) {
// //     //             if (t.id === 'new') {
// //     //               t.id = uuidv4();
// //     //             }
// //     //             return mergeDeepModel(t, e);
// //     //           }
// //     //           return e;
// //     //         });
// //     //
// //     //         Object.assign(target, { [key]: mapDireita });
// //     //       }
// //     //     }
// //     //   } else {
// //     //     Object.assign(target, { [key]: source[key] });
// //     //   }
// //     // }
// //   }
// //
// //   return mergeDeepModel(target, ...sources);
// // };
//
// export const fromFieldPathToVirtual = (fieldPath, opts = {}) => {
//   isString(fieldPath, '[ObjectsUtils][fromFieldPathToVirtual] Parametro fieldPath precisa ser string');
//   const localOps = { separator: '.', ...opts };
//   let path;
//   if (!Array.isArray(fieldPath)) {
//     path = fieldPath.split(localOps.separator);
//   }
//   path = path.map((e, i) => {
//     if (i > 0) {
//       return capitalizeFirstLetter(e);
//     }
//     return e;
//   });
//   return `_${path.join('')}`;
// };
// export const detach = (target) => {
//   if (!isObject(target)) {
//     throw new Error('[ObjectsUtils][detach] target precisa ser um objeto');
//   }
//   return JSON.parse(JSON.stringify(target));
// };
//
// export const getDeepDif = (newObj) => ({ ...newObj });
