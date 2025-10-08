const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const ProjectSection = sequelize.define(
    "ProjectSection",
    {
      label_text: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // e.g. "Case Studies"

      headline_text: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // e.g. "Proven Results Across"

      headline_highlight: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // e.g. "Africa."

      description_text: {
        type: DataTypes.TEXT,
        allowNull: true,
      }, // e.g. "Real implementations delivering measurable impact..."

      


      ...generateTimestamps(),
    },
    {
      timestamps: false,
      tableName: "ProjectSections",
    }
  );

  return ProjectSection;
};
