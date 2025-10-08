const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const PricingSection = sequelize.define(
    "PricingSection",
    {
      title_text: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Simple, Transparent Pricing"

      subtitle_text: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // e.g. "Choose the plan that fits your needs..."

      badge_text: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // e.g. "PRICING PLANS"

      highlight_text: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // e.g. "Pricing" (highlighted word)

      ...generateTimestamps(),
    },
    {
      timestamps: false,
      tableName: "PricingSections",
    }
  );

  

  return PricingSection;
};
