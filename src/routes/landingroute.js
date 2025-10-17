const express = require("express");
const router = express.Router();

router.get("api/contact/getcontactpage", landingController.get);
router.get("api/contact/getcontactpage", landingController.get);
const {contactController} = require("../controller/contactcontroller");

// contactpage 
router.post("api/contact/createpage", contactController.createContactPage);
router.get("api/contact/getcontactpage", contactController.getContactPage);

// contactfaq 
router.post("api/contact/createfaq", contactController.contactFaq);