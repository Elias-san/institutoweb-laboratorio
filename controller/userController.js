import {validationResult } from "express-validator"
import {  Sequelize } from "sequelize"
import {Usuario}  from '../models/Usuario.js'

const userController = {
    registerUser: (req,res) => {
            const Usuario = db.Usuario
            const {nombres, apellidos, dni,email,cargo,area} = req.body
            const now = new Date()
            const fecha = now.toLocaleDateString()
            const result = validationResult(req)
            const errors = result.array()
            console.log("controlador")
           
            if (errors.length > 0){
               return res.json( errors.map((error) =>  error.msg))
               
            } else {
                 //1) Verificar si existe el mail
                //2) Verificar si existe el DNI
                //3) Insertar Datos
                try {
                    const registroUsuario = {
                        ...req.body,fecha
                    }
                    console.log(registroUsuario)
                    Usuario.create(registroUsuario)
                        return res.json("Usuario ingersado correctamente")
                    
                }  catch (error) {
                    return res.json(error)
                }
                

            }

    }

}

export default userController;