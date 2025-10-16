const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * Support Options
   *
   * Stores contact methods like live chat, email, and phone support.
   */
  const ContactSupportOption = sequelize.define(
    "ContactSupportOption",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Support type name, e.g., 'Live Chat', 'Email Support'.",
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Description of the support method.",
      },
      availability: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Support availability schedule, e.g., 'Mon-Fri, 9AM - 5PM'.",
      },
      action_label: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Button text, e.g., 'Start Chat', 'Send Email'.",
      },
      response_time: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Average response time, e.g., 'Instant', '4 hours'.",
      },
      icon_name: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Name of the icon used (for frontend mapping).",
      },

      ...generateTimestamps(),
    },
    {
      tableName: "ContactSupportOptions",
      timestamps: false,
    }
  );

  return ContactSupportOption;
};
