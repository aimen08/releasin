import { createStore } from "easy-peasy";
import { ProductModel, products } from "./product.model";
import { ProductTypeModel, productTypes } from "./product_type.model";

export interface StoreModel {
  products: ProductModel;
  productTypes: ProductTypeModel;
}

const model = {
  products: products,
  productTypes: productTypes,
};

const store = createStore(model, { devTools: true });

export default store;
