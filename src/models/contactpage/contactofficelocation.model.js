
const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * Office Locations
   *
   * Stores details about each company office location displayed on the map and contact cards.
   */
  const ContactOfficeLocation = sequelize.define(
    "ContactOfficeLocation",
    {
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        // "City name of the office.",
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Country name of the office.",
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Full address of the office, line breaks allowed.",
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Phone number for the office.",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
        // "Contact email for the office.",
      },
      timezone: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Local timezone of the office.",
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
        // "Geographic latitude for map plotting.",
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
        // "Geographic longitude for map plotting.",
      },

      ...generateTimestamps(),
    },
    {
      tableName: "ContactOfficeLocations",
      timestamps: false,
    }
  );

  return ContactOfficeLocation;
};
