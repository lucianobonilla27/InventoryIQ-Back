import UsuarioModel from "../models/usuarioModel.js";

//Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.find()
        res.json(usuarios);
    } catch (error) {
        console.log(error)
    }
}

export default {
    getAllUsers
}