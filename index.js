
/**
 * WHRIX Admin API Server
 * Main entry point for the WHRIX admin dashboard backend
 * 
 * This file sets up the Express server, connects to the database,
 * and configures all routes for the admin authentication system.
 */

// Import required modules
const express = require("express");           // Web framework for Node.js
const path = require("path");                 // Built-in module for file path operations
const { sequelize, Career, User } = require("./src/models"); // Import database models

// Create Express application instance
const app = express();

// Middleware: Parse JSON request bodies
// This allows the server to understand JSON data sent from the frontend
app.use(express.json());

// Middleware: Serve static files from public directory
// This serves the frontend HTML, CSS, JS files to users
// When someone visits the website, they get the files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: 0, // No caching in development
  etag: false
}));

// Import and configure admin authentication routes
// These routes handle login, password reset, and token verification
const adminRoutes = require('./src/routes/admin');
app.use('/api/admin', adminRoutes); // All admin routes will be prefixed with /api/admin

// Import and configure business management routes
// These routes handle CRUD operations for businesses
const businessRoutes = require('./src/routes/business');
app.use('/api/businesses', businessRoutes); // All business routes will be prefixed with /api/businesses

// Basic health check route
// This is a simple route that responds with "hello whrix" to confirm the server is running
app.get("/", async (req, res) => {
    res.send("hello whrix");
});

// Clean URL routing - serve HTML files without .html extension
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'forgot-password.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

/**
 * Database Synchronization and Server Startup
 * 
 * This section:
 * 1. Connects to the database
 * 2. Creates/updates database tables based on our models
 * 3. Starts the web server
 */
sequelize.sync({ force: false }) // Only creates tables if they don’t exist Data and schema preserved
  .then(() => {
    // Database connection successful
    console.log("DB connected");
    
    // Start the web server
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => {
    // If database connection fails, log the error and stop the application
    console.error("DB connection failed:", err);
  });