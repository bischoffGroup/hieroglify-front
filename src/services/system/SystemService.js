import webservice from '../webservice';

export async function getTasks() {
  return webservice.get('v2/system/tasks').then(response => response.data);
}
export const changeTaskStatus = async(taskUUID, status) => webservice.post(`v2/system/tasks/status/${taskUUID}/${status}`);
