require("dotenv").config();
const connectDB = require("./config/db");
const seedPumpsIfEmpty = require("./config/seedPumps");
const app = require("./app");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is missing in .env");
    process.exit(1);
  }

  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is missing in .env");
    process.exit(1);
  }

  await connectDB();
  await seedPumpsIfEmpty();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
