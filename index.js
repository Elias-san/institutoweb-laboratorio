import express from "express"
import {db} from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import clienteRoutes from "./routes/clienteRoutes.js"
import profesionalRoutes from "./routes/profesionalRoutes.js"

const app = express()
app.use(express.json())
//conectar Base de Datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error))

const port = 3000

//Definir rutas de la API
app.use('/api/usuario',userRoutes)
app.use('/api/cliente',clienteRoutes)
app.use('/api/profesional',profesionalRoutes)

app.get('/', (req,res)=>{
    res.send('Laboratorio Inicio')
})



app.get('/empleado',(req,res)=>{
    res.send('Empleado')
})

app.get('/estudios',(req,res)=>{
    res.send('Estudios disponibles')
})

app.get('/materiales',(req,res)=>{
    res.send('Materiales')
})
app.get('/prepagas',(req,res)=>{
    res.send('Prepagas')
})

app.listen(port,()=>{
    console.log(`Corriendo en el puerto ${port}`)
})