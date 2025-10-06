/**
 * Authentication Middleware
 * 
 * This file contains middleware functions for handling authentication and authorization
 * in our admin system. Middleware functions run between the request and response,
 * allowing us to verify tokens and protect routes.
 */

// Import required modules
const jwt = require('jsonwebtoken');    // Library for creating and verifying JWT tokens
const { User, AdminProfile } = require('../models'); // Import our models

// JWT Secret Key Configuration
// This secret is used to sign and verify JWT tokens
// In production, this should be stored in environment variables for security
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

/**
 * Authentication Middleware
 * 
 * This middleware function verifies JWT tokens and adds user information to the request.
 * It should be used on routes that require authentication.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function to continue to the next middleware
 */
const authenticateToken = async (req, res, next) => {
  try {
    // Extract token from Authorization header
    // Format: "Bearer <token>" - we split by space and take the second part
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    // Check if token exists
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'Access token required' 
      });
    }

    // Verify the JWT token and decode its contents
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Find the user by ID from the decoded token
    const user = await User.findByPk(decoded.userId, {
      include: [{
        model: AdminProfile,
        as: 'profile' // This will be the alias for the relationship
      }]
    });

    // Check if user exists and is still active
    if (!user || !user.isActive) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid or expired token' 
      });
    }

    // Add user information to the request object
    // This makes the user data available in the route handlers
    req.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      profile: user.profile || null // Include profile if it exists
    };

    // Continue to the next middleware or route handler
    next();

  } catch (error) {
    // If token verification fails (expired, invalid signature, etc.)
    console.error('Authentication error:', error);
    return res.status(401).json({ 
      success: false, 
      message: 'Invalid or expired token' 
    });
  }
};

/**
 * Admin Role Middleware
 * 
 * This middleware function checks if the authenticated user has admin role.
 * It should be used after the authenticateToken middleware.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function to continue to the next middleware
 */
const requireAdmin = (req, res, next) => {
  // Check if user is authenticated and has admin role
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ 
      success: false, 
      message: 'Admin access required' 
    });
  }

  // Continue to the next middleware or route handler
  next();
};

/**
 * Profile Ownership Middleware
 * 
 * This middleware function checks if the authenticated user is trying to access
 * their own profile or if they have admin privileges.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function to continue to the next middleware
 */
const requireProfileOwnership = (req, res, next) => {
  // Get the user ID from the request parameters or body
  const targetUserId = req.params.userId || req.body.userId;
  
  // Check if user is trying to access their own profile or is an admin
  if (req.user.id.toString() === targetUserId || req.user.role === 'admin') {
    return next();
  }

  // If not authorized, return error
  return res.status(403).json({ 
    success: false, 
    message: 'Access denied. You can only access your own profile.' 
  });
};

// Export the middleware functions so they can be used in routes
module.exports = {
  authenticateToken,
  requireAdmin,
  requireProfileOwnership
};
