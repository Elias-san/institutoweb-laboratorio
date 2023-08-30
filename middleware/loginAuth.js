import {body} from "express-validator"

export default [
    body('usuario').trim()
    .notEmpty().withMessage("Debe ingresar un usuario"),
    body('clave').trim()
    .notEmpty().withMessage('Debe ingresar una contraseña')
    .isLength({min:8}).withMessage('La contraseña debe tener mínimo 8 caracteres')
]