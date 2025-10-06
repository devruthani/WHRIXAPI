/**
 * Admin Profile Model
 * 
 * This file defines the AdminProfile model for our database. This model represents
 * additional profile information for admin users beyond the basic authentication data.
 * 
 * The AdminProfile model handles extended user information like personal details,
 * preferences, and profile settings.
 */

// Import required modules
const { DataTypes } = require("sequelize");        // Sequelize data types for defining fields
const generateTimestamps = require("./timestamp"); // Our custom timestamp utility

/**
 * AdminProfile Model Definition
 * 
 * This function creates and returns an AdminProfile model that defines the structure
 * of our admin profile data in the database.
 * 
 * @param {Object} sequelize - The Sequelize database connection instance
 * @returns {Object} AdminProfile model that can be used to interact with profile data
 */
module.exports = (sequelize) => {
  // Define the AdminProfile model with all its fields and properties
  const AdminProfile = sequelize.define("AdminProfile", {
    // Foreign key to link with User model
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // References the User table
        key: 'id'
      },
      onDelete: 'CASCADE' // If user is deleted, delete their profile too
    },
    
    // Personal Information
    firstName: { 
      type: DataTypes.STRING(100),    // Store as text (up to 100 characters)
      allowNull: true                 // Optional field
    },
    
    lastName: { 
      type: DataTypes.STRING(100),    // Store as text (up to 100 characters)
      allowNull: true                 // Optional field
    },
    
    // Profile picture URL
    profilePicture: { 
      type: DataTypes.STRING(500),    // Store as text (up to 500 characters for URL)
      allowNull: true                 // Optional field
    },
    
    // Contact Information
    phoneNumber: { 
      type: DataTypes.STRING(20),     // Store as text (up to 20 characters)
      allowNull: true                 // Optional field
    },
    
    // Professional Information
    jobTitle: { 
      type: DataTypes.STRING(100),    // Store as text (up to 100 characters)
      allowNull: true                 // Optional field
    },
    
    department: { 
      type: DataTypes.STRING(100),    // Store as text (up to 100 characters)
      allowNull: true                 // Optional field
    },
    
    // Bio/About section
    bio: { 
      type: DataTypes.TEXT,           // Store as long text (unlimited length)
      allowNull: true                 // Optional field
    },
    
    // Location Information
    timezone: { 
      type: DataTypes.STRING(50),     // Store as text (up to 50 characters)
      allowNull: true                 // Optional field
    },
    
    // Preferences
    language: { 
      type: DataTypes.STRING(10),     // Store as text (up to 10 characters, e.g., 'en', 'es')
      allowNull: true,
      defaultValue: 'en'              // Default to English
    },
    
    // Notification preferences
    emailNotifications: { 
      type: DataTypes.BOOLEAN,        // Store as true/false
      defaultValue: true              // Default to enabled
    },
    
    smsNotifications: { 
      type: DataTypes.BOOLEAN,        // Store as true/false
      defaultValue: false             // Default to disabled
    },
    
    // Security settings
    twoFactorEnabled: { 
      type: DataTypes.BOOLEAN,        // Store as true/false
      defaultValue: false             // Default to disabled
    },
    
    // Last login information
    lastLoginAt: { 
      type: DataTypes.DATE,           // Store as date/time
      allowNull: true                 // Optional field
    },
    
    lastLoginIP: { 
      type: DataTypes.STRING(45),     // Store as text (up to 45 characters for IPv6)
      allowNull: true                 // Optional field
    },
    
    // Profile completion status
    profileCompleted: { 
      type: DataTypes.BOOLEAN,        // Store as true/false
      defaultValue: false             // Default to incomplete
    },
    
    // Add our custom timestamp fields (created_on, updated_on)
    // The spread operator (...) takes all fields from generateTimestamps() and adds them here
    ...generateTimestamps(),
  }, {
    // Model options
    timestamps: false, // Disable Sequelize's default timestamp fields (createdAt, updatedAt)
                      // We use our custom timestamp fields instead
    tableName: 'admin_profiles', // Custom table name
  });

  // Return the AdminProfile model so it can be used in other parts of the application
  return AdminProfile;
};
