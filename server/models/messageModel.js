const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  name: String,
  emailFrom: String,
  emailTo: String,
  message: String,
  sentAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', MessageSchema); 
module.exports = Message;