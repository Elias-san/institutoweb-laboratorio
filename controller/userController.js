import { validationResult } from "express-validator"

const userController = {
    registerUser: (req,res) => {

        try {
            const {nombres, apellidos, dni,email,password,cargo} = req.body
            const now = new Date()
            const fecha = now.toLocaleDateString()
            let errors = validationResult(req)
            console.log(errors)
            if (!errors.isEmpty()){
                return res.json( {errors: errors.array()})
                //return res.json(msg)
            } else {
                return res.json(req)
            }
           

        } catch (error) {
            console.log(error)
        }
    }

}

export default userController;