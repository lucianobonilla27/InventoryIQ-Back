import contactoModel from "../models/contactoModel.js";

//Traer todas las consultas

const getAllContact = async (req, res) => {
    try {
        const contacto = await contactoModel.find()
        res.json(contacto);
    } catch (error) {
        console.log(error)
    }
}

//Ver una consulta

const getContactById = async (req, res) => {
    try {
        const id = req.params.id;
        const consulta = await contactoModel.findById(id);

        const { consulta: contenidoConsulta } = consulta;
        const consultaRecibida = { consulta: contenidoConsulta };

        // Retornar la consulta encontrada con los campos necesarios
        res.json(consultaRecibida);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener la consulta' });
    }
};


//Agregar consulta

const agregarConsulta = async (req, res) => {
    try {
        const { nombre, mail, telefono, rubro, consulta } = req.body;
        const nuevaConsulta = new contactoModel({
            nombre,
            mail,
            telefono,
            rubro,
            consulta,
           
        });
        await nuevaConsulta.save();
        res.status(201).json({ message: 'Consulta enviada correctamente' });

    } catch (error) {
        res.status(400).json({ message: 'Error al enviar la consulta' });
        console.log(error)

    }
}

//Responder consulta

const responderConsulta = async (req, res) => {
    try {
        const id = req.params.id;
        const { respuesta } = req.body;
        const consultaExistente = await contactoModel.findById(id);
      
        consultaExistente.respuesta = respuesta;
        await consultaExistente.save();

        res.status(200).json({ 
            nombre: consultaExistente.nombre,
            mail: consultaExistente.mail,
            respuesta: consultaExistente.respuesta,
            message: 'Respuesta enviada correctamente' 
        });
    } catch (error) {
        res.status(400).json({ message: 'Error al responder la consulta, asegúrese de proporcionar una respuesta válida' });
        console.error(error);
    }
};


//Eliminar consulta

const eliminarConsulta = async (req, res) => {
    try {
        const id = req.params.id;
        await contactoModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Consulta eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ message: 'Error al eliminar la consulta' });
        console.log(error);
    }
}


export default {
    getAllContact,
    getContactById,
    agregarConsulta,
    responderConsulta,
    eliminarConsulta
}



