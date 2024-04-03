import express from 'express';
import usuarioModel from '../models/userModel.js';

const router = express.Router();


//Traer los usuarios
router.get('/users', async (req, res) => {
    try {
        const usuarios = await usuarioModel.find()
        res.json(usuarios);
    } catch (error) {
        console.log(error)
    }
})

export default router