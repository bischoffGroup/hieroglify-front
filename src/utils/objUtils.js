import Vue from "vue";

export const stringIsArrayIndex = key => {
  const patt = /(\[\d+])/; // [0] ou [1] ou [420] ou [n]
  if (patt.test(key)) {
    const nArray = JSON.parse(key);
    const index = nArray.pop();
    return {
      index,
      status: true
    };
  }
  return {
    status: false
  };
};
export const setDeepValueByPath = (
  obj,
  path,
  value,
  lastPath = [],
  objOrigin = undefined,
  opts = {}
) => {
  try {
    if (typeof obj === "undefined" || obj === null) return;
    if (typeof path === "undefined" || path === null) return;
    if (typeof objOrigin === "undefined" || objOrigin === null) objOrigin = obj;
    const localOps = {
      separator: ".",
      ...opts
    };
    if (!Array.isArray(path)) {
      path = path.split(localOps.separator);
    }
    const key = path.shift();
    let target = key;
    if (typeof obj[target] === "undefined" || obj[target] === null) {
      const arrayIndex = stringIsArrayIndex(key);
      if (arrayIndex.status) {
        if (!Array.isArray(obj)) {
          const lastPathCopy = [...lastPath];
          const result = setDeepValueByPath(
            objOrigin,
            lastPathCopy,
            [],
            [],
            objOrigin,
            localOps
          );
          const fakeTaget = lastPath[lastPath.length - 1];
          obj = result.obj[fakeTaget];
        }
        target = arrayIndex.index;
      }
    }

    if (!path.length) {
      Vue.set(obj, target, value);
      return { obj, value, origin: objOrigin };
    } else {
      if (typeof obj[target] === "undefined" || obj[target] === null) {
        Vue.set(obj, target, {});
      }
      lastPath.push(key);
      return setDeepValueByPath(
        obj[target],
        path,
        value,
        lastPath,
        objOrigin,
        localOps
      );
    }
  } catch (error) {
    console.error(`[ObjectsUtils][setDeepValueByPath][Error]${error}`);
  }
};
