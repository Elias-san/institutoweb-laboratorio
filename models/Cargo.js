import { Sequelize,DataTypes } from "sequelize";
import db from "../config/db.js"

export const Cargo = db.define('Cargos',{
    idcargo:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cargo:{
        type: DataTypes.STRING,
    }
})