import { Paciente } from "../../models/Paciente.js";

export const dniValido = async (value) => {
    const dniPattern = /^[1-9]\d{7}$/;
    const valido = await dniPattern.test(value)
    if (!valido) {
      throw new Error('El DNI no es valido');
    }
  }

  export const dniExiste = async (dni) => {
    const dniExiste = await Paciente.findOne({ where: { dni: dni } });
    if (dniExiste) {
      throw new Error('El DNI ingresado pertenece a otra persona');
    }
  }

  export const correoExiste = async (correo) => {
    const emailExiste = await Paciente.findOne({ where: { email: correo } });
    if (emailExiste) {
      throw new Error('El correo electrónico ya está en uso');
    }
  }