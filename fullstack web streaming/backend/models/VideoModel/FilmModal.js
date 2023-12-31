import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const Film = db.define('films', {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    filmId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    filmTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    video: DataTypes.STRING,
    filmAbout: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    filmReleaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    imageHorizontal: DataTypes.STRING,
    imageVertikal: DataTypes.STRING,
    dataUrlVideo: DataTypes.STRING,
    dataUrlImageHorizontal: DataTypes.STRING,
    dataUrlImageVertikal: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Film;

// (async () => {
//     await db.sync();
// })();