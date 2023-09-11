import { DataTypes, Sequelize } from "sequelize"
import { db } from "../config/db.js"
import {Prestador} from "./Prestador.js"

export const Paciente = db.define('Paciente',{
    idpaciente:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    nombres:{
        type: DataTypes.STRING,
        allowNull:false
    },
    apellidos:{
        type: DataTypes.STRING,
        allowNull:false
    },
    dni:{
        type: DataTypes.STRING,
        allowNull:false
    },
    fecha_nac:{
        type: DataTypes.DATE,
        allowNull:false
    },
    celular:{
        type: DataTypes.STRING,
        allowNull:false
    },
    domicilio:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    nroafiliado:{
        type: DataTypes.STRING,
        allowNull:false
    },
    fechaalta:{
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
        
    },
    encargadoalta:{
        type: DataTypes.STRING,
        allowNull:false
    },
    edad:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    idprestador:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
})

Paciente.hasOne(Prestador,{
    foreignKey:'idprestador'
})
Prestador.belongsTo(Paciente)

