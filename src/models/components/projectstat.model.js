const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const ProjectStats = sequelize.define(
    "ProjectStats",
    {
      label_text: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Countries Covered"

      value_text: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "15+"

      section_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "ProjectSections", // FK → ProjectSections table
          key: "id",
        },
        onDelete: "CASCADE",
        allowNull: true,
      },

      ...generateTimestamps(),
    },
    {
      timestamps: false,
      tableName: "ProjectStats",
    }
  );

  return ProjectStats;
};
