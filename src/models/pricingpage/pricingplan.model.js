const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const PricingPlan = sequelize.define(
    "PricingPlan",
    {
      name_text: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Business", "Enterprise"

      icon_name: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // e.g. "Zap", "Users", "Building2"

      monthly_price: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "299" or "Custom"

      annual_price: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "2990" or "Custom"

      description_text: {
        type: DataTypes.TEXT,
        allowNull: true,
      }, // e.g. "For established companies with higher volume"

      cta_text: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // e.g. "Get Started", "Contact Sales"

      is_popular: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }, // e.g. true for “Most Popular”

      section_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "PricingSections",
          key: "id",
        },
        onDelete: "CASCADE",
        allowNull: true,
      },

      ...generateTimestamps(),
    },
    {
      timestamps: false,
      tableName: "PricingPlans",
    }
  );

  

  return PricingPlan;
};
