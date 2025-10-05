const { DataTypes } = require("sequelize");
const generateTimestamps = require("./timestamp");

module.exports = (sequelize) => {
  const Career = sequelize.define("Career", {
    title: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    department: { type: DataTypes.STRING },
    experience: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    ...generateTimestamps(),  // ✅ injects custom fields
  }, {
    timestamps: false, // disable Sequelize default timestamps
  });

  return Career;
};
