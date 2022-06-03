import { Sequelize } from "sequelize";
import "dotenv/config";

const DB_NAME = process.env.MYSQL_DB_NAME;
const DB_USER = process.env.MYSQL_DB_USER;
const DB_PASS = process.env.MYSQL_DB_PASS;
const DB_CONFIG = {
  dialect: "mysql",
  host: process.env.MYSQL_DB_HOST,
  port: 3306,
};

// const DB_NAME = "fidelityapp";
// const DB_USER = "root";
// const DB_PASS = "32259710";
// const DB_CONFIG = {
//   dialect: "mysql",
//   host: "127.0.0.1",
//   port: 3306,
// };

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);

async function hasConection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export { hasConection, sequelize };
