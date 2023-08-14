import express from 'express'
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.send('Profesional')
})
routes.get('/clientes',(req,res)=>{
    res.send('Clientes por profesional')
})
export default routes