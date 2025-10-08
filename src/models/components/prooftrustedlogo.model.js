const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const ProofTrustedLogo = sequelize.define("ProofTrustedLogo", {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, // e.g. "FastDelivery"

    location: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // e.g. "Lagos, Nigeria"

    proof_section_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "ProofSections",
        key: "id",
      },
      onDelete: "CASCADE",
       allowNull: true,
    }, // FK -> ProofSection

    ...generateTimestamps(),
  }, {
    timestamps: false,
    tableName: "ProofTrustedLogos",
  });

  return ProofTrustedLogo;
};
