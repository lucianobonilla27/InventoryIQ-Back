import express from 'express';
import usersController from '../controllers/usersController.js';

const router = express.Router();


//Traer los usuarios
router.get('/users', usersController.getAllUsers)

export default router