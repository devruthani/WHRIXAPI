const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const PricingFaq = sequelize.define(
    "PricingFaq",
    {
      question_text: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Which countries do you cover?"

      answer_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, // e.g. "We provide comprehensive coverage across Nigeria..."

      section_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "PricingSections",
          key: "id",
        },
        onDelete: "CASCADE",
        allowNull: true,
      },

      ...generateTimestamps(),
    },
    {
      timestamps: false,
      tableName: "PricingFaqs",
    }
  );

  return PricingFaq;
};
