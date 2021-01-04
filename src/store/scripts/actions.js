import webservice from "../../services/webservice";
export default {
  loadScriptsName(context) {
    context.commit("LOADING", true);
    return new Promise((resolve, reject) => {
      webservice
        .get(`v1/subprogramas/list`)
        .then(response => {
          context.commit("CONTEXTOS_LOAD", response.data.success);
          resolve(response.data.success);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          context.commit("LOADING", false);
        });
    });
  },
  loadScript(context, script) {
    context.commit("LOADING", true);
    return new Promise((resolve, reject) => {
      webservice
        .get(`v1/subprogramas/get/` + script)
        .then(response => {
          resolve(response.data.success);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          context.commit("LOADING", false);
        });
    });
  },
  validateScript(context, script) {
    context.commit("LOADING", true);
    return new Promise((resolve, reject) => {
      webservice
        .post(`v1/subprogramas/compile`, { script: script })
        .then(response => {
          resolve(response.data.success);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          context.commit("LOADING", false);
        });
    });
  },
  saveScript(context, script) {
    context.commit("LOADING", true);
    return new Promise((resolve, reject) => {
      webservice
        .post(`v1/subprogramas/save`, {
          script: script.script,
          code: script.code
        })
        .then(response => {
          resolve(response.data.success);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          context.commit("LOADING", false);
        });
    });
  }
};
