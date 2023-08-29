import { Sequelize,DataTypes } from "sequelize";

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

Cargo.belongTo(Usuario)

Usuario.hasOne('Cargo',{
    foreignKey:'idcargo'
})