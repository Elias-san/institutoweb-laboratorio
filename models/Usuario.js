import  { Sequelize, DataTypes } from 'sequelize'
import db from '../config/db'

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

Usuario.hasOne('Area',{
    foreignKey:'idarea'
})
Area.belongTo(Usuario)

Usuario.hasOne('Cargo',{
    foreignKey:'idcargo'
})
Cargo.belongTo(Usuario)