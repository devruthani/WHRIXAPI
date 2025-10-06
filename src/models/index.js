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
const AdminProfile = require("./adminProfile.model")(sequelize); // Admin profile model
const Business = require("./business.model")(sequelize); // Business model for API clients

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
DB.AdminProfile = AdminProfile; // Admin profile model for extended user information
DB.Business = Business; // Business model for API clients

// Set up model associations
defineAssociations(DB);

// Export the DB object so other files can import and use our models
// This allows us to do: const { Career, User, AdminProfile } = require('./src/models');
module.exports = DB;
