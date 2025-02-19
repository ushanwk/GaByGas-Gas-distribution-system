const express = require('express');
const dotenv = require("dotenv");
const transporter = require('../util/Mailer');
dotenv.config();

const sendMail = async (req, res) => {
    const { to, subject, text } = req.body;
  
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      text,
    };
  
    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent', info });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  };
  
  module.exports = { sendMail };