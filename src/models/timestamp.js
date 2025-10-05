// src/models/timestamp.js
const { DataTypes } = require("sequelize");

const generateTimestamps = () => ({
  created_on: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_on: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = generateTimestamps;
