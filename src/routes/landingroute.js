const express = require("express");
const router = express.Router();


const {contactController} = require("../controller/contactcontroller");
const { aboutcontroller } = require("../controller/aboutcontroller");
const { careercontroller } = require("../controller/careercontroller");
const { developercontroller } = require("../controller/developercontroller");
const { pricingcontroller } = require("../controller/pricingcontroller");


/* ----------------------------- contact routes starts here ----------------------------- */

// contactpage 
router.post("api/contact/createpage", contactController.createContactPage);
router.get("api/contact/getcontactpage", contactController.getContactPage);

// contactfaq 
router.post("api/contact/createfaq", contactController.contactFaq);
router.get("api/contact/getfaq", contactController.getContactFaq);

// contact Form
router.post("api/contact/createform", contactController.contactForm);
router.get("api/contact/getform", contactController.getContactForm);

// contact support 
router.post("api/contact/createsupport", contactController.contactSupport);
router.get("api/contact/getsupport", contactController.getContactSupport);

// contact official location

router.post("api/contact/createlocation", contactController.contactofficial);
router.get("api/contact/getlocation", contactController.getContactofficial);
/* ------------------------ contact routes ends here ------------------------ */

/* -------------------------------------------------------------------------- */
/*                          about section starts here                         */
/* -------------------------------------------------------------------------- */

// about sections 
router.post("api/about/createaboutsection", aboutcontroller.createaboutsecticon);
router.get("api/about/getaboutsection", aboutcontroller.getaboutSection);


// about stats 
router.post("api/about/createaboutstat", aboutcontroller.aboutStat);
router.get("api/about/getaboutstat", aboutcontroller.getaboutStat);
/* -------------------------------------------------------------------------- */
/*                           about section ends here                          */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                         career setcion starts here                         */
/* -------------------------------------------------------------------------- */

// career page 
router.post("api/career/createcareerpage", careercontroller.createCareerpage);
router.get("api/career/getcareerpage", careercontroller.getcareerPage);

// career benefits 
router.post("api/career/createcareerbenefit", careercontroller.createCareerBenefits);
router.get("api/career/getcareerbenefit", careercontroller.getCareerBenefits);

// career job listing
router.post("api/career/createcareerjoblist", careercontroller.careerJoblist);
router.get("api/career/getcareerjoblist", careercontroller.getcareerJoblist);


/* -------------------------------------------------------------------------- */
/*                          career section ends here                          */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                        developers routes starts here                       */
/* -------------------------------------------------------------------------- */

// page sections 
router.post("api/developers/createdeveloperspage", developercontroller.createdeveloperpage);
router.get("api/developers/getdeveloperspage", developercontroller.getdeveloperPage);

// SDK 
router.post("api/developers/createdevelopersdk", developercontroller.developerSdk);
router.get("api/developers/getdevelopersdk", developercontroller.getdeveloperSdk);

// endpoint 
router.post("api/developers/createdevelopersbenefit", developercontroller.createdeveloperEndpoint);
router.get("api/developers/getdevelopersbenefit", developercontroller.getdeveloperEndpoint);

/* -------------------------------------------------------------------------- */
/*                         developers routes ends here                        */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                       pricing page routes starts here                      */
/* -------------------------------------------------------------------------- */

// pricing section 
router.post("api/pricing/pricingsection", pricingcontroller.createPricingSection);
router.get("api/pricing/pricingsection", pricingcontroller.getPrisingsections);

// pricing addon
router.post("api/pricing/pricingaddon", pricingcontroller.createPricingaddon);
router.get("api/pricing/pricingaddon", pricingcontroller.getPricingaddon);

// pricing faq 
router.post("api/pricing/pricingfaq", pricingcontroller.createPricingfaq);
router.get("api/pricing/pricingfaq", pricingcontroller.getPricingfaq);

// pricing plan
router.post("api/pricing/pricingplan", pricingcontroller.pricingPlan);
router.get("api/pricing/pricingplan", pricingcontroller.getpricingPlan);

// pricing feature 
router.post("api/pricing/pricingfeature", pricingcontroller.pricingfeature);
router.get("api/pricing/pricingfeature", pricingcontroller.getpricingfeature);

/* -------------------------------------------------------------------------- */
/*                        pricing page route ends here                        */
/* -------------------------------------------------------------------------- */