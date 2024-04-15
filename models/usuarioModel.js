import Mongoose from "mongoose";
import { Schema } from "mongoose";

const usuarioSchema = new Schema({
    name: String,
    email: {
        unique: true,
        type: String
    },
    password: String,
    isAdmin: Boolean
})

const UsuarioModel = Mongoose.model("usuarios", usuarioSchema)

export default UsuarioModel