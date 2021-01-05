import { webservice } from "@/services";
import { hateoas } from "@/services/tools";
const version = "v2";
const prefix = "common_data_format";
export async function getSuppliers() {
  return webservice
    .get(`${version}/${prefix}/productSuppliers`)
    .then(response => {
      return hateoas("suppliers", response);
    });
}
