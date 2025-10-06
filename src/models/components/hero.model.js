const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const Hero = sequelize.define("Hero", {
    // Badge text
    badge_text: {
      type: DataTypes.STRING,   // e.g. "RECOGNIZED FOR EXCELLENCE"
      allowNull: true,
    },

    // Headline (main hero title)
    headline: {
      type: DataTypes.TEXT,   // e.g. "Address Verification for"
      allowNull: false,
    },

    // Highlighted part of headline
    headline_highlight: {
      type: DataTypes.STRING,   // e.g. "Africa's Future"
      allowNull: true,
    },

    // Supporting paragraph
    description: {
      type: DataTypes.TEXT,     // e.g. "Transform informal addresses into reliable data..."
      allowNull: true,
    },

    // Stat number and label in overlay card
    stat_value: {
      type: DataTypes.STRING,   // e.g. "2M+"
      allowNull: true,
    },
    stat_label: {
      type: DataTypes.TEXT,   // e.g. "Addresses verified with 99.2% accuracy"
      allowNull: true,
    },

    // Live status text
    live_status: {
      type: DataTypes.STRING,   // e.g. "Live verification in progress"
      allowNull: true,
    },

    // Control multiple hero versions
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },

    ...generateTimestamps(),
  }, {
    timestamps: false,
  });

  return Hero;
};
