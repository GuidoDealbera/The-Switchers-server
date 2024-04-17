import { Sequelize } from "sequelize";
import "dotenv/config";
import { readdirSync } from "fs";
import path from "path";
const { DB_CONEX } = process.env;

const sequelize = new Sequelize(`${DB_CONEX}`, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners: any = [];

readdirSync(path.join(__dirname, "/Models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/Models", file)));
  });

modelDefiners.forEach((model: any) => model(sequelize));

//Aquí debajo van las relaciones de la base de datos;

export const DataBase = {
    ...sequelize.models,
    conn: sequelize,
}