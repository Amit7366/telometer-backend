const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    plate: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    fuel: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    ownerName: {
      type: String,
      default: "",
      trim: true,
    },
    ownerPhone: {
      type: String,
      default: "",
      trim: true,
    },
    ownerNid: {
      type: String,
      default: "",
      trim: true,
    },
    registrationStatus: {
      type: String,
      default: "Registered",
      trim: true,
    },
    weeklyLimitLiters: {
      type: Number,
      default: 8.5,
    },
    usedThisWeekLiters: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

vehicleSchema.index({ user: 1, plate: 1 }, { unique: true });

module.exports = mongoose.model("Vehicle", vehicleSchema);
