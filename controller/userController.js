import { validationResult } from "express-validator"

const userController = {
    registerUser: (req,res) => {

        try {
            const {nombres, apellidos, dni,email,cargo,area} = req.body
            const now = new Date()
            const fecha = now.toLocaleDateString()
            const result = validationResult(req)
            const errors = result.array()
            console.log(errors)
            
            if (errors){
               return res.json( errors.map((error) =>  error.msg))
               
            } else {
                //1) Verificar si existe el mail
                //2) Verificar si existe el DNI
                //3) Insertar Datos
                return res.json(req)
            }
           

        } catch (error) {
            console.log(error)
        }
    }

}

export default userController;