import express from 'express';
import "dotenv/config"
import cors from 'cors'
import userRouter from "../router/userRouter.js"
import productsRouter from "../router/productsRouter.js"
import connectDB from '../dataBase/db.js';

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

//Rutas
app.use(express.json());


app.use("/api", userRouter)
app.use("/api", productsRouter)


const initApp = () => {
    try {
        connectDB();
        app.listen(PORT, () => {
            console.log(`Servidos iniciado en puerto ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
}


initApp()