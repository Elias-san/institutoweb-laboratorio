import { body, validationResult } from "express-validator"

export default [
    body('nombres').trim()
    .notEmpty().withMessage('Debe completar el campo Nombres'),
    body('apellidos').trim()
    .notEmpty().withMessage('Debe completar el campo Apellidos'),
    body('dni').trim()
    .notEmpty().withMessage('Debe completar el campo DNI')
    .custom(async value => {
        const dniPattern = /^[1-9]\d{7}$/;
        const valido = await dniPattern.test(value)
        if (!valido) {
          throw new Error('El DNI no es valido');
        }
      }),
    body('cargo_idcargo').trim()
    .notEmpty().withMessage('Debe completar el campo Cargo'),
    body('area_idarea').trim()
    .notEmpty().withMessage('Debe completar el campo area'),
    body('email').trim()
    .notEmpty().withMessage('Debe completar el campo email')
    .isEmail()
    .withMessage('Debe ingresar un correo electrónico válido'),
    body('clave').trim()
    .notEmpty().withMessage('Debe completar el campo clave')
    .isLength({ min: 8 }).withMessage('La contraseña debe tener 8 caracteres mínimo'),
    body('encargadoalta').trim()
    .notEmpty().withMessage('Debe completar el campo encargado de alta')
]

