const uniqid = require("uniqid");
const { ContactMessage } = require("../models/ContactMessageModel");

const addMessageService = async ({
  firstName,
  lastName,
  email,
  topic,
  message,
}) => {
  const contactMessage = new ContactMessage({
    id: uniqid(),
    firstName,
    lastName,
    email,
    topic,
    message,
  });
  await contactMessage.save();

  return { success: true, data: contactMessage };
};

module.exports = { addMessageService };
