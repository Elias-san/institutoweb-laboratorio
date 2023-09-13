import express from "express";
import  { loginUsuario,registrarUsuario,listarUsuarios} from "../controller/userController.js"
import userValidator from '../middleware/userValidator.js'
import loginAuth from "../middleware/loginAuth.js";

const routes = express.Router()

routes.get('/login',(req,res)=>{
    res.send('Login Usuario/Personal')
})

//Registrar personal
routes.post('/login',loginAuth,loginUsuario)

//Registrar personal/usuario
routes.post('/registrar',userValidator,registrarUsuario)

//Listar personal
routes.get('/listado',listarUsuarios)

export default routes;