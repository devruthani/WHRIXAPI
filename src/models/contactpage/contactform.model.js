
const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * Contact Form Submissions
   *
   * Stores messages sent through the Contact page form.
   */
  const ContactForm = sequelize.define(
    "ContactForm",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Full name of the person contacting.",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
        // "Email address of the sender.",
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Phone number of the sender.",
      },
      option: {
        type: DataTypes.ENUM(
          "demo",
          "pilot",
          "enterprise",
          "support",
          "partnership",
          "other"
        ),
        allowNull: false,
        // "Inquiry type chosen by the user.",
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Message or inquiry text.",
      },
      consent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        // "Whether user gave consent for contact.",
      },

      ...generateTimestamps(),
    },
    {
      tableName: "ContactForms",
      timestamps: false,
    }
  );

  return ContactForm;
};
