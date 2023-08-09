import express from "express"
import db from "./config/db.js"
import dotenv from "dotenv/config"

const app = express()

//conectar Base de Datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error))

const port = 3000

app.get('/', (req,res)=>{
    res.send('Laboratorio Inicio')
})

app.listen(port,()=>{
    console.log(`Corriendo en el puerto ${port}`)
})