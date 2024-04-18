import Mongoose from "mongoose";
import { Schema } from "mongoose";

const usuarioSchema = new Schema({
    name: String,
    email: {
        unique: true,
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    repeatPassword: {
        type: String,
        require: true,
    },
    admin: {
        type: Boolean,
        default: false,
    }
},
{ versionKey: false }
);

const UsuarioModel = Mongoose.model("usuarios", usuarioSchema)

export default UsuarioModel