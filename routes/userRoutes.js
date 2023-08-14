import express from "express";
import  userController from "../controller/userController.js"


const routes = express.Router()

routes.get('/',(req,res)=>{
    res.json({url:'Usuario'})
})
routes.get('/login',(req,res)=>{
    res.send('Login')
})
routes.post('/login',(req,res)=>{
    res.json({"url":"login por post"})
})

//Registrar usuario
routes.post('/register',userController.registerUser)

export default routes;