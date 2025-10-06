/**
 * Model Associations
 * 
 * This file defines the relationships between our database models.
 * It sets up associations like one-to-one, one-to-many, and many-to-many relationships.
 * 
 * This is a common pattern in Sequelize applications to keep associations organized.
 */

/**
 * Define Model Associations
 * 
 * This function sets up all the relationships between our models.
 * It should be called after all models are defined but before the application starts.
 * 
 * @param {Object} models - Object containing all our models
 */
const defineAssociations = (models) => {
  const { User, AdminProfile, Career, Business } = models;

  // User to AdminProfile: One-to-One relationship
  // A user can have one profile, and a profile belongs to one user
  User.hasOne(AdminProfile, {
    foreignKey: 'userId',        // Foreign key in AdminProfile table
    as: 'profile',               // Alias for the relationship
    onDelete: 'CASCADE'          // If user is deleted, delete their profile too
  });

  AdminProfile.belongsTo(User, {
    foreignKey: 'userId',        // Foreign key in AdminProfile table
    as: 'user'                   // Alias for the relationship
  });

  // Note: Career model doesn't have direct relationships with User/AdminProfile
  // but could be extended in the future if needed (e.g., who created each career posting)
};

module.exports = defineAssociations;
