// import { getAPI } from "./api/baseService";
// import { PRODUCT_URL } from "./api/endPoints";

import { PRODUCT_URL } from "../../../shared/services/api/endPoints";
import { getAPI } from "../../../shared/services/api/baseService";



export async function productList(limit) {

    try {
        const url = `${PRODUCT_URL}?limit=${limit}`
        let result = await getAPI(url);
        return result.products
    } catch (error) {
        throw error
    }
}