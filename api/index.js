require("dotenv").config();
const app = require("../src/app");
const connectDB = require("../src/config/db");
const seedPumpsIfEmpty = require("../src/config/seedPumps");

let isConnected = false;
let pumpsSeeded = false;

module.exports = async (req, res) => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }

  if (!pumpsSeeded) {
    await seedPumpsIfEmpty();
    pumpsSeeded = true;
  }
  return app(req, res);
};