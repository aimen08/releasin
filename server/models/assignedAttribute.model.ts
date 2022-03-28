import mongoose from "mongoose";

const AssignedAttribute = new mongoose.Schema(
  {
    attribute_value: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AttributeValueData",
      autopopulate: true,
    },
  },
  { collection: "releasin_assigned_attribute" }
);
AssignedAttribute.plugin(require("mongoose-autopopulate"));
const model = mongoose.model("AssignedAttributeData", AssignedAttribute);

export default model;
