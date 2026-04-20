const Pump = require("../models/Pump");
const pumpSeedData = require("../data/pumpSeedData");

const seedPumpsIfEmpty = async () => {
  const count = await Pump.countDocuments();
  if (count > 0) {
    return;
  }

  await Pump.insertMany(pumpSeedData);
  console.log(`Seeded ${pumpSeedData.length} pumps`);
};

module.exports = seedPumpsIfEmpty;
