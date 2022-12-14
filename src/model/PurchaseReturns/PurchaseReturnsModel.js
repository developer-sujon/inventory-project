//External Lib Import
const { model, Schema } = require("mongoose");

const PurchaseReturnsSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ProductId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    PurchaseReturnsSummaryId: {
      type: Schema.Types.ObjectId,
      ref: "PurchaseReturnsSummary",
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
    UnitCost: {
      type: Number,
      required: true,
    },
    Total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const PurchaseReturnsModel = new model("PurchaseReturn", PurchaseReturnsSchema);
module.exports = PurchaseReturnsModel;
