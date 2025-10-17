/**
 * Model Associations
 * 
 * This file defines the relationships between our database models.
 * It sets up associations like one-to-one, one-to-many, and many-to-many relationships.
 * 
 * This is a common pattern in Sequelize applications to keep associations organized.
 */

const { Association } = require("sequelize");

/**
 * Define Model Associations
 * 
 * This function sets up all the relationships between our models.
 * It should be called after all models are defined but before the application starts.
 * 
 * @param {Object} models - Object containing all our models
 */
const defineAssociations = (models) => {
    const { User, AdminProfile, Business, Solution, Solutioncards, ProofSection, ProofStat, ProofTestimonial, ProofTrustedLogo, 
    ProjectStat, ProjectSection, ProjectCaseStudies, PricingPlan, PricingAddOn, PricingFaq, PricingSection, PricingFeature, AboutSection, 
    AboutStat, CareerJobListing, CareerBenefit, CareerPage, ContactPage, ContactFaq, DeveloperEndpoint, DeveloperPage, DeveloperSdk,
    InteractiveAfricanMap, MapCountry, FeatureGrid, FeaturegridItem

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


    PricingSection.hasMany(PricingPlan, {
      foreignKey: "section_id",
      as: "plans",
      onDelete: "CASCADE",
    });
    PricingSection.hasMany(PricingAddOn, {
      foreignKey: "section_id",
      as: "addons",
      onDelete: "CASCADE",
    });
    PricingSection.hasMany(PricingFaq, {
      foreignKey: "section_id",
      as: "faqs",
      onDelete: "CASCADE",
    });
 
  
    PricingPlan.hasMany(PricingFeature, {
      foreignKey: "plan_id",
      as: "features",
      onDelete: "CASCADE",
    });
  
  /* ----------------------- association for about page ----------------------- */

 
    AboutSection.hasMany(AboutStat, {
      foreignKey: "about_id",
      as: "stats",
      onDelete: "CASCADE",
    });
    AboutStat.belongsTo(AboutSection, {
      foreignKey: "about_id",
      as: "stats",
     
    });
    /* --------------------------- career Association --------------------------- */
    // === Associations ===

    CareerPage.hasMany(CareerJobListing, {
      foreignKey: "careerpage_id",
      as: "joblisting",
      onDelete: "CASCADE",
    });

    CareerPage.hasMany(CareerBenefit, {
      foreignKey: "careerpage_id",
      as: "careerbenefit",
      onDelete: "CASCADE",
    });

     CareerJobListing.belongsTo(CareerPage, {
      foreignKey: "careerpage_id",
      as: "joblisting",
    });
       CareerBenefit.belongsTo(CareerPage, {
      foreignKey: "careerpage_id",
      as: "careerbenefit",
    });
    /* ------------------------ contact page association ------------------------ */

    ContactPage.hasMany(ContactFaq, { 
      foreignKey: "contactPageId",
      as: "contactFaq",
        onDelete: "CASCADE" 
      });

  ContactFaq.belongsTo(ContactPage, 
    { foreignKey: "contactPageId",
      as: "contactFaq", 

    });
    /* --------------------- Association for developers page -------------------- */
        // One Developer Page has many SDKs
    DeveloperPage.hasMany(DeveloperSdk, {
      foreignKey: "developerpageid",
      as: "sdks",
      onDelete: "CASCADE",
    });

      // One Developer Page has many API Endpoints
    DeveloperPage.hasMany(DeveloperEndpoint, {
      foreignKey: "developerpageid",
      as: "endpoints",
      onDelete: "CASCADE",
    });

     DeveloperSdk.belongsTo(DeveloperPage, {
      foreignKey: "developerpageid",
      as: "developerPage",
    });

     DeveloperEndpoint.belongsTo(DeveloperPage, {
      foreignKey: "developerpageid",
      as: "developerPage",
    });

    /* -------------------- InteractiveAfricanMap association ------------------- */

    InteractiveAfricanMap.hasMany(MapCountry, {
    foreignKey: "mapId",
    as: "countries",
    onDelete: "CASCADE",
  });

  MapCountry.belongsTo(InteractiveAfricanMap, {
    foreignKey: "mapId",
    as: "map",
  });

  /* ------------------------- featuregrid association ------------------------ */
  

  FeatureGrid.hasMany(FeaturegridItem, {
    foreignKey: "featuregridId",
    as: "features",
    onDelete: "CASCADE",
  });

  FeaturegridItem.belongsTo(FeatureGrid, {
    foreignKey: "featuregridId",
    as: "featureGrid",
  });


  // Note: Career model doesn't have direct relationships with User/AdminProfile
  // but could be extended in the future if needed (e.g., who created each career posting)
};

module.exports = defineAssociations;
