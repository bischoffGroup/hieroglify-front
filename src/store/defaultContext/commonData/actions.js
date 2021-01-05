import { GENERIC_VALUE_FROM_PATH_SET } from "@/store/types/defaultContext/actionTypes";

export default {
  [GENERIC_VALUE_FROM_PATH_SET]: async function(
    { commit },
    payload = { path: undefined, value: undefined }
  ) {
    commit("setValueFromPath", payload);
  }
};
