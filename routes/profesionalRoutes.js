import express from 'express'
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.send('Profesional')
})
routes.get('/pacientes',(req,res)=>{
    res.send('Pacientes')
})
export default routes