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

// Create a database object that contains all our models and utilities
const DB = {};

// Add Sequelize library to the DB object (useful for advanced operations)
DB.Sequelize = Sequelize;

// Add the database connection to the DB object
DB.sequelize = sequelize;

// Add all our models to the DB object
DB.Career = Career;  // Career model for job postings
DB.User = User;      // User model for admin authentication

// Export the DB object so other files can import and use our models
// This allows us to do: const { Career, User } = require('./src/models');
module.exports = DB;
