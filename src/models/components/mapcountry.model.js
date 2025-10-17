
/**
 * Map Country Model
 * 
 * Stores individual country data for the Interactive African Map component.
 * Each record represents one African country with verification stats and visuals.
 */

const { DataTypes } = require("sequelize");
const generateTimestamps = require("../timestamp");

module.exports = (sequelize) => {
  const MapCountry = sequelize.define("MapCountry", {
      mapId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: "InteractiveAfricanMaps",
              key: "id",
            },
            onDelete: "CASCADE",
            // "Foreign key linking  ",
          },
    country_name: {
      type: DataTypes.STRING,
      allowNull: false,
      //: "Country name, e.g. 'Nigeria'",
    },
    country_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      //: "Country code (ISO), e.g. 'NG'",
    },
    coordinates1: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: false,
      //: "Latitude coordinate for map pin placement",
    },
    coordinates2: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: false,
      //: "Longitude coordinate for map pin placement",
    },
    addresses_verified: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      //: "Total verified addresses in this country",
    },
    accuracy: {
      type: DataTypes.DECIMAL(4, 1),
      allowNull: false,
      defaultValue: 95.0,
      //: "Verification accuracy percentage for this country",
    },
    color_gradient: {
      type: DataTypes.STRING,
      allowNull: false,
      //: "Tailwind gradient color for map dot styling",
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      //: "Whether the country is currently active in real-time data",
    },
    ...generateTimestamps
    
  }, {
    tableName: "MapCountries",
    timestamps: false,
  });

  return MapCountry;
};
