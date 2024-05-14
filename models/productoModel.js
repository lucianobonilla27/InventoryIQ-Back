import mongoose from "mongoose";
import { Schema } from "mongoose";

const productoSchema = new Schema({
    nombre: {
        type: String,
        require: true,
    },
    descripcion:{
        type: String,
    },
    imagenUrl: {
        type: String,
        require: true,
    },
    cantidad: {
        type: Number,
        require: true,
    },
    categoria: {
        type: String,
        require: true,
    },
    fecha: {
        type: String,
        require: true,
    } 
},
{ versionKey: false });

const ProductoModel = mongoose.model("productos", productoSchema);

export default ProductoModel;
