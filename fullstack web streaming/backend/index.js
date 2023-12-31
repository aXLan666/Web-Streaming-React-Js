import express from "express";
import cors from "cors";
import session from "express-session";
import fileUpload from 'express-fileupload';
import dotenv from "dotenv";

import db from "./config/Database.js";
import sequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute/UserRoute.js";
import AuthRoute from './routes/UserRoute/AuthRoute.js';
import FilmsRoute from "./routes/VideoRoute/FilmsRoute.js";
import GenreRoute from "./routes/VideoRoute/GenreRoute.js";
import ProdukFilmRoute from "./routes/ProdukRoute/ProdukFilmRoute.js"
import PembelianRoute from "./routes/PembelianRoute/PembelianRoute.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const sessionStore = sequelizeStore(session.Store);

const store = new sessionStore({
    db: db
})

// (async () => {
await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload());
app.use(express.static("public"));
app.use(UserRoute);
app.use(AuthRoute);
app.use(FilmsRoute);
app.use(GenreRoute);
app.use(ProdukFilmRoute);
app.use(PembelianRoute);

store.sync();

app.listen(5009, () => {
    console.log('Server up and running...');
});