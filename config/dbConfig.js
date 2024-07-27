// config/dbConfig.js
const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("connection error");
});

connection.on("connected", () => {
  console.log("connected to database");
});

module.exports = mongoose;
