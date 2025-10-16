const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * CareerBenefit Model
   *
   * Represents a single benefit card under the "Why Join Us" section.
   * Each CareerPage can have multiple benefits.
   */
  const CareerBenefit = sequelize.define(
    "CareerBenefit",
    {
      icon_name: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Name of the icon representing the benefit, e.g. 'Briefcase', 'Users'",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Title of the benefit card, e.g. 'Competitive Compensation'",
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Short explanation of the benefit",
      },

      careerpage_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "CareerPages",
          key: "id",
        },
        onDelete: "CASCADE",
        // "Foreign key linking this benefit to a CareerPage",
      },

      ...generateTimestamps(),
    },
    {
      tableName: "CareerBenefits",
      timestamps: false,
    }
  );

  return CareerBenefit;
};
