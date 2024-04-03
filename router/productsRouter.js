import express from 'express';
import productsController from '../controllers/productsController.js';

const router = express.Router();


//Traer los productos
router.get('/products', productsController.getAllProducts)

//Agregar un producto
router.post('/agregarProduct', productsController.agregarProducto)

export default router