/**
 * Business Model
 * 
 * This file defines the Business model for our database. This model represents
 * businesses that use our address verification API service.
 * 
 * The Business model handles business information, API keys, subscription plans,
 * usage statistics, and integration details.
 */

// Import required modules
const { DataTypes } = require("sequelize");        // Sequelize data types for defining fields
const generateTimestamps = require("./timestamp"); // Our custom timestamp utility

/**
 * Business Model Definition
 * 
 * This function creates and returns a Business model that defines the structure
 * of our business data in the database.
 * 
 * @param {Object} sequelize - The Sequelize database connection instance
 * @returns {Object} Business model that can be used to interact with business data
 */
module.exports = (sequelize) => {
  // Define the Business model with all its fields and properties
  const Business = sequelize.define("Business", {
    // Basic Business Information
    name: { 
      type: DataTypes.STRING(255),    // Store as text (up to 255 characters)
      allowNull: false,               // This field is required - cannot be empty
      validate: {
        len: [2, 255]                 // Name must be between 2 and 255 characters
      }
    },
    
    // Business Description
    description: { 
      type: DataTypes.TEXT,           // Store as long text (unlimited length)
      allowNull: true                 // Optional field
    },
    
    // Contact Information
    email: { 
      type: DataTypes.STRING(255),    // Store as text (up to 255 characters)
      allowNull: false,               // This field is required - cannot be empty
      unique: true,                   // No two businesses can have the same email
      validate: {
        isEmail: true                 // Ensure the value is a valid email format
      }
    },
    
    phone: { 
      type: DataTypes.STRING(20),     // Store as text (up to 20 characters)
      allowNull: true                 // Optional field
    },
    
    website: { 
      type: DataTypes.STRING(500),    // Store as text (up to 500 characters for URL)
      allowNull: true,                // Optional field
      validate: {
        isUrl: true                   // Ensure the value is a valid URL format
      }
    },
    
    // Business Address
    address: { 
      type: DataTypes.TEXT,           // Store as long text for full address
      allowNull: true                 // Optional field
    },
    
    city: { 
      type: DataTypes.STRING(100),    // Store as text (up to 100 characters)
      allowNull: true                 // Optional field
    },
    
    state: { 
      type: DataTypes.STRING(100),    // Store as text (up to 100 characters)
      allowNull: true                 // Optional field
    },
    
    country: { 
      type: DataTypes.STRING(100),    // Store as text (up to 100 characters)
      allowNull: true                 // Optional field
    },
    
    postalCode: { 
      type: DataTypes.STRING(20),     // Store as text (up to 20 characters)
      allowNull: true                 // Optional field
    },
    
    // Business Classification
    industry: { 
      type: DataTypes.STRING(100),    // Store as text (up to 100 characters)
      allowNull: true                 // Optional field
    },
    
    businessType: { 
      type: DataTypes.ENUM('individual', 'small_business', 'medium_business', 'enterprise', 'non_profit'),
      allowNull: true                 // Optional field
    },
    
    // API Integration
    apiKey: { 
      type: DataTypes.STRING(255),    // Store as text (up to 255 characters)
      allowNull: false,               // This field is required - cannot be empty
      unique: true,                   // No two businesses can have the same API key
      validate: {
        len: [32, 255]                // API key must be between 32 and 255 characters
      }
    },
    
    apiKeyPrefix: { 
      type: DataTypes.STRING(10),     // Store as text (up to 10 characters)
      allowNull: true                 // Optional field (e.g., 'live_', 'test_')
    },
    
    // Subscription and Billing
    plan: { 
      type: DataTypes.ENUM('free', 'starter', 'professional', 'enterprise'),
      allowNull: false,               // This field is required - cannot be empty
      defaultValue: 'free'            // Default plan is 'free'
    },
    
    status: { 
      type: DataTypes.ENUM('active', 'inactive', 'suspended', 'pending_verification'),
      allowNull: false,               // This field is required - cannot be empty
      defaultValue: 'pending_verification' // Default status is 'pending_verification'
    },
    
    // Usage Limits and Statistics
    monthlyLimit: { 
      type: DataTypes.INTEGER,        // Store as integer
      allowNull: false,               // This field is required - cannot be empty
      defaultValue: 1000,             // Default monthly limit
      validate: {
        min: 0                        // Monthly limit must be non-negative
      }
    },
    
    currentMonthUsage: { 
      type: DataTypes.INTEGER,        // Store as integer
      allowNull: false,               // This field is required - cannot be empty
      defaultValue: 0,                // Default current month usage
      validate: {
        min: 0                        // Current usage must be non-negative
      }
    },
    
    totalVerifications: { 
      type: DataTypes.INTEGER,        // Store as integer
      allowNull: false,               // This field is required - cannot be empty
      defaultValue: 0,                // Default total verifications
      validate: {
        min: 0                        // Total verifications must be non-negative
      }
    },
    
    successRate: { 
      type: DataTypes.DECIMAL(5, 2),  // Store as decimal with 5 total digits, 2 after decimal
      allowNull: false,               // This field is required - cannot be empty
      defaultValue: 0.00,             // Default success rate
      validate: {
        min: 0.00,                    // Success rate must be non-negative
        max: 100.00                   // Success rate cannot exceed 100%
      }
    },
    
    averageResponseTime: { 
      type: DataTypes.INTEGER,        // Store as integer (milliseconds)
      allowNull: false,               // This field is required - cannot be empty
      defaultValue: 0,                // Default average response time
      validate: {
        min: 0                        // Response time must be non-negative
      }
    },
    
    // Contact Person Information
    contactPerson: { 
      type: DataTypes.STRING(255),    // Store as text (up to 255 characters)
      allowNull: true                 // Optional field
    },
    
    contactTitle: { 
      type: DataTypes.STRING(100),    // Store as text (up to 100 characters)
      allowNull: true                 // Optional field
    },
    
    // Integration Details
    integrationMethod: { 
      type: DataTypes.ENUM('api', 'webhook', 'sdk', 'plugin'),
      allowNull: true                 // Optional field
    },
    
    webhookUrl: { 
      type: DataTypes.STRING(500),    // Store as text (up to 500 characters for URL)
      allowNull: true,                // Optional field
      validate: {
        isValidUrl(value) {
          if (value && value.trim() !== '') {
            const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
            if (!urlPattern.test(value)) {
              throw new Error('Please provide a valid URL format');
            }
          }
        }
      }
    },
    
    // Security and Compliance
    isVerified: { 
      type: DataTypes.BOOLEAN,        // Store as true/false
      defaultValue: false             // Default to not verified
    },
    
    verificationDate: { 
      type: DataTypes.DATE,           // Store as date/time
      allowNull: true                 // Optional field
    },
    
    lastActivityAt: { 
      type: DataTypes.DATE,           // Store as date/time
      allowNull: true                 // Optional field
    },
    
    lastApiCallAt: { 
      type: DataTypes.DATE,           // Store as date/time
      allowNull: true                 // Optional field
    },
    
    // Billing Information
    billingEmail: { 
      type: DataTypes.STRING(255),    // Store as text (up to 255 characters)
      allowNull: true,                // Optional field
      validate: {
        isValidEmail(value) {
          if (value && value.trim() !== '') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
              throw new Error('Please provide a valid email address');
            }
          }
        }
      }
    },
    
    billingAddress: { 
      type: DataTypes.TEXT,           // Store as long text for full billing address
      allowNull: true                 // Optional field
    },
    
    // Additional Settings
    settings: { 
      type: DataTypes.JSON,           // Store as JSON object for flexible settings
      allowNull: true                 // Optional field
    },
    
    notes: { 
      type: DataTypes.TEXT,           // Store as long text for admin notes
      allowNull: true                 // Optional field
    },
    
    // Add our custom timestamp fields (created_on, updated_on)
    // The spread operator (...) takes all fields from generateTimestamps() and adds them here
    ...generateTimestamps(),
  }, {
    // Model options
    timestamps: false, // Disable Sequelize's default timestamp fields (createdAt, updatedAt)
                      // We use our custom timestamp fields instead
    tableName: 'businesses', // Custom table name
    indexes: [
      // Create indexes for better query performance
      {
        fields: ['email']
      },
      {
        fields: ['apiKey']
      },
      {
        fields: ['status']
      },
      {
        fields: ['plan']
      },
      {
        fields: ['industry']
      },
      {
        fields: ['created_on']
      }
    ]
  });

  // Return the Business model so it can be used in other parts of the application
  return Business;
};
