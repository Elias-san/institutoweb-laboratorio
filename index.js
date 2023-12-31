import express from "express"
import {db} from "./config/db.js"
import personalRoutes from "./routes/personalRoute.js"
import pacienteRoutes from "./routes/pacienteRoutes.js"
import profesionalRoutes from "./routes/profesionalRoutes.js"

const app = express()
app.use(express.json())
//conectar Base de Datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error))

const port = 3000

//Definir rutas de la API
app.use('/personal',personalRoutes)
app.use('/paciente',pacienteRoutes)
app.use('/profesional',profesionalRoutes)

app.use((req, res) => {
  res.status(404).json({
    error: true,
    message: 'Ruta no encontrada'
  });
});


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