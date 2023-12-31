import express from "express";
import {
    getProdukFilms,
    getProdukFilmById,
    InputFilm,
    deleteFilm
    // deleteUser
} from "../../controllers/ProdukController/ProdukController.js";

import { verifyUser, adminOnly } from "../../middleware/AuthUser.js";

const router = express.Router();

router.get('/produkfilms', getProdukFilms);
router.get('/produkfilm/:id', getProdukFilmById);
router.post('/produkfilm', InputFilm);
router.delete('/produkfilm/:id', deleteFilm);
// router.delete('/users/:id', deleteUser);

export default router;