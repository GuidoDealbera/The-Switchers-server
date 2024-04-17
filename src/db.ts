import { Sequelize } from "sequelize";
import "dotenv/config";
const { DB_CONEX } = process.env;

const sequelize = new Sequelize(`${DB_CONEX}`, {
  logging: false,
  native: false,
});

//Aquí debajo van las relaciones de la base de datos;

export const DataBase = {
    ...sequelize.models,
    conn: sequelize,
}