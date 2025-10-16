const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * Developer SDK Model
   *
   * Stores details of SDKs or libraries available for developers,
   * e.g., Node.js, Python, PHP SDKs.
   */
  const DeveloperSdk = sequelize.define(
    "DeveloperSdk",
    {
      developerpageid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "DeveloperPages",
          key: "id",
        },
        onDelete: "CASCADE",
        // "Reference to parent DeveloperPage.",
      },
      sdk_name: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Name of the SDK, e.g., 'Node.js SDK'.",
      },
      sdk_language: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Programming language, e.g., 'JavaScript', 'Python'.",
      },
      install_command: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Installation command, e.g., 'npm install whrix-sdk'.",
      },
      github_url: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Optional link to the SDK’s GitHub repository.",
      },
      documentation_url: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Optional link to SDK documentation.",
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        // "Brief description of the SDK’s usage or features.",
      },
      ...generateTimestamps(),
    },
    {
      tableName: "DeveloperSdks",
      timestamps: false,
    }
  );

  return DeveloperSdk;
};
