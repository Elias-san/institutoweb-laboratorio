import express from "express"
import pacienteValidator from "../middleware/pacienteValidator.js"
import { registrarPaciente ,listarPacientes} from "../controller/pacienteController.js"
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.send('Cliente')
})
routes.post('/registrar',pacienteValidator,registrarPaciente)

routes.get('/listado',listarPacientes)

export default routes;