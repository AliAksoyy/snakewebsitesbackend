const express = require("express");
const { contactRouter } = require("./contactRoter");

const router = express.Router();

router.use("/contact", contactRouter);

module.exports.router = router;
