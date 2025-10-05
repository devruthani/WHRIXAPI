/**
 * Timestamp Utility
 * 
 * This file creates a reusable function that generates timestamp fields
 * for our database models. Instead of writing the same timestamp code
 * in every model, we can use this function to keep our code DRY (Don't Repeat Yourself).
 */

// Import DataTypes from Sequelize
// DataTypes defines the different types of data we can store in our database
const { DataTypes } = require("sequelize");

/**
 * Generate Timestamp Fields
 * 
 * This function returns an object containing two timestamp fields:
 * - created_on: When the record was first created
 * - updated_on: When the record was last modified
 * 
 * @returns {Object} Object containing created_on and updated_on field definitions
 */
const generateTimestamps = () => ({
  // Field to track when a record was created
  created_on: {
    type: DataTypes.DATE,           // Store as a date/time value
    allowNull: false,               // This field cannot be empty
    defaultValue: DataTypes.NOW,    // Automatically set to current time when created
  },
  
  // Field to track when a record was last updated
  updated_on: {
    type: DataTypes.DATE,           // Store as a date/time value
    allowNull: false,               // This field cannot be empty
    defaultValue: DataTypes.NOW,    // Automatically set to current time when created
  },
});

// Export the function so other files can use it
// This allows our models to import and use this timestamp generator
module.exports = generateTimestamps;
