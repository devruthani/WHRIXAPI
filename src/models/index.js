/**
 * Models Index
 * 
 * This file is the central hub for all our database models. It imports all models,
 * connects them to the database, and exports them in a single object so other
 * parts of the application can easily access them.
 * 
 * This is a common pattern in Node.js applications to keep model imports organized.
 */

// Import Sequelize library and database connection
const Sequelize = require("sequelize");           // Sequelize ORM library
const sequelize = require("../config/database");  // Our database connection

// Import and initialize all our models
// Each model is a function that takes the sequelize connection and returns a model
const Career = require("./career.model")(sequelize); // Career/job posting model
const User = require("./user.model")(sequelize);     // User/admin authentication model
const Hero = require("./components/hero.model")(sequelize);       // Hero section model
const Solution = require("./components/solution.model")(sequelize); // Solution section model
const Solutioncards = require("./components/solutioncards.model")(sequelize); // Solution cards section model
const Featuregrid = require("./components/featuregrid.model")(sequelize); // Feature grid section model
const Featuregridcard = require("./components/featuregridcard.model")(sequelize); // Feature cards section model
const AdminProfile = require("./adminProfile.model")(sequelize); // Admin profile model
const Business = require("./business.model")(sequelize); // Business model for API clients
const ProofTrustedLogo = require("./components/prooftrustedlogo.model")(sequelize); // Proof trusted logo section model
const ProofStat = require("./components/proofstat.model")(sequelize); // Proof stat section model
const ProofTestimonial = require("./components/prooftestimonial.model")(sequelize); // Proof testimonial section model
const ProofSection = require("./components/proofsection.model")(sequelize); // Proof section  model
const ProjectStat = require("./components/projectstat.model")(sequelize); // Project stat section model
const ProjectSection = require("./components/projectsection.model")(sequelize); // Project section model
const ProjectCaseStudies = require("./components/projectcasestudy.model")(sequelize); // Project testimonial section model
const PricingFeature = require("./pricingpage/pricingfeature.model")(sequelize); // Pricing feature section model
const PricingSection = require("./pricingpage/pricingsection.model")(sequelize); // Pricing section model
const PricingFaq = require("./pricingpage/pricingfaq.model")(sequelize); // Pricing faq section model
const PricingPlan = require("./pricingpage/pricingplan.model")(sequelize); // Pricing plan section model
const PricingAddOn = require("./pricingpage/pricingaddon.model")(sequelize); // Pricing add on section model
const AboutSection = require("./aboutpage/aboutsection.model")(sequelize); // About section model
const AboutStat = require("./aboutpage/aboutstat.model")(sequelize); // About stat section model
const CareerJobListing = require("./careerpage/careerjoblisting.model")(sequelize); // Career job listing section model
const CareerBenefit = require("./careerpage/careerbenefit.model")(sequelize); // Career benefit section model
const CareerPage = require("./careerpage/careerpage.model")(sequelize); // Career page model
const ContactPage = require("./contactpage/contactpage.model")(sequelize); // Contact page model
const ContactForm = require("./contactpage/contactform.model")(sequelize); // Contact form model
const ContactOfficeLocation = require("./contactpage/contactofficelocation.model")(sequelize); // Contact Contact Office Location model
const ContactFaq = require("./contactpage/contactfaq.model")(sequelize); // Contact FAQ model
const ContactSupportOption = require("./contactpage/contactsupport.model")(sequelize); // Contact support option model
const DeveloperEndpoint = require("./developerspage/developerendpoint.model")(sequelize); // Developer endpoint model
const DeveloperPage = require("./developerspage/developerspage.model")(sequelize); // Developer page model
const DeveloperSdk = require("./developerspage/developersdk.model")(sequelize); // Developer SDK model

// Import associations function
const defineAssociations = require("./associations");

// Create a database object that contains all our models and utilities
const DB = {};

// Add Sequelize library to the DB object (useful for advanced operations)
DB.Sequelize = Sequelize;

// Add the database connection to the DB object
DB.sequelize = sequelize;

// Add all our models to the DB object
DB.Career = Career;  // Career model for job postings
DB.User = User;      // User model for admin authentication
DB.Hero = Hero;      // Hero section model
DB.Solution = Solution;      // Solution section model
DB.Solutioncards = Solutioncards;      // Solution cards section model
DB.Featuregrid = Featuregrid;      // Feature grid section model
DB.Featuregridcard = Featuregridcard;      // Feature cards section model
DB.AdminProfile = AdminProfile; // Admin profile model for extended user information
DB.Business = Business; // Business model for API clients
DB.ProofSection = ProofSection; // Proof section model
DB.ProofTrustedLogo = ProofTrustedLogo; // Proof trusted logo model
DB.ProofStat = ProofStat; // Proof stat model
DB.ProofTestimonial = ProofTestimonial; // Proof testimonial model
DB.ProjectSection = ProjectSection; // Project section model
DB.ProjectStat = ProjectStat; // Project stat model
DB.ProjectCaseStudies = ProjectCaseStudies; // Project case studies model
DB.PricingFaq = PricingFaq; // Pricing FAQ model
DB.PricingFeature = PricingFeature; // Pricing feature model
DB.PricingPlan = PricingPlan; // Pricing plan model
DB.PricingSection = PricingSection; // Pricing section model
DB.PricingAddOn = PricingAddOn; // Pricing add on model
DB.AboutSection = AboutSection; // About section model
DB.AboutStat = AboutStat; // About stat model
DB.CareerPage = CareerPage; // Career page model
DB.CareerBenefit = CareerBenefit; // Career benefit model
DB.CareerJobListing = CareerJobListing; // Career job listing model
DB.ContactPage = ContactPage; // Contact page model
DB.ContactForm = ContactForm; // Contact form model
DB.ContactFaq = ContactFaq; // Contact FAQ model
DB.ContactOfficeLocation = ContactOfficeLocation; // Contact office location model
DB.ContactSupportOption = ContactSupportOption; // Contact support option model
DB.DeveloperEndpoint = DeveloperEndpoint; // Developer endpoint model
DB.DeveloperPage = DeveloperPage; // Developer page model
DB.DeveloperSdk = DeveloperSdk; // Developer SDK model

// Set up model associations
defineAssociations(DB);

// Export the DB object so other files can import and use our models
// This allows us to do: const { Career, User, AdminProfile } = require('./src/models');
module.exports = DB;
