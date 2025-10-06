/**
 * Business Table Migration Script
 * 
 * This script creates the businesses table in the database.
 * Run this script after creating the Business model to set up the database table.
 * 
 * Usage: node migrate-businesses.js
 */

// Load environment variables
require('dotenv').config();

// Import required modules
const sequelize = require('./src/config/database');  // Database connection
const DB = require('./src/models');                  // Import all models
const { Business } = DB;                             // Extract Business model
const defineAssociations = require('./src/models/associations'); // Import associations

/**
 * Main migration function
 * 
 * This function:
 * 1. Defines model associations
 * 2. Syncs the database to create/update the businesses table
 * 3. Logs success or error messages
 */
async function migrateBusinesses() {
  try {
    console.log('Starting business table migration...');
    
    // Sync the database (create/update tables)
    // alter: true updates existing tables without dropping data
    // Note: Associations are already defined in src/models/index.js
    await sequelize.sync({ alter: true });
    
    console.log('✅ Business table migrated successfully!');
    console.log('📊 The businesses table is now ready for use.');
    console.log('🔗 You can now use the business management API endpoints.');
    
  } catch (error) {
    console.error('❌ Error migrating business table:', error);
    console.error('💡 Make sure your database connection is working properly.');
    process.exit(1); // Exit with error code
  } finally {
    // Close the database connection
    await sequelize.close();
    console.log('🔌 Database connection closed.');
  }
}

// Run the migration
migrateBusinesses();
