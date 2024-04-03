import productoModel from "../models/productoModel.js";

//Traer todos los productos
const getAllProducts = async (req, res) => {
    try {
        const productos = await productoModel.find()
        res.json(productos);
    } catch (error) {
        console.log(error)
    }
}

export default {
    getAllProducts
}