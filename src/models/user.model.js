/**
 * User Model
 * 
 * This file defines the User model for our database. This model represents
 * admin users who can log into the WHRIX admin dashboard.
 * 
 * The User model handles authentication, password reset functionality,
 * and user role management.
 */

// Import required modules
const { DataTypes } = require("sequelize");        // Sequelize data types for defining fields
const generateTimestamps = require("./timestamp"); // Our custom timestamp utility

/**
 * User Model Definition
 * 
 * This function creates and returns a User model that defines the structure
 * of our user data in the database.
 * 
 * @param {Object} sequelize - The Sequelize database connection instance
 * @returns {Object} User model that can be used to interact with user data
 */
module.exports = (sequelize) => {
  // Define the User model with all its fields and properties
  const User = sequelize.define("User", {
    // Username - required and must be unique
    username: { 
      type: DataTypes.STRING,    // Store as text (up to 255 characters)
      allowNull: false,          // This field is required - cannot be empty
      unique: true               // No two users can have the same username
    },
    
    // Email address - required, unique, and must be a valid email format
    email: { 
      type: DataTypes.STRING,    // Store as text (up to 255 characters)
      allowNull: false,          // This field is required - cannot be empty
      unique: true,              // No two users can have the same email
      validate: {
        isEmail: true            // Ensure the value is a valid email format
      }
    },
    
    // Password - required field (will be hashed before storing)
    password: { 
      type: DataTypes.STRING,    // Store as text (up to 255 characters)
      allowNull: false           // This field is required - cannot be empty
    },
    
    // User role - determines what the user can do in the system
    role: { 
      type: DataTypes.ENUM('admin', 'user'), // Only allow 'admin' or 'user' values
      defaultValue: 'admin'      // Default role is 'admin' for new users
    },
    
    // Account status - whether the user account is active or disabled
    isActive: { 
      type: DataTypes.BOOLEAN,   // Store as true/false
      defaultValue: true         // New users are active by default
    },
    
    // Password reset token - used for password reset functionality
    resetToken: { 
      type: DataTypes.STRING,    // Store as text (up to 255 characters)
      allowNull: true            // This field is optional - only set when resetting password
    },
    
    // Password reset token expiration - when the reset token expires
    resetTokenExpiry: { 
      type: DataTypes.DATE,      // Store as date/time
      allowNull: true            // This field is optional - only set when resetting password
    },
    
    // Add our custom timestamp fields (created_on, updated_on)
    // The spread operator (...) takes all fields from generateTimestamps() and adds them here
    ...generateTimestamps(),
  }, {
    // Model options
    timestamps: false, // Disable Sequelize's default timestamp fields (createdAt, updatedAt)
                      // We use our custom timestamp fields instead
  });

  // Return the User model so it can be used in other parts of the application
  return User;
};
