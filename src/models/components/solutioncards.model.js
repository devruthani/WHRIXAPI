const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const Solutioncards = sequelize.define("Solutioncards", {
    title: { 
      type: DataTypes.STRING, 
      allowNull: false 
    }, // Card title (e.g. "Logistics & Delivery")

    description: { 
      type: DataTypes.TEXT, 
      allowNull: true 
    }, // Card description

    benefits: { 
      type: DataTypes.JSON, 
      allowNull: true 
    }, // Array of strings e.g. ["Reduce failed deliveries by 38%", "Improve route optimization"]

    section_id: { 
      type: DataTypes.INTEGER, 
      references: { 
        model: "Solutions", 
        key: "id" 
      }, 
      onDelete: "CASCADE" 
    }, // FK -> SolutionsSection

    ...generateTimestamps(),
  }, {
    timestamps: false,
  });

  return Solutioncards;
};
