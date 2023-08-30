import express from "express";
import  { userLogin,registerUser} from "../controller/userController.js"
import userValidator from '../middleware/userValidator.js'
import loginAuth from "../middleware/loginAuth.js";

const routes = express.Router()

routes.get('/',(req,res)=>{
    res.json({url:'Usuario'})
})
routes.get('/login',(req,res)=>{
    res.send('Login')
})

routes.post('/login',loginAuth,userLogin)

//Registrar usuario
routes.post('/registrar',userValidator,registerUser)

export default routes;