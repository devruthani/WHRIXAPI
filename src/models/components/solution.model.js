const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

// stores the section heading + description.

module.exports = (sequelize) => {
  const Solution = sequelize.define("Solutions", {
    // e.g. "Industry Solutions"
    section_title: { 
      type: DataTypes.STRING, 
      allowNull: false 
    }, 

    // e.g. "Tailored address verification solutions for critical business operations ..."


    section_description: { 
      type: DataTypes.TEXT, 
      allowNull: true 
    }, 
    ...generateTimestamps(),
  }, {
    timestamps: false,
  });

  return Solution;
};
