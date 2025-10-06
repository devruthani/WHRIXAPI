/**
 * Admin Authentication Routes
 * 
 * This file contains all the API routes for admin authentication including:
 * - User login
 * - Password reset functionality
 * - Token verification
 * 
 * These routes handle the backend logic for the admin dashboard authentication system.
 */

// Import required modules
const express = require('express');     // Web framework for creating API routes
const bcrypt = require('bcryptjs');     // Library for hashing passwords securely
const jwt = require('jsonwebtoken');    // Library for creating and verifying JWT tokens
const crypto = require('crypto');       // Built-in Node.js module for generating secure random tokens
const { User, AdminProfile } = require('../models');  // Import our models from the models directory
const { authenticateToken, requireAdmin, requireProfileOwnership } = require('../middleware/auth'); // Import authentication middleware

// Create an Express router to handle our admin routes
const router = express.Router();

// JWT Secret Key Configuration
// This secret is used to sign and verify JWT tokens
// In production, this should be stored in environment variables for security
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

/**
 * Admin Login Route
 * 
 * POST /api/admin/login
 * 
 * This route handles admin user login. It:
 * 1. Validates the username and password
 * 2. Checks if the user exists and is active
 * 3. Verifies the password using bcrypt
 * 4. Generates a JWT token for authentication
 * 5. Returns user information and token
 */
router.post('/login', async (req, res) => {
  try {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Validate that both username and password are provided
    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Username and password are required' 
      });
    }

    // Find the user in the database
    // We only look for active users (isActive: true)
    const user = await User.findOne({ 
      where: { 
        username: username,    // Match the provided username
        isActive: true         // Only active users can log in
      } 
    });

    // If no user is found, return an error
    // We use the same error message for both "user not found" and "wrong password"
    // This prevents attackers from knowing if a username exists
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Verify the password using bcrypt
    // bcrypt.compare() compares the plain text password with the hashed password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Generate a JWT token for the authenticated user
    // The token contains user information and expires in 24 hours
    const token = jwt.sign(
      { 
        userId: user.id,       // User's unique ID
        username: user.username, // User's username
        role: user.role        // User's role (admin/user)
      },
      JWT_SECRET,              // Secret key to sign the token
      { expiresIn: '24h' }     // Token expires in 24 hours
    );

    // Return success response with token and user information
    res.json({
      success: true,
      message: 'Login successful',
      token,                   // JWT token for future requests
      user: {                  // User information (without sensitive data like password)
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    // If any error occurs during the login process, log it and return a generic error
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Forgot Password Route
 * 
 * POST /api/admin/forgot-password
 * 
 * This route handles password reset requests. It:
 * 1. Validates the email address
 * 2. Generates a secure reset token
 * 3. Stores the token and expiration time in the database
 * 4. Returns a success message (in production, would send email)
 */
router.post('/forgot-password', async (req, res) => {
  try {
    // Extract email from the request body
    const { email } = req.body;

    // Validate that email is provided
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      });
    }

    // Find the user by email address
    const user = await User.findOne({ where: { email } });
    
    // Security measure: Don't reveal if the email exists or not
    // This prevents attackers from knowing which emails are registered
    if (!user) {
      return res.json({
        success: true,
        message: 'If the email exists, a reset link has been sent'
      });
    }

    // Generate a secure random token for password reset
    // crypto.randomBytes(32) creates 32 random bytes, toString('hex') converts to hexadecimal
    const resetToken = crypto.randomBytes(32).toString('hex');
    
    // Set token expiration to 1 hour from now
    // Date.now() gets current time in milliseconds, 3600000 = 1 hour in milliseconds
    const resetTokenExpiry = new Date(Date.now() + 3600000);

    // Update the user record with the reset token and expiration time
    await user.update({
      resetToken,        // Store the generated token
      resetTokenExpiry   // Store when the token expires
    });

    // In a real application, you would send an email with the reset link here
    // For development purposes, we log the token to the console
    console.log(`Reset token for ${email}: ${resetToken}`);

    // Return success response
    res.json({
      success: true,
      message: 'If the email exists, a reset link has been sent',
      resetToken // Only for development - remove this in production!
    });

  } catch (error) {
    // If any error occurs, log it and return a generic error
    console.error('Forgot password error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Reset Password Route
 * 
 * POST /api/admin/reset-password
 * 
 * This route handles password reset completion. It:
 * 1. Validates the reset token and new password
 * 2. Checks if the token is valid and not expired
 * 3. Hashes the new password
 * 4. Updates the user's password and clears the reset token
 */
router.post('/reset-password', async (req, res) => {
  try {
    // Extract token and new password from request body
    const { token, newPassword } = req.body;

    // Validate that both token and new password are provided
    if (!token || !newPassword) {
      return res.status(400).json({ 
        success: false, 
        message: 'Token and new password are required' 
      });
    }

    // Find user with valid, non-expired reset token
    const user = await User.findOne({
      where: {
        resetToken: token,                    // Token must match
        resetTokenExpiry: {
          [require('sequelize').Op.gt]: new Date() // Token must not be expired
        }
      }
    });

    // If no valid user found, return error
    if (!user) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid or expired reset token' 
      });
    }

    // Hash the new password with bcrypt (salt rounds: 10)
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password and clear reset token fields
    await user.update({
      password: hashedPassword,    // Store the new hashed password
      resetToken: null,           // Clear the reset token
      resetTokenExpiry: null      // Clear the expiration time
    });

    // Return success response
    res.json({
      success: true,
      message: 'Password reset successful'
    });

  } catch (error) {
    // Log error and return generic error message
    console.error('Reset password error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Verify Token Route
 * 
 * GET /api/admin/verify-token
 * 
 * This route verifies JWT tokens for protected routes. It:
 * 1. Extracts the token from the Authorization header
 * 2. Verifies the token signature and expiration
 * 3. Checks if the user still exists and is active
 * 4. Returns user information if token is valid
 */
router.get('/verify-token', async (req, res) => {
  try {
    // Extract token from Authorization header
    // Format: "Bearer <token>" - we split by space and take the second part
    const token = req.headers.authorization?.split(' ')[1];

    // Check if token exists
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'No token provided' 
      });
    }

    // Verify the JWT token and decode its contents
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Find the user by ID from the decoded token
    const user = await User.findByPk(decoded.userId);

    // Check if user exists and is still active
    if (!user || !user.isActive) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid token' 
      });
    }

    // Return user information if token is valid
    res.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    // If token verification fails (expired, invalid signature, etc.)
    res.status(401).json({ 
      success: false, 
      message: 'Invalid token' 
    });
  }
});

/**
 * Get Admin Profile Route
 * 
 * GET /api/admin/profile
 * 
 * This route retrieves the current admin's profile information.
 * It requires authentication and returns the user's profile data.
 */
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    // Find the user with their profile
    const user = await User.findByPk(req.user.id, {
      include: [{
        model: AdminProfile,
        as: 'profile'
      }]
    });

    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Return user and profile information
    res.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        profile: user.profile || null
      }
    });

  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Create/Update Admin Profile Route
 * 
 * POST /api/admin/profile
 * 
 * This route creates or updates the admin's profile information.
 * It requires authentication and allows updating profile details.
 */
router.post('/profile', authenticateToken, async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      profilePicture,
      phoneNumber,
      jobTitle,
      department,
      bio,
      timezone,
      language,
      emailNotifications,
      smsNotifications,
      twoFactorEnabled
    } = req.body;

    // Check if profile already exists
    let profile = await AdminProfile.findOne({ where: { userId: req.user.id } });

    if (profile) {
      // Update existing profile
      await profile.update({
        firstName,
        lastName,
        profilePicture,
        phoneNumber,
        jobTitle,
        department,
        bio,
        timezone,
        language,
        emailNotifications,
        smsNotifications,
        twoFactorEnabled,
        profileCompleted: true // Mark as completed when updated
      });
    } else {
      // Create new profile
      profile = await AdminProfile.create({
        userId: req.user.id,
        firstName,
        lastName,
        profilePicture,
        phoneNumber,
        jobTitle,
        department,
        bio,
        timezone,
        language,
        emailNotifications,
        smsNotifications,
        twoFactorEnabled,
        profileCompleted: true
      });
    }

    // Return updated profile
    res.json({
      success: true,
      message: 'Profile updated successfully',
      profile
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Update Admin Basic Information Route
 * 
 * PUT /api/admin/profile/basic
 * 
 * This route updates the admin's basic information (username, email).
 * It requires authentication and validates the new information.
 */
router.put('/profile/basic', authenticateToken, async (req, res) => {
  try {
    const { username, email } = req.body;

    // Validate required fields
    if (!username || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Username and email are required' 
      });
    }

    // Check if username or email already exists (excluding current user)
    const existingUser = await User.findOne({
      where: {
        [require('sequelize').Op.or]: [
          { username },
          { email }
        ],
        id: {
          [require('sequelize').Op.ne]: req.user.id
        }
      }
    });

    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'Username or email already exists' 
      });
    }

    // Update user information
    await User.update(
      { username, email },
      { where: { id: req.user.id } }
    );

    // Return success response
    res.json({
      success: true,
      message: 'Basic information updated successfully'
    });

  } catch (error) {
    console.error('Update basic info error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Change Password Route
 * 
 * PUT /api/admin/profile/password
 * 
 * This route allows the admin to change their password.
 * It requires authentication and validates the current password.
 */
router.put('/profile/password', authenticateToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Validate required fields
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ 
        success: false, 
        message: 'Current password and new password are required' 
      });
    }

    // Validate new password length
    if (newPassword.length < 6) {
      return res.status(400).json({ 
        success: false, 
        message: 'New password must be at least 6 characters long' 
      });
    }

    // Get current user
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ 
        success: false, 
        message: 'Current password is incorrect' 
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    await user.update({ password: hashedPassword });

    // Return success response
    res.json({
      success: true,
      message: 'Password changed successfully'
    });

  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Get All Admin Profiles Route (Admin Only)
 * 
 * GET /api/admin/profiles
 * 
 * This route retrieves all admin profiles.
 * It requires admin authentication and returns all user profiles.
 */
router.get('/profiles', authenticateToken, requireAdmin, async (req, res) => {
  try {
    // Get all users with their profiles
    const users = await User.findAll({
      include: [{
        model: AdminProfile,
        as: 'profile'
      }],
      order: [['created_on', 'DESC']]
    });

    // Return users and profiles
    res.json({
      success: true,
      users: users.map(user => ({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        profile: user.profile || null,
        created_on: user.created_on,
        updated_on: user.updated_on
      }))
    });

  } catch (error) {
    console.error('Get all profiles error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

// Export the router so it can be used in the main server file
module.exports = router;
