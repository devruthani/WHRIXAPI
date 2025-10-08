const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const ProofTestimonial = sequelize.define("ProofTestimonial", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, // e.g. "Sarah Johnson"

    role: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // e.g. "Head of Operations"

    company: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // e.g. "Jumia Nigeria"

    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    }, // e.g. "WHRIX has transformed our delivery success rate…"

    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }, // e.g. 5 (out of 5)

    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // e.g. "SJ"

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
    tableName: "ProofTestimonials",
  });

  return ProofTestimonial;
};
