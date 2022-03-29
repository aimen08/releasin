import axios from "axios";
import { action, thunk, Action, Thunk, debug } from "easy-peasy";
import { ResponseTypes, ProductType } from "../models/ProductType";

const API_URL = "https://server-e3coi.ondigitalocean.app/api/types";

export interface ProductTypeModel {
  types: ProductType[];
  addProductType: Action<ProductTypeModel, ProductType[]>;
  request: Thunk<ProductTypeModel, string | undefined>;
}

export const productTypes: ProductTypeModel = {
  types: [],
  addProductType: action((state, payload) => {
    state.types = payload;
  }),
  request: thunk(async (actions, payload) => {
    try {
      const result = await axios.get<ResponseTypes>(`${API_URL}`);
      const types = result.data.result;
      actions.addProductType(types);
    } catch (error) {
      console.log(error);
    }
  }),
};
