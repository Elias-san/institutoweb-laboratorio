import { Sequelize,DataTypes } from "sequelize";

export const Cargo = db.define('Cargo',{
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