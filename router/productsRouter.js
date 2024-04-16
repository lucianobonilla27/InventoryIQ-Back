import express from 'express';
import productsController from '../controllers/productsController.js';

const router = express.Router();


//Traer los productos
router.get('/products', productsController.getAllProducts)

//Agregar un producto
router.post('/agregarProduct', productsController.agregarProducto)

//Editar un producto

//Editar un producto
router.put('/editarProduct/:id', productsController.editarProducto)

//Elminar un producto
router.delete('/eliminarProduct/:id', productsController.eliminarProducto)

export default router