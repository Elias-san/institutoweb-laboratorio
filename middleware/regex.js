// Expresión regular para validar un DNI argentino de 8 dígitos sin empezar con 0 y sin letras
let dniPattern = /^[1-9]\d{7}$/;

function validarDNIArgentino(dni) {
  return dniPattern.test(dni);
}

let numeroDNI = "12345678";
if (validarDNIArgentino(numeroDNI)) {
  console.log("El número de DNI argentino es válido.");
} else {
  console.log("El número de DNI argentino no es válido.");
}
