const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

// Feature - manages the list of feature items (title, description, order).

module.exports = (sequelize) => {
  const Featuregridcard = sequelize.define("Featuregridcard", {
    // Foreign key linking this feature to a FeatureGridSection
    cardid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    // Title of the feature (e.g. "Landmark-Based Parsing")
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Description of the feature (e.g. "Understands African addressing patterns...")
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    // Order of display in the grid
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    // Custom timestamps
    ...generateTimestamps(),
  }, {
    timestamps: false,
  });

  return Featuregridcard;
};
