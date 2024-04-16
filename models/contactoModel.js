import mongoose from "mongoose";
import { Schema } from "mongoose";

const contactoSchema = new Schema ({

nombre: String,
mail: {
type: String,
unique: true,
required: true
},
telefono:String,
rubro: String,
consulta: String,

}, {versionKey: false});

const contactoModel = mongoose.model ("contacto", contactoSchema);

export default contactoModel;


