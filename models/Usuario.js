import  { Sequelize, DataTypes } from 'sequelize'
import db from "../config/db.js"
import  {Area} from "./Area.js"
import {Cargo} from "./Cargo.js"

 export const Usuario = db.define('Usuario',{
    idusuario:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull:false
    },
    apellidos:{
        type: DataTypes.STRING,
        allowNull:false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaalta: {
        type:DataTypes.DATE,
        allowNull: false
    },
    encargadoalta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargoid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    areaid:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
    
})

Usuario.hasOne(Area,{
    foreignKey:'idarea'
})
Area.belongsTo(Usuario)

Usuario.hasOne(Cargo,{
    foreignKey:'idcargo'
})
Cargo.belongsTo(Usuario)

