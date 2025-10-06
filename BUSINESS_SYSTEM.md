# Business Management System Documentation

## Overview

The Business Management System provides comprehensive CRUD (Create, Read, Update, Delete) operations for managing businesses that use the WHRIX address verification API. This system allows administrators to manage business accounts, API keys, subscription plans, and monitor usage statistics.

## Features

### 🏢 Business Management
- **Complete Business Profiles**: Store comprehensive business information including contact details, address, industry, and billing information
- **API Key Management**: Generate and regenerate secure API keys for each business
- **Subscription Plans**: Manage different subscription tiers (Free, Starter, Professional, Enterprise)
- **Status Management**: Track business status (Active, Inactive, Suspended, Pending Verification)
- **Usage Monitoring**: Track API usage, success rates, and performance metrics

### 🔐 Security & Authentication
- **Admin Authentication**: All business management operations require admin authentication
- **Secure API Keys**: Generate cryptographically secure API keys with prefixes
- **Input Validation**: Comprehensive validation for all business data fields
- **Access Control**: Role-based access control for different admin permissions

### 📊 Analytics & Reporting
- **Business Statistics**: Overview of total businesses, active businesses, and recent additions
- **Usage Analytics**: Track verification counts, success rates, and response times
- **Plan Distribution**: Monitor subscription plan distribution across businesses
- **Industry Analysis**: Analyze business distribution by industry

## Database Schema

### Business Model Fields

#### Basic Information
- `name` (String, Required): Business name
- `description` (Text, Optional): Business description
- `email` (String, Required, Unique): Primary contact email
- `phone` (String, Optional): Contact phone number
- `website` (String, Optional): Business website URL

#### Address Information
- `address` (Text, Optional): Street address
- `city` (String, Optional): City
- `state` (String, Optional): State/Province
- `country` (String, Optional): Country
- `postalCode` (String, Optional): Postal/ZIP code

#### Business Classification
- `industry` (String, Optional): Business industry
- `businessType` (Enum, Optional): Individual, Small Business, Medium Business, Enterprise, Non-Profit

#### API Integration
- `apiKey` (String, Required, Unique): Generated API key
- `apiKeyPrefix` (String, Optional): API key prefix (e.g., 'whrix_live_')
- `integrationMethod` (Enum, Optional): API, Webhook, SDK, Plugin
- `webhookUrl` (String, Optional): Webhook endpoint URL

#### Subscription & Billing
- `plan` (Enum, Required): Free, Starter, Professional, Enterprise
- `status` (Enum, Required): Active, Inactive, Suspended, Pending Verification
- `monthlyLimit` (Integer, Required): Monthly API call limit
- `billingEmail` (String, Optional): Billing contact email
- `billingAddress` (Text, Optional): Billing address

#### Usage Statistics
- `currentMonthUsage` (Integer, Required): Current month API usage
- `totalVerifications` (Integer, Required): Total lifetime verifications
- `successRate` (Decimal, Required): Success rate percentage
- `averageResponseTime` (Integer, Required): Average response time in milliseconds

#### Contact Information
- `contactPerson` (String, Optional): Primary contact person name
- `contactTitle` (String, Optional): Contact person's title

#### Security & Compliance
- `isVerified` (Boolean, Default: false): Business verification status
- `verificationDate` (Date, Optional): Date of verification
- `lastActivityAt` (Date, Optional): Last activity timestamp
- `lastApiCallAt` (Date, Optional): Last API call timestamp

#### Additional Data
- `settings` (JSON, Optional): Flexible settings storage
- `notes` (Text, Optional): Admin notes
- `created_on` (Date, Required): Creation timestamp
- `updated_on` (Date, Required): Last update timestamp

## API Endpoints

### Business Management

#### Get All Businesses
```
GET /api/businesses
```
**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10)
- `search` (string): Search term for name, email, or industry
- `status` (string): Filter by status (all, active, inactive, suspended, pending_verification)
- `plan` (string): Filter by plan (all, free, starter, professional, enterprise)
- `industry` (string): Filter by industry
- `sortBy` (string): Sort field (default: created_on)
- `sortOrder` (string): Sort order (ASC, DESC)

**Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50,
    "itemsPerPage": 10,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

#### Get Single Business
```
GET /api/businesses/:id
```

#### Create Business
```
POST /api/businesses
```
**Required Fields:** `name`, `email`
**Optional Fields:** All other business fields

#### Update Business
```
PUT /api/businesses/:id
```

#### Delete Business
```
DELETE /api/businesses/:id
```

### Business Actions

#### Regenerate API Key
```
POST /api/businesses/:id/regenerate-api-key
```

#### Verify Business
```
POST /api/businesses/:id/verify
```

#### Suspend Business
```
POST /api/businesses/:id/suspend
```
**Body:** `{ "reason": "Optional suspension reason" }`

### Statistics

#### Get Business Statistics
```
GET /api/businesses/statistics/overview
```
**Response:**
```json
{
  "success": true,
  "data": {
    "totalBusinesses": 150,
    "activeBusinesses": 120,
    "recentBusinesses": 15,
    "totalVerifications": 50000,
    "averageSuccessRate": "98.5",
    "businessesByPlan": [...],
    "businessesByIndustry": [...]
  }
}
```

## Frontend Components

### Businesses Page Features

#### Search & Filtering
- **Text Search**: Search by business name, email, or industry
- **Status Filter**: Filter by business status
- **Plan Filter**: Filter by subscription plan
- **Industry Filter**: Filter by business industry
- **Real-time Search**: Search updates as you type

#### Business Cards
- **Clean Design**: Removed unnecessary hover effects for better UX
- **Comprehensive Info**: Display key business information at a glance
- **Action Menu**: Context menu with edit, delete, verify, suspend options
- **Status Indicators**: Color-coded status and plan badges
- **Usage Stats**: Display verification counts and success rates

#### Business Management
- **Add Business Modal**: Create new businesses with comprehensive form
- **Pagination**: Navigate through large lists of businesses
- **Bulk Actions**: Perform actions on multiple businesses
- **Real-time Updates**: Live updates when data changes

#### Responsive Design
- **Mobile Friendly**: Optimized for all screen sizes
- **Grid Layout**: Responsive grid that adapts to screen width
- **Touch Friendly**: Optimized for touch interactions

## Setup Instructions

### 1. Database Migration
```bash
# Run the business table migration
npm run migrate-businesses
```

### 2. Environment Variables
Ensure your `.env` file contains:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
JWT_SECRET=your_jwt_secret
```

### 3. Start the Server
```bash
# Start the development server
npm run dev

# Or start the production server
npm start
```

## Usage Examples

### Creating a New Business
```javascript
const newBusiness = {
  name: "TechCorp Solutions",
  email: "contact@techcorp.com",
  industry: "Technology",
  plan: "professional",
  phone: "+1-555-0123",
  website: "https://techcorp.com",
  address: "123 Tech Street, San Francisco, CA 94105",
  businessType: "medium_business",
  monthlyLimit: 10000
};

const response = await fetch('/api/businesses', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${adminToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newBusiness)
});
```

### Getting Business Statistics
```javascript
const response = await fetch('/api/businesses/statistics/overview', {
  headers: {
    'Authorization': `Bearer ${adminToken}`
  }
});

const stats = await response.json();
console.log(`Total Businesses: ${stats.data.totalBusinesses}`);
console.log(`Active Businesses: ${stats.data.activeBusinesses}`);
```

## Security Considerations

### API Key Security
- **Secure Generation**: API keys are generated using Node.js crypto module
- **Unique Keys**: Each business gets a unique API key
- **Prefix System**: API keys include prefixes for easy identification
- **Regeneration**: API keys can be regenerated if compromised

### Data Validation
- **Input Sanitization**: All inputs are validated and sanitized
- **Email Validation**: Email addresses are validated for proper format
- **URL Validation**: Website URLs are validated for proper format
- **Required Fields**: Critical fields are enforced as required

### Access Control
- **Admin Authentication**: All endpoints require valid admin authentication
- **JWT Tokens**: Secure token-based authentication
- **Role-based Access**: Different permission levels for different admin roles

## Performance Optimizations

### Database Indexes
- **Email Index**: Fast lookups by email address
- **API Key Index**: Fast lookups by API key
- **Status Index**: Fast filtering by status
- **Plan Index**: Fast filtering by subscription plan
- **Industry Index**: Fast filtering by industry
- **Created Date Index**: Fast sorting by creation date

### Pagination
- **Efficient Queries**: Only load necessary data for current page
- **Configurable Limits**: Adjustable page sizes for different use cases
- **Total Count**: Accurate total count for pagination controls

### Caching
- **Response Caching**: Cache frequently accessed data
- **Statistics Caching**: Cache business statistics for better performance

## Error Handling

### Client-side Error Handling
- **Network Errors**: Handle connection issues gracefully
- **Authentication Errors**: Redirect to login on token expiration
- **Validation Errors**: Display user-friendly error messages
- **Loading States**: Show loading indicators during API calls

### Server-side Error Handling
- **Database Errors**: Handle database connection and query errors
- **Validation Errors**: Return detailed validation error messages
- **Authentication Errors**: Return appropriate authentication error codes
- **Logging**: Comprehensive error logging for debugging

## Future Enhancements

### Planned Features
- **Business Analytics Dashboard**: Detailed analytics for individual businesses
- **Bulk Operations**: Import/export businesses in bulk
- **Advanced Filtering**: More sophisticated filtering options
- **Business Templates**: Pre-configured business templates
- **Integration Testing**: Built-in API testing tools
- **Usage Alerts**: Automated alerts for usage limits
- **Business Onboarding**: Guided setup process for new businesses

### API Enhancements
- **Webhook Management**: Advanced webhook configuration
- **Rate Limiting**: Per-business rate limiting
- **Usage Analytics**: Detailed usage analytics and reporting
- **Custom Fields**: Configurable custom fields for businesses
- **Business Groups**: Organize businesses into groups
- **API Versioning**: Support for multiple API versions

## Troubleshooting

### Common Issues

#### Database Connection Errors
- Verify database credentials in `.env` file
- Ensure database server is running
- Check network connectivity

#### Authentication Errors
- Verify JWT secret is set correctly
- Check token expiration
- Ensure proper authorization headers

#### API Key Generation Errors
- Verify crypto module is available
- Check for sufficient entropy
- Ensure unique key generation

### Debug Mode
Enable debug logging by setting:
```env
DEBUG=true
NODE_ENV=development
```

## Support

For technical support or questions about the Business Management System:
- Check the troubleshooting section above
- Review the API documentation
- Check server logs for detailed error messages
- Ensure all dependencies are properly installed

---

**Last Updated:** December 2024  
**Version:** 1.0.0  
**Author:** WHRIX Development Team
