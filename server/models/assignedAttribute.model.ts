import mongoose from "mongoose";

const AssignedAttribute = new mongoose.Schema(
  {
    attribute_value: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AttributeValueData",
    },
  },
  { collection: "releasin_assigned_attribute" }
);

const model = mongoose.model("AssignedAttributeData", AssignedAttribute);

export default model;
