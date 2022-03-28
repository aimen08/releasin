export interface ResponseTypes {
  result: ProductType[];
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

export interface AttributeValue {
  _id: string;
  name: string;
  boolean: boolean;
  date: Date;
  __v: number;
}
