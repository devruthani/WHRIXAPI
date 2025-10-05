/**
 * Career Model
 * 
 * This file defines the Career model for our database. A model is like a blueprint
 * that tells the database what kind of data we want to store and what rules to follow.
 * 
 * The Career model represents job postings or career opportunities in our system.
 */

// Import required modules
const { DataTypes } = require("sequelize");        // Sequelize data types for defining fields
const generateTimestamps = require("./timestamp"); // Our custom timestamp utility

/**
 * Career Model Definition
 * 
 * This function creates and returns a Career model that defines the structure
 * of our career/job posting data in the database.
 * 
 * @param {Object} sequelize - The Sequelize database connection instance
 * @returns {Object} Career model that can be used to interact with career data
 */
module.exports = (sequelize) => {
  // Define the Career model with all its fields and properties
  const Career = sequelize.define("Career", {
    // Job title - required field
    title: { 
      type: DataTypes.STRING,    // Store as text (up to 255 characters)
      allowNull: false           // This field is required - cannot be empty
    },
    
    // Job location - optional field
    location: { 
      type: DataTypes.STRING     // Store as text (up to 255 characters)
    },
    
    // Job type (e.g., Full-time, Part-time, Contract) - optional field
    type: { 
      type: DataTypes.STRING     // Store as text (up to 255 characters)
    },
    
    // Department or team - optional field
    department: { 
      type: DataTypes.STRING     // Store as text (up to 255 characters)
    },
    
    // Required experience level - optional field
    experience: { 
      type: DataTypes.STRING     // Store as text (up to 255 characters)
    },
    
    // Job description - optional field
    description: { 
      type: DataTypes.TEXT       // Store as long text (unlimited length)
    },
    
    // Add our custom timestamp fields (created_on, updated_on)
    // The spread operator (...) takes all fields from generateTimestamps() and adds them here
    ...generateTimestamps(),
  }, {
    // Model options
    timestamps: false, // Disable Sequelize's default timestamp fields (createdAt, updatedAt)
                      // We use our custom timestamp fields instead
  });

  // Return the Career model so it can be used in other parts of the application
  return Career;
};
