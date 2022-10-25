//External import
const { model, Schema } = require("mongoose");

const SuppliersSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    SupplierName: {
      type: String,
      required: true,
    },
    SupplierEmail: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (prop) => `Invalid Email Address: ${prop.value}`,
      },
      unique: true,
    },
    SupplierPhone: {
      type: String,
      required: true,
      unique: true,
    },
    SupplierAddress: String,
    SupplierAvatar: {
      type: String,
      required: true,
      default:
        "data:image/jpeg;base64,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",
    },
  },
  { timestamps: true, versionKey: false },
);

const SuppliersModel = new model("Supplier", SuppliersSchema);
module.exports = SuppliersModel;
