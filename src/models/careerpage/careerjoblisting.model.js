const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * JobListing Model
   *
   * Represents each open job position shown on the Careers page.
   * Connected to the CareerPage model through a foreign key.
   */
  const CareerJobListing = sequelize.define(
    "CareerJobListing",
    {
      // === Job Info ===
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Job title, e.g. 'Senior Software Engineer - Backend'",
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Job location, e.g. 'Lagos, Nigeria (Remote)'",
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Employment type, e.g. 'Full-time', 'Part-time'",
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Department name, e.g. 'Engineering', 'Sales', 'Product'",
      },
      experience: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Required years of experience, e.g. '3+ years'",
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Short description of the job role and responsibilities",
      },
      requirements: {
        type: DataTypes.JSON,
        allowNull: false,
        // "List of job requirements as an array of strings",
      },
      benefits: {
        type: DataTypes.JSON,
        allowNull: false,
        // "List of job-specific benefits as an array of strings",
      },

      careerpage_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "CareerPages",
          key: "id",
        },
        onDelete: "CASCADE",
        // "Foreign key linking this job listing to the CareerPage",
      },

      ...generateTimestamps(),
    },
    {
      tableName: "CareerJobListings",
      timestamps: false,
    }
  );

 
  return CareerJobListing;
};
