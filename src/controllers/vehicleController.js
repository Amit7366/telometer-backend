const { validationResult } = require("express-validator");
const Vehicle = require("../models/Vehicle");

const listVehicles = async (req, res) => {
  const vehicles = await Vehicle.find({ user: req.user._id }).sort({
    createdAt: -1,
  });

  return res.status(200).json({
    vehicles,
  });
};

const createVehicle = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    plate,
    type,
    fuel,
    registrationStatus,
    ownerName,
    ownerPhone,
    ownerNid,
    weeklyLimitLiters,
  } = req.body;

  const normalizedPlate = plate.toUpperCase().trim();

  const existing = await Vehicle.findOne({
    user: req.user._id,
    plate: normalizedPlate,
  });

  if (existing) {
    return res.status(409).json({
      message: "Vehicle already exists",
    });
  }

  const vehicle = await Vehicle.create({
    user: req.user._id,
    plate: normalizedPlate,
    type: type.trim(),
    fuel: fuel.trim(),
    registrationStatus: (registrationStatus || "Registered").trim(),
    ownerName: ownerName?.trim() || "",
    ownerPhone: ownerPhone?.trim() || "",
    ownerNid: ownerNid?.trim() || "",
    weeklyLimitLiters:
      typeof weeklyLimitLiters === "number" && weeklyLimitLiters > 0
        ? weeklyLimitLiters
        : 8.5,
    usedThisWeekLiters: 0,
    active: true,
  });

  return res.status(201).json({
    message: "Vehicle added successfully",
    vehicle,
  });
};

module.exports = {
  listVehicles,
  createVehicle,
};
