
/**
 * FeatureGrid Model
 * 
 * Represents the main "Feature Section" displayed on the homepage or
 * features page. Each FeatureGrid can contain multiple FeatureItems.
 */

const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const FeatureGrid = sequelize.define("FeatureGrid", {
    // === Section Header ===
    section_tag: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Small label above the title (e.g., 'AFRICAN EXCELLENCE')",
    },
    section_title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Main headline text (e.g., 'Built for Africa, Trusted Worldwide')",
    },
    section_highlight: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Highlighted part of the title (e.g., 'Trusted Worldwide')",
    },
    section_description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Short paragraph explaining the section's purpose",
    },
    ...generateTimestamps(),
    
    
  },
   {
    tableName: "Featuregrids",
    timestamps: false,
  });
  
  return FeatureGrid;
};
