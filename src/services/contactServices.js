const uniqid = require("uniqid");
const { ContactMessage } = require("../models/ContactMessageModel");

const addMessageService = async ({
  firstName,
  lastName,
  email,
  topic,
  message,
  messageId,
}) => {
  const contactMessage = new ContactMessage({
    id: uniqid(),
    firstName,
    lastName,
    email,
    topic,
    message,
    messageId,
  });
  await contactMessage.save();

  return { success: true, data: contactMessage };
};

module.exports = { addMessageService };
