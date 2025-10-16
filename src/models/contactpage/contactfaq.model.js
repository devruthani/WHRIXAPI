
const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * FAQ Items Model
   *
   * Stores individual Frequently Asked Questions (FAQ) entries,
   * including their question text, answer content, and category.
   *
   * These FAQs are displayed in the "Frequently Asked Questions" section
   * of the Contact Page or any other page that references them.
   */
  const ContactFaq = sequelize.define(
    "ContactFaq",
    {
      category: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Optional category or grouping name, e.g., 'General', 'Support', 'Billing'.",
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
        // "The FAQ question text.",
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Detailed answer to the question.",
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // "Display order index for frontend sorting.",
      },
      contactPageId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "ContactPages",
          key: "id",
        },
        onDelete: "CASCADE",
        // "Foreign key linking FAQ to the Contact Page it belongs to.",
      },

      ...generateTimestamps(),
    },
    {
      tableName: "ContactFaqs",
      timestamps: false,
    }
  );

  return ContactFaq;
};
