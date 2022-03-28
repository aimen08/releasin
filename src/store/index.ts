import { createStore } from "easy-peasy";
import { ProductModel, products } from "./product.model";

export interface StoreModel {
  products: ProductModel;
}

const model = {
  products: products,
};

const store = createStore(model, { devTools: true });

export default store;
