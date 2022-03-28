import mongoose from "mongoose";

const Product = new mongoose.Schema(
  {
    name: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    product_type: {
      type: mongoose.Types.ObjectId,
      ref: "ProductTypeData",
      autopopulate: true,
    },
    assigned_attributes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AssignedAttributeData",
        autopopulate: true,
      },
    ],
  },
  { collection: "releasin_product" }
);

Product.plugin(require("mongoose-autopopulate"));

const model = mongoose.model("ProductData", Product);

export default model;
