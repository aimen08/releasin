import mongoose from "mongoose";

const ProductType = new mongoose.Schema(
  {
    name: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    attributes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AttributeData",
        autopopulate: true,
      },
    ],
  },
  { collection: "releasin_product_type" }
);
ProductType.plugin(require("mongoose-autopopulate"));
const model = mongoose.model("ProductTypeData", ProductType);

export default model;
