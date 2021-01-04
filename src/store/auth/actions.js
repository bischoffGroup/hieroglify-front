import { NAME_TOKEN } from "@/configs/config";
import webservice, { setToken } from "../../services/webservice";
import { webservice as web2, setToken as st2 } from "@/services";
const RESOURCE = "login";
export default {
  theme(context, theme) {
    localStorage.setItem(`theme-${localStorage.getItem(NAME_TOKEN)}`, theme);
  },
  login(context, credenciais) {
    context.commit("LOADING", true);
    return new Promise((resolve, reject) => {
      webservice
        .post(`${RESOURCE}`, credenciais)
        .then(response => {
          localStorage.setItem(NAME_TOKEN, response.data.success.token);
          setToken(response.data.success.token);
          context.commit("AUTH_USER_OK", response.data.success);
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          context.commit("LOADING", false);
        });
    });
  },
  logout(context) {
    localStorage.removeItem(NAME_TOKEN);
    context.commit("AUTH_USER_LOGOUT");
  },
  checkLogin(context) {
    const accessToken = localStorage.getItem(NAME_TOKEN);
    return new Promise((resolve, reject) => {
      if (!accessToken) {
        context.commit("AUTH_USER_LOGOUT");
        return reject();
      }
      setToken(accessToken);
      st2(accessToken);
      return webservice
        .get(`v1/get/details`)
        .then(response => {
          context.commit("AUTH_USER_OK", response.data.success);
          return resolve(response);
        })
        .catch(error => {
          localStorage.removeItem(NAME_TOKEN);
          context.commit("AUTH_USER_LOGOUT");
          return reject(error);
        });
    });
  }
};
