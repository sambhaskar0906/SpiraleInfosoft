const express = require("express");
const upload = require("../Middlewear/AppilicationMiddlewear");
const applicationController = require("../Controller/applicationController");
const router = express.Router();

router.post("/apply", upload, applicationController.submitApplication);

module.exports = router;
