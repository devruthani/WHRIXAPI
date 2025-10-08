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
  const { User, AdminProfile, Career, Business, Solution, Solutioncards, ProofSection, ProofStat, ProofTestimonial, ProofTrustedLogo 
, Featuregrid, Featuregridcard, ProjectStat, ProjectSection, ProjectCaseStudies, PricingAddOn, PricingFeature, PricingFaq, PricingPlan, PricingSection

  } = models;

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


  // landing associations
  Solution.hasMany(Solutioncards, { 
  foreignKey: "section_id",   //foreignKey in solution table
  as: "Solution" });          //Alias for the relationship

  Solutioncards.belongsTo(Solution, { 
  foreignKey: "section_id",   //foreignKey in solutioncard table
  as: "Solutioncards" });      //Alias for the relationship

  /* -------------------- foreignkeys to proofsection table ------------------- */
  ProofSection.hasMany(ProofStat, {
  foreignKey: "proof_section_id",
  as: "stats",
});
ProofStat.belongsTo(ProofSection, { foreignKey: "proof_section_id" });

ProofSection.hasMany(ProofTestimonial, {
  foreignKey: "proof_section_id",
  as: "testimonials",
});
ProofTestimonial.belongsTo(ProofSection, { foreignKey: "proof_section_id" });

ProofSection.hasMany(ProofTrustedLogo, {
  foreignKey: "proof_section_id",
  as: "trusted_logos",
});
ProofTrustedLogo.belongsTo(ProofSection, { foreignKey: "proof_section_id" });

/* ------------------ foreignkey to project section tabele ------------------ */
//  One Project Section → Many Case Studies
  ProjectSection.hasMany(ProjectCaseStudies, {
    foreignKey: "section_id",
    as: "case_studies",
    onDelete: "CASCADE",
  });

  ProjectCaseStudies.belongsTo(ProjectSection, {
    foreignKey: "section_id",
    as: "section",
  });

  // One Project Section → Many Stats
  ProjectSection.hasMany(ProjectStat, {
    foreignKey: "section_id",
    as: "stats",
    onDelete: "CASCADE",
  });

  ProjectStat.belongsTo(ProjectSection, {
    foreignKey: "section_id",
    as: "section",
  });
/* -------------------- association for pricing sections -------------------- */
 
    PricingSection.hasMany(models.PricingPlan, {
      foreignKey: "section_id",
      as: "plans",
      onDelete: "CASCADE",
    });
    PricingSection.hasMany(models.PricingAddOn, {
      foreignKey: "section_id",
      as: "addons",
      onDelete: "CASCADE",
    });
    PricingSection.hasMany(models.PricingFaq, {
      foreignKey: "section_id",
      as: "faqs",
      onDelete: "CASCADE",
    });
 
  PricingPlan.associate = (models) => {
    PricingPlan.hasMany(models.PricingFeature, {
      foreignKey: "plan_id",
      as: "features",
      onDelete: "CASCADE",
    });
  };




  // Note: Career model doesn't have direct relationships with User/AdminProfile
  // but could be extended in the future if needed (e.g., who created each career posting)
};

module.exports = defineAssociations;
