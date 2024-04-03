import ProductoModel from "../models/productoModel.js";

//Traer todos los productos
const getAllProducts = async (req, res) => {
    try {
        const productos = await ProductoModel.find()
        res.json(productos);
    } catch (error) {
        console.log(error)
    }
}

//Agregar producto
const agregarProducto = async (req, res) => {
    try {
        const { nombre, descripcion, imagenUrl, cantidad, categoria, fecha } = req.body;
        const nuevoProducto = new ProductoModel({
            nombre,
            descripcion,
            imagenUrl,
            cantidad,
            categoria,
            fecha
        });
        await nuevoProducto.save();
        res.status(201).json({ message: 'Producto agregado correctamente' });

    } catch (error) {
        res.status(400).json({ message: 'Error al agregar el producto' });
        console.log(error)

    }
}

export default {
    getAllProducts,
    agregarProducto
}