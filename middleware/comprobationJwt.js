//Se realiza la comprobación del token generado, que contenga el admin para poder entrar a la ruta privada.

import jwt from "jsonwebtoken";

const comprobationJwt = (req, res, next) => {
    
    //Se debe recuperar desde los header el token.
    const token = req.headers.authorization; //si el jwt se recupera de manera correcta lo guardamos en el token. Esa info recuperada es el admin.


    if(!token) {
        return res.status(401).json({ message: "Acceso denegado, no es un Admin"})
    }
    //Si es correcta realiza la verificación del jwt
    try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY) //SI EL TOKEN CONTIENE EL SECRET_KEY
        req.user = verifyToken //guardamos el usuario en el req.
        if (verifyToken.admin) {
            console.log("Es Admin")
            next() //si se hizo la verificación continua a la siguiente función.
        } else {
            console.log("No es Admin")
           res.status(401).json({ message: "Acceso denegado, no es un Admin" })
        }

    } catch (error) {
        console.log(error)
    }
}

export default comprobationJwt;