const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

// FeatureGridSection - manages section header (badge, headline, description).

module.exports = (sequelize) => {
  const Featuregrid = sequelize.define("Featuregrid", {
    // Badge text at the top (e.g. "CORE CAPABILITIES")
    badge_text: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Main headline text (e.g. "Enterprise-Grade Address")
    headline: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Highlighted part of headline (e.g. "Verification Platform")
    headline_highlight: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Supporting description text under headline
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    // Custom timestamps
    ...generateTimestamps(),
  }, {
    timestamps: false,
  });

  return Featuregrid;
};
