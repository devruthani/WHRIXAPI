const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * Developer Endpoint Model
   *
   * Defines the API endpoints displayed in the documentation section
   * (e.g., GET /addresses, POST /verify, etc.).
   */
  const DeveloperEndpoint = sequelize.define(
    "DeveloperEndpoint",
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
      endpoint_name: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Display name for the endpoint, e.g., 'Verify Address'.",
      },
      method: {
        type: DataTypes.ENUM("GET", "POST", "PUT", "DELETE", "PATCH"),
        allowNull: false,
        // "HTTP method used for the endpoint.",
      },
      url_path: {
        type: DataTypes.STRING,
        allowNull: false,
        // "The API path, e.g., '/api/verify'.",
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "A brief explanation of what the endpoint does.",
      },
      sample_request: {
        type: DataTypes.TEXT,
        allowNull: true,
        // "Example of a valid API request payload.",
      },
      sample_response: {
        type: DataTypes.TEXT,
        allowNull: true,
        // "Example of a valid API response payload.",
      },
      authentication_required: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        // "Specifies whether the endpoint requires authentication.",
      },
      ...generateTimestamps(),
    },
    {
      tableName: "DeveloperEndpoints",
      timestamps: false,
    }
  );

  return DeveloperEndpoint;
};
