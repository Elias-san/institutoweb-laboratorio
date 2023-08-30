import {validationResult } from "express-validator"
import {db} from "../config/db.js"
import { Usuario } from "../models/Usuario.js"
import bcrypt from "bcrypt"
import { where } from "sequelize"

 const  registerUser = async (req,res) => {
            
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
const userLogin = async (req,res) =>{
const {usuario, clave } = req.body

const result = validationResult(req)
    const errors = result.array()
   //1) Verificar campos
    if (errors.length > 0){
        return res.json( errors.map((error) =>  error.msg))
    } 

    const usuarioOk = await Usuario.findOne({where:{email: usuario}})
    if (usuarioOk===null){
        return  res.status(400).json({error:true,
                                  message:"El usuario no existe"})
    }
  
    const claveOk = await bcrypt.compare(clave,usuarioOk.clave)

    if (claveOk) {
      return res.status(200).json({error:true,message:`Bienvenido ${usuarioOk.nombres}`})
    } else {
      return res.status(400).json({error:true,message:"La contraseña es incorrecta"})
    }
}

  
 export  {registerUser,
          userLogin}
  