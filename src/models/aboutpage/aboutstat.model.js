const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const AboutStat = sequelize.define(
    "AboutStat",
    {
      label: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Countries Covered"

      value: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "4+"

      description: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // e.g. "Expanding to 8 by end of 2024"

      about_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "AboutStats",
          key: "id",
        },
        onDelete: "CASCADE",
      },

      ...generateTimestamps(),
    },
    {
      timestamps: false,
      tableName: "AboutStats",
    }
  );

  return AboutStat;
};
