
const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * Contact Page Model Structure
   *
   * This schema defines all fields used to dynamically populate and
   * manage the Contact page of the website.
   * It includes sections for hero content, support options,
   * office locations, and form submissions.
   */
  const ContactPage = sequelize.define(
    "ContactPage",
    {
      // === Hero Section ===
      hero_tagline: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Short label displayed above the hero heading, e.g., 'GET IN TOUCH'",
      },
      hero_title: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Main hero headline, e.g., 'Ready to Transform Your Business?'",
      },
      hero_highlight: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Highlighted text within hero title, e.g., 'Business?'",
      },
      hero_description: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Short paragraph below hero title describing the page purpose.",
      },

      // === Support Options Section ===
      support_title: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Title for support options section, e.g., 'Multiple Ways to Connect'",
      },
      support_subtitle: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Subtitle describing different ways users can reach support.",
      },

      // === FAQ Section (optional global description) ===
      faq_title: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Main heading for FAQ section.",
      },
      faq_description: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Introductory paragraph describing the FAQ section.",
      },

      ...generateTimestamps(),
    },
    {
      tableName: "ContactPages",
      timestamps: false,
    }
  );

  return ContactPage;
};
