import { body } from "express-validator"

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
    body('fecha_nac').trim()
    .notEmpty().withMessage('Debe ingesar fecha de nacimiento'),
    body('celular').trim()
    .notEmpty().withMessage('Debe ingesar un celular'),
    body('direccion').trim()
    .notEmpty().withMessage('Debe ingesaruna dirección'),
    body('email').trim()
    .notEmpty().withMessage('Debe completar el campo email')
    .isEmail()
    .withMessage('Debe ingresar un correo electrónico válido'),
    body('nroafiliado').trim()
    .notEmpty().withMessage('Debe ingesar fecha de nacimiento'),
    body('encargadoalta').trim()
    .notEmpty().withMessage('Debe completar el campo encargado de alta'),
    body('idprestador').trim()
    .notEmpty().withMessage('Debe ingresar un prestador'),
]

