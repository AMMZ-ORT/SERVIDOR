import express from 'express';
import { subirImagen } from '../controllers/uploads.controller.js';

const router = express.Router();


// Permite especificar la carpeta destino en la URL opcionalmente: POST /:folder
router.post('/', subirImagen);
export default router;