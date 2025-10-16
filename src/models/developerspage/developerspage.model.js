const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * Developer Page Model
   *
   * Parent model that stores all high-level content for
   * the Developers Documentation page (hero, quickstart, CTA, etc.)
   * It associates with sub-models DeveloperSdk and DeveloperEndpoint.
   */
  const DeveloperPage = sequelize.define(
    "DeveloperPage",
    {
      // === Hero Section ===
      hero_title: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Main title of the developer page, e.g., 'Developer Documentation'.",
      },
      hero_description: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Short description introducing the developer docs and API overview.",
      },
      quickstart_button_text: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Label for the Quick Start button.",
      },
      api_reference_button_text: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Label for the API Reference button.",
      },

      // === Quick Start Section ===
      quickstart_title: {
        type: DataTypes.STRING,
        allowNull: false,
        // "Title for the Quick Start guide section.",
      },
      quickstart_description: {
        type: DataTypes.TEXT,
        allowNull: false,
        // "Description for the Quick Start section.",
      },
      step1_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      step1_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      step1_button_text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      step2_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      step2_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      step3_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      step3_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      // === Webhooks Section ===
      webhooks_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      webhooks_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      webhook_example_payload: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      webhook_security_note: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      // === CTA Section ===
      cta_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cta_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      cta_primary_button: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cta_secondary_button: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      ...generateTimestamps(),
    },
    {
      tableName: "DeveloperPages",
      timestamps: false,
    }
  );

  return DeveloperPage;
};
