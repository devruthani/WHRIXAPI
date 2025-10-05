# Whrix API - Admin Dashboard

A Node.js/Express.js API with Vue.js admin dashboard for managing careers and user authentication.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MySQL database
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Setup:**
   Your `.env` file is already configured with the production database credentials.

3. **Create Admin User:**
   ```bash
   npm run setup
   ```

4. **Start the Server:**
   ```bash
   npm start
   ```

5. **Access Admin Dashboard:**
   - URL: `http://localhost:3014/` (index.html is the login page)
   - Username: `admin`
   - Password: `admin123`

## 📋 Admin Credentials

### Default Admin Account
- **Username:** `admin`
- **Password:** `admin123`
- **Email:** `admin@whrix.com`
- **Role:** `admin`

> ⚠️ **Important:** Change the default password after first login for security.

## 🛠️ Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server
- `npm run setup` - Create default admin user
- `npm test` - Run tests (placeholder)

## 📁 Project Structure

```
PESACPROJECT/
├── src/                        # Backend source code
│   ├── config/
│   │   └── database.js          # Database connection configuration using Sequelize
│   ├── models/                 # Database models (data structure definitions)
│   │   ├── career.model.js      # Career/job posting model with fields like title, location, etc.
│   │   ├── user.model.js        # User model for admin authentication with password reset
│   │   ├── timestamp.js         # Reusable utility for adding created_on/updated_on fields
│   │   └── index.js             # Central hub that exports all models
│   └── routes/                 # API route handlers
│       ├── admin.js             # Admin authentication routes (login, password reset, token verification)
│       └── server.js            # Main server routes (currently empty)
├── public/                     # Frontend static files (served directly by Express)
│   ├── index.html              # Main login page (Vue.js application)
│   ├── forgot-password.html    # Password reset page (Vue.js application)
│   ├── dashboard.html          # Admin dashboard (Vue.js application)
│   └── logo.png               # WHRIX company logo
├── index.js                   # Main server entry point - sets up Express, database, and routes
├── create-admin.js            # Setup script to create default admin user
├── package.json               # Node.js dependencies and scripts
├── .env                       # Environment variables (database credentials, JWT secret)
└── README.md                  # This documentation file
```

### 🔧 Code Architecture Explanation

#### **Backend Structure (Node.js/Express)**
- **`index.js`**: Main server file that initializes Express, connects to database, and starts the server
- **`src/config/database.js`**: Database connection setup using Sequelize ORM for MySQL
- **`src/models/`**: Database models that define the structure of our data tables
- **`src/routes/admin.js`**: API endpoints for authentication (login, password reset, token verification)

#### **Frontend Structure (Vue.js CDN)**
- **`public/index.html`**: Login page with Vue.js application, form validation, and API integration
- **`public/forgot-password.html`**: Password reset page with token-based reset flow
- **`public/dashboard.html`**: Admin dashboard with sidebar navigation and user management

#### **Key Features**
- **JWT Authentication**: Secure token-based authentication system
- **Password Hashing**: bcrypt for secure password storage
- **Form Validation**: Real-time client-side validation with visual feedback
- **Responsive Design**: Mobile-first design that works on all devices
- **Error Handling**: Comprehensive error handling with user-friendly messages

## 🔐 API Endpoints

### Admin Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/forgot-password` - Request password reset
- `POST /api/admin/reset-password` - Reset password with token
- `GET /api/admin/verify-token` - Verify JWT token

### Example Login Request:
```json
POST /api/admin/login
{
  "username": "admin",
  "password": "admin123"
}
```

## 🎨 Frontend Features

- **Vue.js 3** with CDN
- **Responsive Design** for mobile and desktop
- **Modern UI/UX** with gradient backgrounds
- **JWT Authentication** with secure token handling
- **Password Reset Flow** with email tokens
- **Dashboard with Sidebar** navigation
- **Real-time Form Validation**

## 🗄️ Database Models

### User Model
- `username` (unique)
- `email` (unique)
- `password` (hashed)
- `role` (admin/user)
- `isActive` (boolean)
- `resetToken` (for password reset)
- `resetTokenExpiry` (token expiration)
- `created_on`, `updated_on` (timestamps)

### Career Model
- `title`
- `location`
- `type`
- `department`
- `experience`
- `description`
- `created_on`, `updated_on` (timestamps)

## 🔧 Configuration

The application uses the following environment variables:
- `PORT` - Server port (default: 3014)
- `DB_HOST` - Database host
- `DB_USER` - Database username
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name
- `DB_DIALECT` - Database dialect (mysql)
- `DB_PORT` - Database port

## 🚨 Security Notes

- Passwords are hashed using bcryptjs
- JWT tokens expire after 24 hours
- Password reset tokens expire after 1 hour
- All API endpoints include proper validation
- CORS and security headers should be added for production

## 📝 Development Notes

- The admin dashboard includes placeholder sections for future features
- Password reset tokens are logged to console for development
- Database sync is set to `alter: true` for development
- Static files are served from the `public` directory

## 💬 Code Comments & Documentation

This project includes comprehensive, beginner-friendly comments throughout the codebase:

### **Backend Comments**
- **File Headers**: Each file has a detailed header explaining its purpose
- **Function Documentation**: All functions include JSDoc-style comments with parameters and return values
- **Inline Comments**: Complex logic is explained with inline comments
- **Security Notes**: Important security considerations are highlighted
- **Database Explanations**: Sequelize operations are thoroughly documented

### **Frontend Comments**
- **HTML Structure**: Semantic HTML with comments explaining each section
- **CSS Organization**: Comments explaining design decisions and responsive breakpoints
- **Vue.js Components**: Detailed comments for data properties, methods, and lifecycle hooks
- **API Integration**: Comments explaining axios requests and error handling
- **User Experience**: Comments explaining UX decisions and accessibility features

### **Comment Standards**
- **Beginner-Friendly**: Comments assume no prior knowledge of the technologies used
- **Descriptive**: Comments explain the "why" behind code, not just the "what"
- **Consistent**: All comments follow the same format and style
- **Comprehensive**: Every major function and complex logic is documented
- **Educational**: Comments serve as a learning resource for developers

### **Example Comment Style**
```javascript
/**
 * Login Method
 * 
 * Handles the login process including:
 * 1. Form validation
 * 2. API request to backend
 * 3. Token storage
 * 4. User feedback
 * 5. Redirect to dashboard
 */
async login() {
    // Step 1: Validate form fields before submission
    this.validateUsername();
    this.validatePassword();
    
    // If form is invalid, show error and stop
    if (!this.isFormValid) {
        this.showAlert('Please fix the form errors before submitting');
        return;
    }
    // ... rest of the method
}
```

## 🎯 Next Steps

- Add CORS middleware for production
- Implement email service for password reset
- Add more admin dashboard features
- Implement career management CRUD operations
- Add user management functionality
- Add logging and monitoring

---

**Created with ❤️ for Whrix Platform**
