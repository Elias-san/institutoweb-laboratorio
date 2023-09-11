import {Paciente} from "../models/Paciente.js"
import { db } from "../config/db.js"
import { validationResult } from "express-validator"
import { differenceInYears, parse } from 'date-fns';

const registrarPaciente = async (req,res)=>{

    // Fecha de nacimiento de la persona (en formato 'dia-mes-año')
    req.body.fecha_nac = parse(req.body.fecha_nac, 'dd-MM-yyyy', new Date());

    // Fecha actual
    const fechaalta = new Date();

    // Calcular la edad en años
    const edad = differenceInYears(fechaalta, req.body.fecha_nac);

    console.log(`La edad actual de la persona es ${edad} años.`);

    const result = validationResult(req)
    const errors = result.array()

    if(errors.length > 0){
        return res.status(400).send(errors.map(error =>  error.msg))
    }

    try {
        const datos = {...req.body,edad,fechaalta}
        const nuevoRegistro = await Paciente.create(datos)
        res.status(200).json(nuevoRegistro)
    } catch (error){
        res.status(400).json(error)
    }
    
}
const listarPacientes = (req,res)=>{

}

export {
    registrarPaciente,
    listarPacientes
    }