import mongoose from "mongoose";

const AttributeValue = new mongoose.Schema(
  {
    name: { type: String, required: true },
    boolean: { type: Boolean },
    date: { type: Date },
  },
  { collection: "releasin_attribute_value" }
);

const model = mongoose.model("AttributeValueData", AttributeValue);

export default model;
