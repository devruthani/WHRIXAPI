

/**
 * Database Configuration
 * 
 * This file sets up the connection to the MySQL database using Sequelize ORM.
 * Sequelize is a tool that helps us interact with databases using JavaScript
 * instead of writing raw SQL queries.
 */

// Import Sequelize - the Object-Relational Mapping (ORM) library
// ORM allows us to work with databases using JavaScript objects instead of SQL
const { Sequelize } = require("sequelize");

// Load environment variables from .env file
// This keeps sensitive information like database passwords out of our code
require("dotenv").config();

/**
 * Create Sequelize Database Connection
 * 
 * This creates a connection to our MySQL database using the credentials
 * stored in environment variables (.env file)
 */
const sequelize = new Sequelize(
  process.env.DB_NAME,        // Database name (from .env file)
  process.env.DB_USER,        // Database username (from .env file)
  process.env.DB_PASSWORD,    // Database password (from .env file)
  {
    host: process.env.DB_HOST,        // Database server address (from .env file)
    dialect: process.env.DB_DIALECT,  // Type of database (mysql, postgres, etc.)
    port: process.env.DB_PORT,        // Database port number (from .env file)
    logging: false,                   // Set to true if you want to see SQL queries in console
  }
);

// Export the database connection so other files can use it
// This allows us to import and use this connection in our models and routes
module.exports = sequelize;
