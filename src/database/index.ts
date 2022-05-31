import { Sequelize } from "sequelize";

const DB_NAME = "fidelityapp";
const DB_USER = "root";
const DB_PASS = "32259710";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

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
