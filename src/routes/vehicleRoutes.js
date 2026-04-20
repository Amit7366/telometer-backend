const express = require("express");
const { body } = require("express-validator");
const { protect } = require("../middleware/authMiddleware");
const {
  listVehicles,
  createVehicle,
} = require("../controllers/vehicleController");

const router = express.Router();

router.get("/", protect, listVehicles);

router.post(
  "/",
  protect,
  [
    body("plate").trim().notEmpty().withMessage("Vehicle number is required"),
    body("type").trim().notEmpty().withMessage("Vehicle type is required"),
    body("fuel").trim().notEmpty().withMessage("Fuel type is required"),
    body("weeklyLimitLiters")
      .optional()
      .isFloat({ gt: 0 })
      .withMessage("Weekly limit must be greater than zero"),
  ],
  createVehicle
);

module.exports = router;
