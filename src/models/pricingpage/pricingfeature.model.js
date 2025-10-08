const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const PricingFeature = sequelize.define(
    "PricingFeature",
    {
      feature_text: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "10,000 verifications/month"

      feature_type: {
        type: DataTypes.ENUM("included", "excluded"),
        allowNull: false,
      }, // distinguishes between included and excluded features

      plan_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "PricingPlans",
          key: "id",
        },
        onDelete: "CASCADE",
        allowNull: false,
      },

      ...generateTimestamps(),
    },
    {
      timestamps: false,
      tableName: "PricingFeatures",
    }
  );

  return PricingFeature;
};
