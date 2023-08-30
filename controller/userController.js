import {validationResult } from "express-validator"
import {db} from "../config/db.js"
import { Usuario } from "../models/Usuario.js"
import bcrypt from "bcrypt"

const userController = {
    registerUser: async (req,res) => {
            
            const {nombres, apellidos, dni,email,clave,encargadoalta,area,cargo} = req.body
            const fechaactual = new Date()
            const fechaalta = fechaactual.toISOString().slice(0, 19).replace('T', ' ');

            const result = validationResult(req)
            const errors = result.array()
           //1) Verificar campos
            if (errors.length > 0){
                return res.json( errors.map((error) =>  error.msg))
            } 
                 
            //2) Verificar si existe el DNI

            //3) Insertar Datos
              try {
                    req.body.clave =  bcrypt.hashSync(req.body.clave,10)
                    const datos ={...req.body,fechaalta}
                    const nuevoRegistro = await Usuario.create(datos)
                    res.json("Nuevo registro insertado ")
              } catch (error){
                res.json(error)
              }
              

    }

}

export default userController;