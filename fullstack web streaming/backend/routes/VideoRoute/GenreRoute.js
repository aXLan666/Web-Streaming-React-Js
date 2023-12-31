import express from "express";
import {
    getGenre,
    saveGenre,
    getGenreById,
    updateGenre,
    deleteGenre
} from '../../controllers/VideoController/GenreContoller.js'

import { verifyUser, adminOnly } from "../../middleware/AuthUser.js";

const router = express.Router();

router.get('/genres',  getGenre);
router.get('/genre/:id',  getGenreById);
router.post('/genre',  saveGenre);
router.patch('/genre/:id',  updateGenre);
router.delete('/genre/:id',  deleteGenre);

export default router;