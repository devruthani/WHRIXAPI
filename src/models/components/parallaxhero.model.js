const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  /**
   * Parallax Hero Model
   *
   * Stores dynamic text content and key statistics displayed in the homepage
   * parallax hero section (left badge/headlines/CTA + right visual cards).
   */
  const ParallaxHero = sequelize.define(
    "ParallaxHero",
    {
      // === Badge / Badge text ===
      badge_text: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Small badge above the headline, e.g., 'AFRICA'S PREMIER LOCATION PLATFORM'."
      },

      // === Headline (multiple lines + highlighted) ===
      headline_line1: {
        type: DataTypes.STRING,
        allowNull: true,
        // "First line of main headline, e.g., 'Addressing The'."
      },
      headline_highlight: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Highlighted word/phrase in headline, e.g., 'Future'."
      },
  

      // === Supporting paragraph ===
      supporting_text: {
        type: DataTypes.TEXT,
        allowNull: true,
        // "Paragraph under the headline describing mission/value prop."
      },

      // === CTA buttons ===
      primary_cta_text: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Primary CTA text, e.g., 'Start Building'."
      },
      primary_cta_url: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Primary CTA destination URL."
      },
      secondary_cta_text: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Secondary CTA text, e.g., 'Watch Demo'."
      },
      secondary_cta_url: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Secondary CTA link (could be video URL or route)."
      },

      // === Bottom Stats (the 3 small stats under CTAs) ===
      
      stat1_value: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Stat 1 value, e.g., '54'."
      },
      stat1_label: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Stat 1 label, e.g., 'Countries'."
      },

      stat2_value: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Stat 2 value, e.g., '1.4B+'."
      },
      stat2_label: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Stat 2 label, e.g., 'People'."
      },

      stat3_value: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Stat 3 value, e.g., '99.8%'."
      },
      stat3_label: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Stat 3 label, e.g., 'Uptime'."
      },

      // === RIGHT PANEL — Floating cards (dynamic content) ===
      // Card A: Addresses verified
     
      cardA_value: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Main metric text for card A, e.g., '2M+'."
      },
      cardA_label: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Secondary label for card A, e.g., 'Addresses Verified'."
      },
      cardA_note: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Small helper text displayed in card A, e.g., 'Live verification in progress'."
      },

      // Card B: Accuracy / progress bar
      
      cardB_value: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Main metric text for card B, e.g., '99.2%'."
      },
      cardB_label: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Secondary label for card B, e.g., 'Accuracy Rate'."
      },
     
      // Card C: Enterprise clients
      
      cardC_value: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Main metric text for card C, e.g., '500+'."
      },
      cardC_label: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Secondary label for card C, e.g., 'Enterprise Clients'."
      },
      cardC_note: {
        type: DataTypes.STRING,
        allowNull: true,
        // "Small helper text for card C, e.g., 'Growing across Africa'."
      },
      ...generateTimestamps(),
    },
    {
      tableName: "ParallaxHeros",
      timestamps: false,
    }
  );

  return ParallaxHero;
};
