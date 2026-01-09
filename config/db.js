const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "taskdb",        // database name
  "postgres",      // username (default)
  "@O!dMonk",      // password
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false
  }
);

module.exports = sequelize;
