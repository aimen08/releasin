import axios from "axios";
import { action, thunk, Action, Thunk, debug } from "easy-peasy";
import { Response, Product } from "../models/Product";

const API_URL = "https://server-e3coi.ondigitalocean.app/api";

export interface ProductModel {
  items: Product[];
  addProduct: Action<ProductModel, Product[]>;
  postProduct: Thunk<ProductModel, Product>;
  editProduct: Thunk<ProductModel, Product>;
  request: Thunk<ProductModel, string | undefined>;
}

export const products: ProductModel = {
  items: [],
  addProduct: action((state, payload) => {
    state.items = payload;
  }),
  postProduct: thunk(async (actions, payload) => {
    try {
      await axios.post(`${API_URL}/addProduct`, payload, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      });
      actions.request();
    } catch (error) {
      console.log(error);
    }
  }),
  editProduct: thunk(async (actions, payload) => {
    try {
      await axios.post(`${API_URL}/editProduct`, payload, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      });
      actions.request();
    } catch (error) {
      console.log(error);
    }
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
