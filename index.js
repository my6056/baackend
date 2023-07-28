const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { connectDB } = require("./config/database");

app.use("/", require("./router"));

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server Running Successfully", ":", port);
  });
});
