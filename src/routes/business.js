/**
 * Business Management Routes
 * 
 * This file contains all the API routes for business management including:
 * - Create, Read, Update, Delete (CRUD) operations
 * - Business statistics and analytics
 * - API key management
 * - Business verification
 * 
 * These routes handle the backend logic for the business management system.
 */

// Import required modules
const express = require('express');     // Web framework for creating API routes
const crypto = require('crypto');       // Built-in Node.js module for generating secure random tokens
const { Business } = require('../models');  // Import our models from the models directory
const { authenticateToken, requireAdmin } = require('../middleware/auth'); // Import authentication middleware

// Create an Express router to handle our business routes
const router = express.Router();

/**
 * Generate API Key
 * 
 * This function generates a secure API key for businesses
 * @returns {string} Generated API key
 */
function generateApiKey() {
  const prefix = 'whrix_live_';
  const randomBytes = crypto.randomBytes(24).toString('hex');
  return prefix + randomBytes;
}

/**
 * Get All Businesses Route
 * 
 * GET /api/businesses
 * 
 * This route retrieves all businesses with optional filtering and pagination.
 * It requires admin authentication and returns a paginated list of businesses.
 */
router.get('/', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      search = '', 
      status = 'all', 
      plan = 'all',
      industry = 'all',
      sortBy = 'created_on',
      sortOrder = 'DESC'
    } = req.query;

    // Calculate offset for pagination
    const offset = (parseInt(page) - 1) * parseInt(limit);

    // Build where clause for filtering
    const whereClause = {};
    
    if (search) {
      whereClause[require('sequelize').Op.or] = [
        { name: { [require('sequelize').Op.like]: `%${search}%` } },
        { email: { [require('sequelize').Op.like]: `%${search}%` } },
        { industry: { [require('sequelize').Op.like]: `%${search}%` } }
      ];
    }
    
    if (status !== 'all') {
      whereClause.status = status;
    }
    
    if (plan !== 'all') {
      whereClause.plan = plan;
    }
    
    if (industry !== 'all') {
      whereClause.industry = industry;
    }

    // Get businesses with pagination
    const { count, rows: businesses } = await Business.findAndCountAll({
      where: whereClause,
      order: [[sortBy, sortOrder.toUpperCase()]],
      limit: parseInt(limit),
      offset: offset
    });

    // Calculate pagination info
    const totalPages = Math.ceil(count / parseInt(limit));
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    // Return paginated response
    res.json({
      success: true,
      data: businesses,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalItems: count,
        itemsPerPage: parseInt(limit),
        hasNextPage,
        hasPrevPage
      }
    });

  } catch (error) {
    console.error('Get businesses error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Get Single Business Route
 * 
 * GET /api/businesses/:id
 * 
 * This route retrieves a single business by ID.
 * It requires admin authentication.
 */
router.get('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    // Find business by ID
    const business = await Business.findByPk(id);

    if (!business) {
      return res.status(404).json({ 
        success: false, 
        message: 'Business not found' 
      });
    }

    // Return business data
    res.json({
      success: true,
      data: business
    });

  } catch (error) {
    console.error('Get business error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Create Business Route
 * 
 * POST /api/businesses
 * 
 * This route creates a new business.
 * It requires admin authentication and validates the input data.
 */
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const {
      name,
      description,
      email,
      phone,
      website,
      address,
      city,
      state,
      country,
      postalCode,
      industry,
      businessType,
      plan = 'free',
      status = 'pending_verification',
      monthlyLimit = 1000,
      contactPerson,
      contactTitle,
      integrationMethod,
      webhookUrl,
      billingEmail,
      billingAddress,
      settings,
      notes
    } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and email are required' 
      });
    }

    // Check if business with this email already exists
    const existingBusiness = await Business.findOne({ where: { email } });
    if (existingBusiness) {
      return res.status(400).json({ 
        success: false, 
        message: 'Business with this email already exists' 
      });
    }

    // Generate API key
    const apiKey = generateApiKey();

    // Create new business
    const business = await Business.create({
      name,
      description,
      email,
      phone,
      website,
      address,
      city,
      state,
      country,
      postalCode,
      industry,
      businessType,
      apiKey,
      apiKeyPrefix: 'whrix_live_',
      plan,
      status,
      monthlyLimit,
      contactPerson,
      contactTitle,
      integrationMethod,
      webhookUrl,
      billingEmail,
      billingAddress,
      settings,
      notes
    });

    // Return created business (without sensitive data in production)
    res.status(201).json({
      success: true,
      message: 'Business created successfully',
      data: business
    });

  } catch (error) {
    console.error('Create business error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Update Business Route
 * 
 * PUT /api/businesses/:id
 * 
 * This route updates an existing business.
 * It requires admin authentication and validates the input data.
 */
router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Find business by ID
    const business = await Business.findByPk(id);
    if (!business) {
      return res.status(404).json({ 
        success: false, 
        message: 'Business not found' 
      });
    }

    // Check if email is being changed and if it already exists
    if (updateData.email && updateData.email !== business.email) {
      const existingBusiness = await Business.findOne({ 
        where: { 
          email: updateData.email,
          id: { [require('sequelize').Op.ne]: id }
        } 
      });
      
      if (existingBusiness) {
        return res.status(400).json({ 
          success: false, 
          message: 'Business with this email already exists' 
        });
      }
    }

    // Update business
    await business.update(updateData);

    // Return updated business
    res.json({
      success: true,
      message: 'Business updated successfully',
      data: business
    });

  } catch (error) {
    console.error('Update business error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Delete Business Route
 * 
 * DELETE /api/businesses/:id
 * 
 * This route deletes a business.
 * It requires admin authentication.
 */
router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    // Find business by ID
    const business = await Business.findByPk(id);
    if (!business) {
      return res.status(404).json({ 
        success: false, 
        message: 'Business not found' 
      });
    }

    // Delete business
    await business.destroy();

    // Return success response
    res.json({
      success: true,
      message: 'Business deleted successfully'
    });

  } catch (error) {
    console.error('Delete business error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Regenerate API Key Route
 * 
 * POST /api/businesses/:id/regenerate-api-key
 * 
 * This route regenerates the API key for a business.
 * It requires admin authentication.
 */
router.post('/:id/regenerate-api-key', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    // Find business by ID
    const business = await Business.findByPk(id);
    if (!business) {
      return res.status(404).json({ 
        success: false, 
        message: 'Business not found' 
      });
    }

    // Generate new API key
    const newApiKey = generateApiKey();

    // Update business with new API key
    await business.update({ 
      apiKey: newApiKey,
      apiKeyPrefix: 'whrix_live_'
    });

    // Return success response with new API key
    res.json({
      success: true,
      message: 'API key regenerated successfully',
      data: {
        apiKey: newApiKey
      }
    });

  } catch (error) {
    console.error('Regenerate API key error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Verify Business Route
 * 
 * POST /api/businesses/:id/verify
 * 
 * This route verifies a business.
 * It requires admin authentication.
 */
router.post('/:id/verify', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    // Find business by ID
    const business = await Business.findByPk(id);
    if (!business) {
      return res.status(404).json({ 
        success: false, 
        message: 'Business not found' 
      });
    }

    // Update business status to active and set verification date
    await business.update({ 
      isVerified: true,
      status: 'active',
      verificationDate: new Date()
    });

    // Return success response
    res.json({
      success: true,
      message: 'Business verified successfully',
      data: business
    });

  } catch (error) {
    console.error('Verify business error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Suspend Business Route
 * 
 * POST /api/businesses/:id/suspend
 * 
 * This route suspends a business.
 * It requires admin authentication.
 */
router.post('/:id/suspend', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    // Find business by ID
    const business = await Business.findByPk(id);
    if (!business) {
      return res.status(404).json({ 
        success: false, 
        message: 'Business not found' 
      });
    }

    // Update business status to suspended
    await business.update({ 
      status: 'suspended',
      notes: reason ? `${business.notes || ''}\nSuspended: ${reason}`.trim() : business.notes
    });

    // Return success response
    res.json({
      success: true,
      message: 'Business suspended successfully',
      data: business
    });

  } catch (error) {
    console.error('Suspend business error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

/**
 * Get Business Statistics Route
 * 
 * GET /api/businesses/statistics
 * 
 * This route retrieves business statistics.
 * It requires admin authentication.
 */
router.get('/statistics/overview', authenticateToken, requireAdmin, async (req, res) => {
  try {
    // Get total businesses count
    const totalBusinesses = await Business.count();

    // Get active businesses count
    const activeBusinesses = await Business.count({
      where: { status: 'active' }
    });

    // Get businesses by plan
    const businessesByPlan = await Business.findAll({
      attributes: [
        'plan',
        [require('sequelize').fn('COUNT', require('sequelize').col('id')), 'count']
      ],
      group: ['plan']
    });

    // Get businesses by industry
    const businessesByIndustry = await Business.findAll({
      attributes: [
        'industry',
        [require('sequelize').fn('COUNT', require('sequelize').col('id')), 'count']
      ],
      group: ['industry'],
      order: [[require('sequelize').fn('COUNT', require('sequelize').col('id')), 'DESC']],
      limit: 10
    });

    // Get recent businesses (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentBusinesses = await Business.count({
      where: {
        created_on: {
          [require('sequelize').Op.gte]: thirtyDaysAgo
        }
      }
    });

    // Calculate total verifications across all businesses
    const totalVerifications = await Business.sum('totalVerifications');

    // Calculate average success rate
    const avgSuccessRate = await Business.findOne({
      attributes: [
        [require('sequelize').fn('AVG', require('sequelize').col('successRate')), 'avgSuccessRate']
      ]
    });

    // Return statistics
    res.json({
      success: true,
      data: {
        totalBusinesses,
        activeBusinesses,
        recentBusinesses,
        totalVerifications: totalVerifications || 0,
        averageSuccessRate: parseFloat(avgSuccessRate?.dataValues?.avgSuccessRate || 0).toFixed(2),
        businessesByPlan: businessesByPlan.map(item => ({
          plan: item.plan,
          count: parseInt(item.dataValues.count)
        })),
        businessesByIndustry: businessesByIndustry.map(item => ({
          industry: item.industry || 'Unknown',
          count: parseInt(item.dataValues.count)
        }))
      }
    });

  } catch (error) {
    console.error('Get business statistics error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

// Export the router so it can be used in the main server file
module.exports = router;
