# Admin Profile Management System

This document describes the comprehensive admin profile management system that has been implemented for the WHRIX admin dashboard.

## Overview

The profile management system allows admin users to:
- View and update their personal information
- Manage professional details
- Change security settings (password, basic info)
- Configure preferences and notifications
- Export profile data
- View profile completion statistics

## System Architecture

### Backend Components

#### 1. Database Models

**AdminProfile Model** (`src/models/adminProfile.model.js`)
- Extends basic user information with additional profile fields
- One-to-one relationship with User model
- Includes personal, professional, and preference data

**Key Fields:**
- Personal: firstName, lastName, phoneNumber, bio, profilePicture
- Professional: jobTitle, department, timezone
- Preferences: language, emailNotifications, smsNotifications
- Security: twoFactorEnabled, lastLoginAt, lastLoginIP
- Status: profileCompleted

#### 2. API Routes

**Profile Management Routes** (`src/routes/admin.js`)

- `GET /api/admin/profile` - Get current user's profile
- `POST /api/admin/profile` - Create/update profile information
- `PUT /api/admin/profile/basic` - Update basic user info (username, email)
- `PUT /api/admin/profile/password` - Change password
- `GET /api/admin/profiles` - Get all admin profiles (admin only)

#### 3. Authentication Middleware

**Auth Middleware** (`src/middleware/auth.js`)
- `authenticateToken` - Verifies JWT tokens
- `requireAdmin` - Ensures admin role access
- `requireProfileOwnership` - Validates profile access permissions

### Frontend Components

#### 1. Full Profile Page

**Profile Page** (`public/profile.html`)
- Comprehensive profile management interface
- Tabbed navigation for different sections
- Real-time form validation and submission
- Avatar upload functionality
- Responsive design

**Sections:**
- Overview: Profile statistics and completion status
- Personal Info: Name, phone, bio
- Professional: Job title, department, timezone
- Security: Password change, basic info update
- Preferences: Language, notifications

#### 2. Dashboard Integration

**Profile Dashboard Component** (`public/js/pages/profile-dashboard.js`)
- Simplified profile view within main dashboard
- Quick actions and statistics
- Links to full profile management
- Export functionality

## Setup Instructions

### 1. Database Migration

Run the migration script to create the admin_profiles table:

```bash
npm run migrate-profiles
```

This will:
- Create the admin_profiles table
- Set up relationships with existing users
- Create default profiles for existing users

### 2. Start the Server

```bash
npm start
```

### 3. Access Profile Management

1. Log in to the admin dashboard
2. Click on "Profile" in the sidebar
3. Complete your profile information
4. Use the full profile page for detailed management

## API Usage Examples

### Get Current Profile

```javascript
const response = await fetch('/api/admin/profile', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});
const data = await response.json();
```

### Update Profile Information

```javascript
const response = await fetch('/api/admin/profile', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        firstName: 'John',
        lastName: 'Doe',
        jobTitle: 'System Administrator',
        department: 'IT',
        bio: 'Experienced system administrator...'
    })
});
```

### Change Password

```javascript
const response = await fetch('/api/admin/profile/password', {
    method: 'PUT',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        currentPassword: 'oldPassword123',
        newPassword: 'newPassword456'
    })
});
```

## Security Features

### Authentication
- JWT token-based authentication
- Token verification on all profile routes
- Automatic token refresh handling

### Authorization
- Profile ownership validation
- Admin-only access to certain features
- Secure password change with current password verification

### Data Validation
- Server-side validation for all inputs
- Email format validation
- Password strength requirements
- File upload restrictions for avatars

## Profile Completion System

The system tracks profile completion based on key fields:
- Personal information (firstName, lastName, phoneNumber, bio)
- Professional information (jobTitle, department, timezone)

Completion percentage is calculated and displayed in the dashboard.

## Notification Preferences

Users can configure:
- Email notifications (enabled by default)
- SMS notifications (disabled by default)
- Language preferences
- Timezone settings

## File Upload

Profile picture uploads are handled with:
- File type validation (images only)
- File size limits (5MB max)
- Local URL generation for preview
- Integration with profile update API

## Responsive Design

Both the full profile page and dashboard component are fully responsive:
- Mobile-first design approach
- Flexible grid layouts
- Touch-friendly interface elements
- Optimized for all screen sizes

## Error Handling

Comprehensive error handling includes:
- API error responses with meaningful messages
- Client-side validation feedback
- Loading states and user feedback
- Graceful fallbacks for failed operations

## Future Enhancements

Potential improvements for the profile system:
- Two-factor authentication implementation
- Profile picture cloud storage integration
- Advanced notification preferences
- Profile activity logging
- Bulk profile management for admins
- Profile templates and presets

## Troubleshooting

### Common Issues

1. **Profile not loading**: Check authentication token and API connectivity
2. **Form submission errors**: Verify all required fields are filled
3. **Avatar upload issues**: Ensure file is under 5MB and is an image
4. **Password change fails**: Verify current password is correct

### Debug Mode

Enable debug logging by checking browser console for detailed error messages and API responses.

## Support

For technical support or feature requests related to the profile management system, please refer to the main project documentation or contact the development team.
