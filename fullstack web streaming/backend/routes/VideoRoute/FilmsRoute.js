import express from "express";
import {
    getFilms,
    getFilmById,
    saveFilm,
    updateFilm,
    deleteFilm
} from '../../controllers/VideoController/FilmController.js';

import { verifyUser, adminOnly } from "../../middleware/AuthUser.js";

const router = express.Router();

router.get('/films', getFilms);
router.get('/film/:id', getFilmById);
router.post('/film', saveFilm);
router.patch('/film/:id', updateFilm);
router.delete('/film/:id', deleteFilm);

export default router;