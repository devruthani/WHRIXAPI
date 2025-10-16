const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

/**
 * About Page Model Structure
 * 
 * This schema defines all data fields used to dynamically populate 
 * the "About" page of the website. Each section corresponds to a 
 * portion of the frontend React component.
 */

module.exports = (sequelize) => {
  const AboutSection = sequelize.define(
    "AboutSection",
    {
      // === Hero Section ===
      hero_badge_text: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "ABOUT WHRix"

      hero_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Making Address Verification Simple, Reliable, and Digital for Africa"

      hero_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, // Full paragraph introducing WHRix’s mission and focus.

      // === Mission & Vision Section ===
      foundation_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Our Foundation"

      foundation_subtitle: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Built on principles that guide every decision we make..."

      mission_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Our Mission"

      mission_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, // e.g. "To simplify and digitize address verification..."

      vision_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Our Vision"

      vision_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, // e.g. "To become Africa's trusted address verification infrastructure..."

      values_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Our Values"

      values_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, // e.g. "Innovation, Inclusion, Security, and Trust..."

      // === Stats Section ===
      stats_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "WHRix by the Numbers"

      stats_subtitle: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Our impact across African markets since 2022"

     

      // === Address Verification Gap Section ===
      gap_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "The Address Verification Gap in Africa"

      gap_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, // e.g. "Understanding the unique challenges..."

      problem_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "The Problem"

      problem_1_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Informal Addressing Systems"
      problem_1_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, // Detailed explanation

      problem_2_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Failed Deliveries Cost Billions"
      problem_2_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      problem_3_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Digital Exclusion"
      problem_3_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      impact_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Impact on Business"

      // === Our Solution Section ===
      solution_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Our Solution"
      solution_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, // e.g. "WHRix bridges this gap by combining local knowledge..."

      solution_1_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Landmark Recognition"
      solution_1_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      solution_2_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Precise Coordinates"
      solution_2_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      solution_3_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "99.2% Accuracy"
      solution_3_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      // === How It Works Section ===
      how_it_works_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "How It Works"

      how_it_works_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, // e.g. "Simple integration process for businesses and seamless experience..."

      business_steps_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "For Businesses (Banks, Fintechs, Microfinance)"

      business_steps: {
        type: DataTypes.JSON,
        allowNull: true,
      }, 
      /* Example:
        [
          { step_number: 1, title: "Sign up...", description: "Get started in minutes..." },
          { step_number: 2, title: "Integrate APIs...", description: "Comprehensive documentation..." },
          { step_number: 3, title: "Start verifying...", description: "Seamlessly integrate..." }
        ]
      */

      customer_steps_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "For Customers (End-Users)"

      customer_steps: {
        type: DataTypes.JSON,
        allowNull: true,
      }, 
      // Similar JSON structure for customer steps.

      why_it_matters_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Why It Matters"

      why_it_matters_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, // e.g. "Our solution addresses critical challenges..."

      // === Contact Section ===
      contact_title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Ready to Solve Africa's Address Challenge?"

      contact_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }, // e.g. "Join us in building the address layer..."

      contact_cta_primary: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Start Free Trial"

      contact_cta_secondary: {
        type: DataTypes.STRING,
        allowNull: false,
      }, // e.g. "Schedule Demo"

      ...generateTimestamps(),
    },
    {
      timestamps: false,
      tableName: "AboutSections",
    }
  );

  return AboutSection;
};
