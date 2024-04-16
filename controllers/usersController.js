import UsuarioModel from "../models/usuarioModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.find()
        res.json(usuarios);
    } catch (error) {
        console.log(error)
    }
};

//Registro de usuario

const registroUSers = async (req, res) => {
    
    try {
        const {name, email, password, repeatPasword, admin } = req.body

        if (password !== repeatPasword) {
            return res.status(400).json({ message: "Las contraseñas no coinciden"});
        }


        const salt = await bcrypt.genSalt(10); //Genera un salt para encriptar la contraseña.
        const passwordHash = await bcrypt.hash(password, salt); //Encriptar la contraseña con bcrypt.
        const repeatPaswordHash = await bcrypt.hash(repeatPasword,salt);
        const usuario = new UsuarioModel({
            name,
            email, 
            password: passwordHash, 
            repeatPasword: repeatPaswordHash,
            admin
        });
        await usuario.save()
        res.status(201).json({message: "Usuario registrado con éxito"})

    } catch (error) {

        res.status(400).json({message: "Error al registrar el usuario"})
        console.log(error)
    }
}

//Eliminar un usuario

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await UsuarioModel.findByIdAndDelete(id); //función de mongo que permite eliminar un usuario mediante un id.
        res.json({usuario, message: "Usuario eliminado correctamente"})
    } catch (error) {
        console.log(error);
        
    }
    
}


//Edición de Usuario

const updateUser = async (req, res) => {

    try { 
        const { id } = req.params;
        const { admin } = req.body;

        const usuario = await UsuarioModel.findByIdAndUpdate(
            id,
            { admin },
            { new: true } //Devuelve el usuario actualizado.
        );
        res.json(usuario);
        //El res.json nos devuelve el usuario. La respuesta.
        
    } catch (error) {
        console.log(error)
    }
};


//Login de usuario

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await UsuarioModel.findOne({email}); //El findOne devuelve un booleano (si encuentra un usuario que machee con mi búsqueda)

        if (!usuario) {
            return res.status(400).json({message: "Usuario y/o Contaseña incorrecto"});
        }

        //Va a recibir dos parametros, el password y el usuario que viene asociado a ese mail.
        const comparePass = await bcrypt.compare(password, usuario.password); //Se va a desencriptar el password y el compare verá si machea el usuario con ese password.


        if (!comparePass) {
            return res.status(400).json({ message: "Usuario y/o Contaseña incorrecto" });
        }


        //Creación del token

        const token = jwt.sign(//Se crea el payload o cuerpo del token. Tiene los datos que creamos convenientes compartir y también el vencimiento del token)
        {   id: usuario._id, 
            name: usuario.name,
            admin: usuario.admin
        },
        process.env.SECRET_KEY, //La clave secreta que se utilizará para encriptar el token.
        {
            expiresIn: 86400
        } //24 hs
        );

        res.header(token).json({ token });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error al iniciar sesión"});
        res.status(500).json({ message: "Error de servidor" });
    }
}


export default {
    getAllUsers,
    registroUSers,
    deleteUser,
    updateUser,
    login
}