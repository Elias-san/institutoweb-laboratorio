import express from "express"
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.send('Cliente')
})
routes.get('/registrar',(req,res)=>{
    res.send('Registrar cliente')
})

routes.get('/listado',(req,res)=>{
    res.send('Listado de clientes')
})

export default routes;