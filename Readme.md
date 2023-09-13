
# Documentación de la API REST



### Crear Usuario
Endpoint: POST /personal/registrar

Crea un nuevo usuario en el sistema.

* Parámetros de solicitud:

    {
        "nombres":"Jorge",
        "apellidos":"Aguirre",
        "dni":"23255897",
        "email":"sergio@fdfd.com",
        "clave":"lab333350291",
        "encargadoalta":"Sysadmin",
        "area_idarea":2,
        "cargo_idcargo":3
    }

* Respuesta existosa
    + "Se ha ingersado un nuevo usuario"

* Errores  
    + Validación de campos correctos
    + Email ya registrado
    + DNI ya registrado
    + Formato de email correcto
    + Logintud de clave correcta

### Listar Personal
Endpoint: GET /personal/listado

Lista todos los registros del personal

### Registrar Paciente
Endpoint: POST /paciente/registrar

Registra un nuevo paciente en el sistema.

* Parámetros de solicitud:

    {
        "nombres":"Pedro",
        "apellidos":"Aguirre",
        "dni":"21558698",
        "fecha_nac":"05-11-1990",
        "celular":"1546655775",
        "domicilio": "Santa Fe 123",
        "email":"pedro@correo.com",
        "nroafiliado":"22333223234",
        "clave":"lab333350291",
        "encargadoalta":"Sysadmin",
        "idprestador":1
    }

* Respuesta existosa
    + "Se ha ingersado un nuevo paciente"

* Errores  
    + Validación de campos correctos
    + Validación Email ya registrado
    + Validación DNI ya registrado
    + Formato de email correcto
    + Logintud de clave correcta



### Listar Pacientes
Endpoint: GET /paciente/listado

Lista todos los registros de pacientes
