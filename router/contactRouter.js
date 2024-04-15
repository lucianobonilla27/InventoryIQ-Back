import express from 'express';
import contactController from '../controllers/contactController.js';

const router = express.Router();

//Traer las consultas

router.get('/contact', contactController.getAllContact),

//Ver una consulta

router.get('/consultaById/:id', contactController.getContactById),

//Agregar una consulta

router.post('/newConsulta', contactController.agregarConsulta),

//Responder una consulta

router.put('/respConsulta/:id', contactController.responderConsulta),

//Eliminar una consulta

router.delete('/deleteConsulta/:id', contactController.eliminarConsulta)

export default router;