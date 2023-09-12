import express from "express";
import  { loginUsuario,registrarUsuario} from "../controller/userController.js"
import userValidator from '../middleware/userValidator.js'
import loginAuth from "../middleware/loginAuth.js";

const routes = express.Router()

routes.get('/',(req,res)=>{
    res.json({url:'Usuario'})
})
routes.get('/login',(req,res)=>{
    res.send('Login Usuario/Personal')
})

//Registrar personal
routes.post('/login',loginAuth,loginUsuario)

//Registrar personal/usuario
routes.post('/registrar',userValidator,registrarUsuario)

export default routes;