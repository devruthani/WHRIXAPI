const Sequelize = require("sequelize");
const sequelize = require("../config/database");

// Models
const Career = require("./career.model")(sequelize);

const DB = {};
DB.Sequelize = Sequelize;
DB.sequelize = sequelize;

DB.Career = Career;

module.exports = DB;
