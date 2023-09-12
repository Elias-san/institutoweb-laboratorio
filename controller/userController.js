import { validationResult } from "express-validator";
import { Usuario } from "../models/Usuario.js";
import bcrypt from "bcrypt";


const registrarUsuario = async (req, res) => {
  const result = validationResult(req);
  const errors = result.array();

  //1) Verificar campos
  if (errors.length > 0) {
    return res.json(errors.map((error) => error.msg));
  }

  //2) Insertar Datos
  try {
    //req.body.clave = bcrypt.hashSync(req.body.clave, 10);
    const nuevoRegistro = await Usuario.create(req.body);
    res.json("Nuevo registro insertado ");
  } catch (error) {
    res.json(error);
  }
};
const loginUsuario = async (req, res) => {
  const { usuario, clave } = req.body;

  const result = validationResult(req);
  const errors = result.array();

  //1) Verificar campos
  if (errors.length > 0) {
    return res.json(errors.map((error) => error.msg));
  }

  const usuarioOk = await Usuario.findOne({ where: { email: usuario } });
  if (usuarioOk === null) {
    return res
      .status(400)
      .json({ error: true, message: "El usuario no existe" });
  }

  //const claveOk = await bcrypt.compare(clave, usuarioOk.clave);

  if (clave == usuarioOk.clave) {
    return res
      .status(200)
      .json({  message: `Bienvenido ${usuarioOk.nombres}` });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "La contraseña es incorrecta" });
  }
};

export { registrarUsuario, loginUsuario };
