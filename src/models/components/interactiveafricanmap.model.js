
const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

/**
 * Interactive African Map Model
 * 
 * Stores the global content for the Interactive African Map section —
 * including headline text, description, global statistics, and CTA data.
 */


module.exports = (sequelize) => {
  const InteractiveAfricanMap = sequelize.define("InteractiveAfricanMap", {
    // === Header Section ===
    header_tagline: {
      type: DataTypes.STRING,
      allowNull: false,
      // "Small top label text, e.g. 'LIVE AFRICAN COVERAGE'",
    },
    header_title: {
      type: DataTypes.STRING,
      allowNull: false,
      // "Main heading, e.g. 'Real-Time Location Intelligence '",
    },
    header_title_highligt: {
      type: DataTypes.STRING,
      allowNull: false,
      // " Across Africa'",
    },
    header_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      // "Description under the heading explaining the section purpose",
    },

    // === Global Live Stats Section ===
     global_title: {
      type: DataTypes.STRING,
      allowNull: false,
     
      // "Live statistics",
    },
    total_verified_label: {
      type: DataTypes.STRING,
      allowNull: false,
     
      // "Label for total verified addresses",
    },
    total_verified_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // "Total number of verified addresses across Africa",
    },
    accuracy_rate_label: {
      type: DataTypes.STRING,
      allowNull: false,
      // "Label for the accuracy rate metric",
    },
    accuracy_rate_value: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      // "Average accuracy rate percentage",
    },
    active_countries_label: {
      type: DataTypes.STRING,
      allowNull: false,
      
      // "Label for number of countries covered",
    },
    active_countries_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
      // "Number of active countries currently being tracked",
    },

    // === CTA Section ===
    cta_title: {
      type: DataTypes.STRING,
      allowNull: false,
      
      // "Title for the call-to-action section",
    },
    cta_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    
      // "Description under the CTA title Be part of Africa's...",
    },
    cta_button_text: {
      type: DataTypes.STRING,
      allowNull: false,
      
      // "Text displayed on the CTA button Start Building",
    },
    cta_button_url: {
      type: DataTypes.STRING,
      allowNull: false,
     
      // "Target URL for the CTA button",
    },
     ...generateTimestamps(),
  }, 
  {
    tableName: "InteractiveAfricanMaps",
    timestamps: false,
  });

  return InteractiveAfricanMap;
};
