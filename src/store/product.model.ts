import axios from "axios";
import { action, thunk, Action, Thunk, debug } from "easy-peasy";
import { Response, Product } from "../models/Product";

const API_URL = "http://localhost:1300/api";

export interface ProductModel {
  items: Product[];
  addProduct: Action<ProductModel, Product[]>;
  request: Thunk<ProductModel, string | undefined>;
}

export const products: ProductModel = {
  items: [],
  addProduct: action((state, payload) => {
    state.items = payload;
    console.log(debug(state.items[0]));
  }),
  request: thunk(async (actions, payload) => {
    try {
      const result = await axios.get<Response>(`${API_URL}`);
      const products = result.data.result;
      actions.addProduct(products);
    } catch (error) {
      console.log(error);
    }
  }),
};
