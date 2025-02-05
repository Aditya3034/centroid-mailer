// app.js (Express Server)

const express = require("express");
require("dotenv").config();
const cors = require('cors');
const { centroidMailer } = require("./api/services/centroidmailer");

const fileUpload = require('express-fileupload');
const app = express();

// Allow all origins for CORS
const corsOptions = {
  origin: '*', // Allows all origins
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Use CORS with options
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Middleware for file uploads
app.use(fileUpload({ useTempFiles: true }));

// Express JSON and URL-encoded data middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Contact form route

app.post("/api/centroid/contact", async (req, res) => {
  const { frmname, frmmobile, frmcourse, frmcomment, frmcheck } = req.body;

  try {
    const result = await centroidMailer({
      name: frmname,
      course: frmcourse,
      mobile: frmmobile,
      comment: frmcomment,
      checkbox: frmcheck ? "Yes" : "No" // Handle checkbox for "Do not receive further emails"
    });
    
    if (result.success) {
      res.status(200).send("Email sent successfully!");
    } else {
      res.status(500).send(`Error: ${result.response}`);
    }
  } catch (error) {
    res.status(500).send(`Error sending email: ${error.message}`);
  }
});
// Google Reviews route


// A fallback route to handle any other GET requests
app.get('*', (req, res) => {
  res.status(200).json({ message: 'Welcome to centroid mailer' });
});

module.exports = app;
