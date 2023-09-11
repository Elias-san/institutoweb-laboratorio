import express from "express"
import pacienteValidator from "../middleware/pacienteValidator.js"
import { registrarPaciente } from "../controller/pacienteController.js"
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.send('Cliente')
})
routes.post('/registrar',pacienteValidator,registrarPaciente)

routes.get('/listado',(req,res)=>{
    res.send('Listado de clientes')
})

export default routes;