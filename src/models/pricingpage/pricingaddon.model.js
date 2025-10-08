const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const PricingAddOn = sequelize.define(
    "PricingAddOn",
    {
      name_text: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Premium Support"

      description_text: {
        type: DataTypes.TEXT,
        allowNull: true,
      }, // e.g. "Dedicated support with 4-hour response time"

      price_text: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "$500/month"

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
      tableName: "PricingAddOns",
    }
  );

  return PricingAddOn;
};
