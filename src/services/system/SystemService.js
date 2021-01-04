import { webservice } from "@/services";
import { hateoas } from "@/services/tools";
export async function getTasks() {
  return webservice.get(`v2/system/tasks`).then(response => {
    return hateoas("tasks", response);
  });
}
export const changeTaskStatus = async (taskUUID, status) => {
  return webservice.post(`v2/system/tasks/status/${taskUUID}/${status}`);
};
