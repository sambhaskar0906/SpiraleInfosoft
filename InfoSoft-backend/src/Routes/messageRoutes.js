// routes/inquiryRoutes.js
const express = require("express");
const router = express.Router();
const inquiryController = require("../Controller/MessageController");

// POST route for creating an inquiry
router.post("/inquiries", inquiryController.createInquiry);

module.exports = router;
