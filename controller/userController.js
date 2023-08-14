
const userController = {
    registerUser: (req,res) => {
        const {nombres, apellidos, dni,email,password,cargo} = req.body
        const now = new Date()
        const fecha = now.toLocaleDateString()

        /*
        nombres, apellidos, DNI,
         cargo/área del laboratorio al que pertenece, 
         correo electrónico.
         */
        
        const header = {
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            }
        }

        let error = false;
        let respuesta = {header}
        if(!nombres) {
            error=true
            respuesta = {...{status:403,error:"Debe ingresar Nombres"}}
        }

        if(!apellidos) {
            error=true
            respuesta = {...{status:403,error:"Debe ingresar Apellido"}}
        } 

        if(!dni) {
            error=true
            respuesta = {...{status:403,error:"Debe ingresar DNI"}}
        } 

        if(!cargo) {
            error=true
            respuesta = {...{status:403,error:"Debe ingresar Cargo"}}
        } 

       
        if(!email) {
            error=true
            respuesta = {...{status:403,error:"Debe ingresar un correo"}}
        } 

        if(!password) {
            error=true
            respuesta = {...{status:403,error:"Debe ingresar una password"}}
        } 
        
        if (!error) {
            respuesta = {...{status:200,msg:"Todos los datos estan completos"}}
            res.json(respuesta)
            const datos = {...req.body ,"fecha":`${fecha}`}
            console.log(datos)
        }

    }

}

export default userController;