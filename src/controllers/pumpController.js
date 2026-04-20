const Pump = require("../models/Pump");

const listPumps = async (req, res) => {
  const pumps = await Pump.find({}).sort({ createdAt: -1 });
  return res.status(200).json({ pumps });
};

module.exports = { listPumps };
