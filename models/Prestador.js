import { DataTypes } from "sequelize"
import { db } from "../config/db.js"

export const Prestador = db.define('Prestador',{
    idprestador:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    prestador:{
        type: DataTypes.STRING,
        allowNull:false
    },
    plan:{
        type: DataTypes.STRING,
        allowNull:false
    }
})
