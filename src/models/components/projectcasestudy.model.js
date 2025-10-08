const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const ProjectCaseStudies = sequelize.define(
    "ProjectCaseStudies",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Jumia Logistics Optimization"

      category: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Logistics", "Fintech"

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      }, // e.g. "Reduced failed deliveries by 42%..."

      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // store URL only (no upload)

      stats: {
        type: DataTypes.STRING,
        allowNull: true,
      }, // e.g. "42% reduction"

       section_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "ProjectSections",
        key: "id",
      },
      onDelete: "CASCADE",
    }, // FK -> ProofSection


      ...generateTimestamps(),
    },
    {
      timestamps: false,
      tableName: "ProjectCaseStudies", // ✅ defines table name
    }
  );

  return ProjectCaseStudies;
};
