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

    
        if (!nombre || !imagenUrl || cantidad === undefined || !categoria || !fecha) {
            return res.status(400).json({ message: 'Todos los campos son requeridos excepto la descripcion' });
        }

    
        if (typeof cantidad !== 'number' || isNaN(cantidad) || cantidad < 0 || !Number.isInteger(cantidad)) {
            return res.status(400).json({ message: 'La cantidad debe ser un número entero positivo' });
        }

    
        const imageUrlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
        if (!imageUrlRegex.test(imagenUrl)) {
            return res.status(400).json({ message: 'La URL de la imagen no es válida' });
        }

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
        console.log(error);
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