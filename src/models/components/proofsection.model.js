const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const ProofSection = sequelize.define("ProofSection", {
    label_text: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // e.g. "Clients Feedback"

    headline_text: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // e.g. "Success Stories Fuel our"

    headline_highlight: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // e.g. "Innovation."

    trusted_by_text: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // e.g. "Trusted by leading African businesses"

    ...generateTimestamps(),
  }, {
    timestamps: false,
    tableName: "ProofSections",
  });

  return ProofSection;
};
