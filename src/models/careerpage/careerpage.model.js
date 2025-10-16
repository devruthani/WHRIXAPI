const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * CareerPage Model
   *
   * Represents the overall "Careers" page structure, including:
   * - Hero Section
   * - Why Join Us Section
   * - Call-to-Action (CTA) Section
   *
   * Associations:
   * - Has many JobListings
   * - Has many CareerBenefits
   */
  const CareerPage = sequelize.define(
    "CareerPage",
    {
      // === Hero Section ===
      hero_badge: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Small badge text above hero title, e.g. 'JOIN OUR TEAM'",
      },
      hero_title: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Main hero headline, e.g. 'Build the Future of African Location Intelligence'",
      },
      hero_highlight: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Highlighted portion of the hero title, e.g. 'African Location Intelligence'",
      },
      hero_subtext: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Supporting text describing the company mission or purpose",
      },

      // === Why Join Us Section ===
      why_join_title: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Title for 'Why Join Us' section, e.g. 'Why Work With Us'",
      },
      why_join_description: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Paragraph explaining the purpose or culture behind the 'Why Join Us' section",
      },

      // === CTA Section ===
      cta_title: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Main call-to-action heading, e.g. 'Don't See Your Perfect Role?'",
      },
      cta_description: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Supporting text encouraging users to reach out or apply",
      },
      cta_primary_text: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Text for primary CTA button, e.g. 'Send Your Resume'",
      },
      cta_secondary_text: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Text for secondary CTA button, e.g. 'Learn About Our Culture'",
      },

      ...generateTimestamps(),
    },
    {
      tableName: "CareerPages",
      timestamps: false,
    }
  );

  
  

  return CareerPage;
};
