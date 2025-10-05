/**
 * Admin User Setup Script
 * 
 * This script creates a default admin user for the WHRIX admin dashboard.
 * It should be run once when setting up the application for the first time.
 * 
 * Usage: npm run setup
 */

// Import required modules
const bcrypt = require('bcryptjs');              // For hashing passwords securely
const { sequelize, User } = require('./src/models'); // Import database connection and User model

/**
 * Create Admin User Function
 * 
 * This function:
 * 1. Connects to the database
 * 2. Creates/updates database tables
 * 3. Checks if an admin user already exists
 * 4. Creates a new admin user if none exists
 * 5. Displays the login credentials
 */
async function createAdminUser() {
  try {
    // Step 1: Connect to the database
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    // Step 2: Sync database to create/update tables
    // This ensures all our models are properly created in the database
    await sequelize.sync({ alter: true });
    console.log('Database tables synced successfully.');

    // Step 3: Check if an admin user already exists
    const existingAdmin = await User.findOne({ where: { username: 'admin' } });
    
    // If admin user already exists, don't create a new one
    if (existingAdmin) {
      console.log('Admin user already exists!');
      return;
    }

    // Step 4: Create the admin user
    // Hash the password with bcrypt (salt rounds: 10)
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    // Create the admin user record in the database
    const adminUser = await User.create({
      username: 'admin',                    // Username for login
      email: 'admin@whrix.com',            // Email address
      password: hashedPassword,            // Hashed password (not plain text!)
      role: 'admin',                       // User role
      isActive: true                       // Account is active
    });

    // Step 5: Display success message and credentials
    console.log('Admin user created successfully!');
    console.log('Username: admin');
    console.log('Password: admin123');
    console.log('Email: admin@whrix.com');
    
  } catch (error) {
    // If any error occurs, log it to the console
    console.error('Error creating admin user:', error);
  } finally {
    // Always close the database connection when done
    await sequelize.close();
  }
}

// Run the function to create the admin user
createAdminUser();
