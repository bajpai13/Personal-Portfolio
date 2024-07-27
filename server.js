// server.js
require("dotenv").config(); // Load environment variables at the very beginning
const express = require("express");
const dbConfig = require("./config/dbConfig");

const app = express();

const portfolioRoute = require("./routes/portfolioRoute");
app.use(express.json());
app.use("/api/portfolio",portfolioRoute);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`); 
});
