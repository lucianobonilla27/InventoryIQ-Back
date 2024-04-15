import mongoose from "mongoose";
import { Schema } from "mongoose";

const contactoSchema = new Schema ({

nombre: {
type: String,
required: true,
pattern:/[A-Za-zÁÉÍÓÚáéíóúÜüÑñ' ]{1,}/,
maxlength:50,
minlength:2
},

mail: {
type: String,
unique: true,
required: true
},

telefono: {
type: String,
required: true,
pattern: /^[0-9]+$/,
minlength: 6,
maxlength: 15
},

rubro: {
type: String,
required: true
},

consulta:{
type: String,
maxLength:500
}
}, {versionKey: false});

const contactoModel = mongoose.model ("contactos", contactoSchema);

export default contactoModel;


