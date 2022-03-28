export interface Response {
  result: Product[];
}

export interface Product {
  _id: string;
  name: string;
  product_type: ProductType;
  assigned_attributes: AssignedAttribute[];
  created_at: Date;
  __v: number;
}

export interface AssignedAttribute {
  _id: string;
  attribute_value: AttributeValue;
  __v: number;
}

export interface AttributeValue {
  _id: string;
  name: string;
  boolean: boolean;
  date: Date;
  __v: number;
}

export interface ProductType {
  _id: string;
  name: string;
  attributes: Attribute[];
  created_at: Date;
  __v: number;
}

export interface Attribute {
  _id: string;
  name: string;
  type: string;
  attribute_value: AttributeValue;
  created_at: Date;
  __v: number;
}
