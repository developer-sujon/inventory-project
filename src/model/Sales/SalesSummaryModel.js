//External Lib Import
const { model, Schema } = require("mongoose");

const SalesSummarySchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    CustomerId: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
    Discount: Number,
    VatTax: Number,
    ShippingCoast: Number,
    OtherCoast: Number,
    GrandTotal: Number,
    Note: String,
  },
  { timestamps: true, versionKey: false },
);

const SalesSummaryModel = new model("SalesSummary", SalesSummarySchema);
module.exports = SalesSummaryModel;
