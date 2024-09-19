const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { router } = require("./routers");

dotenv.config({ path: path.join(__dirname, "config", ".env") });

const app = express();
const PORT = 5000;

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(router);

mongoose.connection.on("connected", () => {
  console.log("mongodb connection succesfull");
  startServer();
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log("app started on http://localhost:" + PORT);
  });
};

mongoose.connect(process.env.MONGODB_URI);
