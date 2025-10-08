const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const ProofStat = sequelize.define("ProofStat", {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    }, // e.g. "93%", "20M+", "24/7"

    label: {
      type: DataTypes.STRING,
      allowNull: false,
    }, // e.g. "Client Satisfaction"

    proof_section_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "ProofSections",
        key: "id",
      },
      onDelete: "CASCADE",
    }, // FK -> ProofSection

    ...generateTimestamps(),
  }, {
    timestamps: false,
    tableName: "ProofStats"
  });

  return ProofStat;
};
