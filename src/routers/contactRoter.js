const express = require("express");
const { ContectController } = require("../controllers/ContactController");

const contactRouter = express.Router();

contactRouter.route("/").post(ContectController.addMessage);

module.exports.contactRouter = contactRouter;
