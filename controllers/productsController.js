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

const editarProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, descripcion, imagenUrl, cantidad, categoria, fecha } = req.body;
        const producto = await ProductoModel.findByIdAndUpdate(id, {
            nombre,
            descripcion,
            imagenUrl,
            cantidad,
            categoria,
            fecha
        }, {
            new: true
        });
        res.status(200).json({ producto, message: 'Producto editado correctamente' });
    } catch (error) {
        res.status(400).json({ message: 'Error al editar el producto' });
        console.log(error);
    }
}

//eliminar producto
const eliminarProducto = async (req, res) => {
    try {
        const id = req.params.id;
        await ProductoModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: 'Error al eliminar el producto' });
        console.log(error);
    }
}


export default {
    getAllProducts,
    agregarProducto,
    editarProducto,
    eliminarProducto
}