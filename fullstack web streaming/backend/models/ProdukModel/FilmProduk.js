import { Sequelize } from "sequelize";
import db from "../../config/Database.js";
// import Film from "../VideoModel/FilmModal.js";
// import Genre from "../VideoModel/GenreModal.js";

const { DataTypes } = Sequelize;

const ProdukFilm = db.define('produkfilms', {
    filmId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    about: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genreId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    urlVideo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    urlImageHorizontal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    urlImageVertikal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default ProdukFilm;
