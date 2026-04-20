const express = require("express");
const { listPumps } = require("../controllers/pumpController");

const router = express.Router();

router.get("/", listPumps);

module.exports = router;
