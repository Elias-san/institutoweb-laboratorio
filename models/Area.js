
import {DataTypes, Sequelize} from "sequelize"
import db from '../config/db'

export const Area = db.define("Cargo",{
    idarea:{
        type: DataTypes.INTEGER,
        primarykey: true,
        autoincrement: true
    },
    area:{
        type: DataTypes.STRING
    }
})

Area.BelongTo('Usuario');