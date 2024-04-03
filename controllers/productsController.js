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

export default {
    getAllProducts
}