import mongoose from "mongoose";
import { Schema } from "mongoose";

const productoSchema = new Schema({
    nombre: String,
    descripcion: String,
    imagenUrl: String,
    cantidad: Number,
    categoria: String,
    fecha: String,
},
{ versionKey: false });

const ProductoModel = mongoose.model("productos", productoSchema);

export default ProductoModel;
