
/**
 * FeatureItem Model
 * 
 * Represents an individual feature within a FeatureGrid section.
 * Each item includes an icon, title, description, and color theme.
 */

const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const FeatureItem = sequelize.define("FeatureItem", {
    featuregridId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: "FeatureGrids",
              key: "id",
            },
            onDelete: "CASCADE",
            // "Foreign key linking  ",
          },
    icon_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // "Icon identifier (e.g., 'MapPin', 'Zap', etc.)",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      // "Feature title (e.g., 'Instant Verification')",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      // "Detailed explanation of the feature",
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
      // "Color theme for the icon (e.g., 'primary', 'blue', 'green')",
    },
    ...generateTimestamps(),
  },
  {
    tableName: "Featuregriditems",
    timestamps: false,
  });

  return FeatureItem;
};
