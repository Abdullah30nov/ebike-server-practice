const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // Database host
    port: process.env.DB_PORT, // Database port
    dialect: 'postgres', // Database dialect (PostgreSQL)
    dialectOptions: {
      ssl: {
        require: true, // Require SSL
        rejectUnauthorized: false, // For self-signed certificates (optional)
      },
    },
    logging: false, // Disable logging (optional)
  }
);

module.exports = sequelize;