import mongoose from "mongoose";

const Attribute = new mongoose.Schema(
  {
    name: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    type: { type: mongoose.Schema.Types.Mixed },
    attribute_value: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AttributeValueData",
      autopopulate: true,
    },
  },
  { collection: "releasin_attribute" }
);

Attribute.plugin(require("mongoose-autopopulate"));
const model = mongoose.model("AttributeData", Attribute);

export default model;
