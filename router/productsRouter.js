import express from 'express';
import productoModels from '../models/productoModels.js';

const router = express.Router();


//Traer los productos
router.get('/products', async (req, res) => {
    try {
        const productos = await productoModels.find()
        res.json(productos);
    } catch (error) {
        console.log(error)
    }
})

export default router