const expressAsyncHandler = require("express-async-handler");
const { addMessageService } = require("../services/contactServices");

class ContectController {
  static addMessage = expressAsyncHandler(async (req, res) => {
    const { firstName, lastName, email, topic, message, checked } = req.body;

    const response = await addMessageService({
      firstName,
      lastName,
      email,
      topic,
      message,
      checked,
    });
    res.json(response);
  });
}

module.exports.ContectController = ContectController;
