const mongoose = require("mongoose");

const pumpSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    isOpen: { type: Boolean, default: true },
    fuels: [{ type: String, required: true, trim: true }],
    txnToday: { type: Number, default: null },
    license: { type: String, required: true, trim: true, unique: true },
    hoursLabel: { type: String, required: true, trim: true },
    pricesTakaPerLiter: {
      type: Map,
      of: Number,
      default: {},
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pump", pumpSchema);
