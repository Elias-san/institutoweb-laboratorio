
import {DataTypes, Sequelize} from "sequelize"
import {db} from "../config/db.js"

export const Area = db.define("Areas",{
    idarea:{
        type: DataTypes.INTEGER,
        primarykey: true,
        autoincrement: true
    },
    area:{
        type: DataTypes.STRING
    }
})



