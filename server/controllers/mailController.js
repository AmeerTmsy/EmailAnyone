const nodemailer = require('nodemailer');
const Message = require('../models/messageModel');

const getAllRequests = async (req, res) => {
  try {
    res.status(200).json({ message: 'All requests', data: [] })
  } catch (err) {
    res.status(200).json({ message: 'something went wrong', data: [] })
  }
}


const sendEmail = async (req, res) => {
  try {
    const { name, emailFrom, emailTo, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emailTo,
      subject: `Message from ${name || 'User'} with the ${emailFrom}`,
      text: message,
    };


    await transporter.sendMail(mailOptions);

    const mailRequest = new Message(req.body)
    await mailRequest.save()

    res.status(200).json({
      message: 'Email sent successfully',
      data: mailRequest
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
}

module.exports = {
  getAllRequests,
  sendEmail
}