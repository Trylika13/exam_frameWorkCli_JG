import { reactive } from "vue";
import DB from "@/services/DB";

const products = reactive([]);
const init = async (apiURL) => {
  DB.setApiURL(apiURL);
  products.splice(products.length, 0, ...(await DB.findAll()));
};
export const productsStore = reactive({
  init,
  products,
});
