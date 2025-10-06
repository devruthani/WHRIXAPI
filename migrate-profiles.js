/**
 * Database Migration Script for Admin Profiles
 * 
 * This script creates the admin_profiles table and sets up the relationship
 * with the existing users table. Run this after setting up your database.
 */

const { sequelize, User, AdminProfile } = require('./src/models');

async function migrateProfiles() {
    try {
        console.log('Starting profile migration...');
        
        // Sync the database to create the admin_profiles table
        await sequelize.sync({ force: false });
        console.log('✅ Database tables synchronized');
        
        // Check if we have any existing users
        const userCount = await User.count();
        console.log(`📊 Found ${userCount} existing users`);
        
        // Create default profiles for existing users if they don't have one
        if (userCount > 0) {
            const users = await User.findAll();
            
            for (const user of users) {
                const existingProfile = await AdminProfile.findOne({ 
                    where: { userId: user.id } 
                });
                
                if (!existingProfile) {
                    await AdminProfile.create({
                        userId: user.id,
                        profileCompleted: false,
                        emailNotifications: true,
                        smsNotifications: false,
                        twoFactorEnabled: false,
                        language: 'en'
                    });
                    console.log(`✅ Created profile for user: ${user.username}`);
                } else {
                    console.log(`ℹ️  Profile already exists for user: ${user.username}`);
                }
            }
        }
        
        console.log('🎉 Profile migration completed successfully!');
        console.log('\nNext steps:');
        console.log('1. Start your server: npm start');
        console.log('2. Visit the dashboard and click on "Profile"');
        console.log('3. Complete your profile information');
        
    } catch (error) {
        console.error('❌ Migration failed:', error);
        process.exit(1);
    } finally {
        await sequelize.close();
    }
}

// Run the migration
migrateProfiles();
