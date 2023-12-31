import path from "path";
import Film from "../../models/VideoModel/FilmModal.js";
import fs from "fs";

export const getFilms = async (req, res) => {
    try {
        const response = await Film.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getFilmById = async (req, res) => {
    try {
        const response = await Film.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const saveFilm = async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ msg: "No File Uploaded" });
        }

        const { video, imageHorizontal, imageVertikal } = req.files;

        // Check if required files are missing
        if (!video || !imageHorizontal || !imageVertikal) {
            return res.status(400).json({ msg: "Required files missing" });
        }

        const allowedTypeVideo = [".mp4"];
        const allowedTypeImage = [".jpg", ".jpeg"];

        const extVideo = path.extname(video.name);
        const fileNameVideo = video.name;

        const extImageHorizontal = path.extname(imageHorizontal.name);
        const fileNameImageHorizontal = imageHorizontal.name;

        const extImageVerikal = path.extname(imageVertikal.name);
        const fileNameImageVerikal = imageVertikal.name;

        if (!allowedTypeVideo.includes(extVideo.toLowerCase())) {
            return res.status(422).json({ msg: "Invalid Type Video" });
        }
        if (!allowedTypeImage.includes(extImageHorizontal.toLowerCase())) {
            return res.status(422).json({ msg: "Invalid Type Image Horizontal" });
        }
        if (!allowedTypeImage.includes(extImageVerikal.toLowerCase())) {
            return res.status(422).json({ msg: "Invalid Type Image Vertical" });
        }

        const fileSizeVideo = video.data.length;
        const fileSizeImageHorizontal = imageHorizontal.data.length;
        const fileSizeImageVertikal = imageVertikal.data.length;

        if (fileSizeVideo > 1073741824) {
            return res.status(422).json({ msg: "Video must be less than 1 GB" });
        }
        if (fileSizeImageHorizontal > 10900000) {
            return res.status(422).json({ msg: "Horizontal image must be less than 10 MB" });
        }
        if (fileSizeImageVertikal > 10900000) {
            return res.status(422).json({ msg: "Vertical image must be less than 10 MB" });
        }

        const { filmTitle, filmReleaseDate, filmAbout } = req.body;


        const dataUrlVideo = `${req.protocol}://${req.get("host")}/videos/${fileNameVideo}`;
        const dataUrlImageHorizontal = `${req.protocol}://${req.get("host")}/images/${fileNameImageHorizontal}`;
        const dataUrlImageVertikal = `${req.protocol}://${req.get("host")}/images/${fileNameImageVerikal}`;

        await Promise.all([
            new Promise((resolve, reject) => {
                video.mv(`./public/videos/${fileNameVideo}`, (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            }),
            new Promise((resolve, reject) => {
                imageHorizontal.mv(`./public/images/${fileNameImageHorizontal}`, (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            }),
            new Promise((resolve, reject) => {
                imageVertikal.mv(`./public/images/${fileNameImageVerikal}`, (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            })
        ]);

        await Film.create({
            filmTitle: filmTitle,
            filmAbout: filmAbout,
            filmReleaseDate: filmReleaseDate,
            video: fileNameVideo,
            imageHorizontal: fileNameImageHorizontal,
            imageVertikal: fileNameImageVerikal,
            dataUrlVideo: dataUrlVideo,
            dataUrlImageHorizontal: dataUrlImageHorizontal,
            dataUrlImageVertikal: dataUrlImageVertikal,
        });

        res.status(201).json({ msg: "Film created successfully" });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

export const updateFilm = async (req, res) => {
    const film = await Film.findOne({
        where: {
            id: req.params.id,
        },
    });

    if (!film) {
        return res.status(404).json({ msg: "No Data Found" });
    }

    let fileNameVideo = "";
    let fileNameImageHorizontal = "";
    let fileNameImageVerikal = "";

    if (req.files === null) {
        fileNameVideo = film.video;
        fileNameImageHorizontal = film.imageHorizontal;
        fileNameImageVerikal = film.imageVertikal;
    } else {

        const { video, imageHorizontal, imageVertikal } = req.files;

        const fileSizeVideo = video.data.length;
        const fileSizeImageHorizontal = imageHorizontal.data.length;
        const fileSizeImageVertikal = imageVertikal.data.length;

        const extVideo = path.extname(video.name);
        fileNameVideo = video.name;

        const extImageHorizontal = path.extname(imageHorizontal.name);
        fileNameImageHorizontal = imageHorizontal.name;

        const extImageVerikal = path.extname(imageVertikal.name);
        fileNameImageVerikal = imageVertikal.name;

        const allowedTypeVideo = [".mp4"];
        const allowedTypeImage = [".jpg", ".jpeg"];

        if (!allowedTypeVideo.includes(extVideo.toLowerCase())) {
            return res.status(422).json({ msg: "Invalid Type Video" });
        }
        if (!allowedTypeImage.includes(extImageHorizontal.toLowerCase())) {
            return res.status(422).json({ msg: "Invalid Type Image Horizontal" });
        }
        if (!allowedTypeImage.includes(extImageVerikal.toLowerCase())) {
            return res.status(422).json({ msg: "Invalid Type Image Vertical" });
        }

        if (fileSizeVideo > 1073741824) {
            return res.status(422).json({ msg: "Video must be less than 1 GB" });
        }
        if (fileSizeImageHorizontal > 10900000) {
            return res.status(422).json({ msg: "Horizontal image must be less than 10 MB" });
        }
        if (fileSizeImageVertikal > 10900000) {
            return res.status(422).json({ msg: "Vertical image must be less than 10 MB" });
        }

        const filesToDelete = [
            `./public/videos/${film.video}`,
            `./public/images/${film.imageHorizontal}`,
            `./public/images/${film.imageVertikal}`,
        ];

        try {

            filesToDelete.forEach(filePath => fs.unlinkSync(filePath));

            await Promise.all([
                new Promise((resolve, reject) => {
                    video.mv(`./public/videos/${fileNameVideo}`, (err) => {
                        if (err) reject(err);
                        else resolve();
                    });
                }),
                new Promise((resolve, reject) => {
                    imageHorizontal.mv(`./public/images/${fileNameImageHorizontal}`, (err) => {
                        if (err) reject(err);
                        else resolve();
                    });
                }),
                new Promise((resolve, reject) => {
                    imageVertikal.mv(`./public/images/${fileNameImageVerikal}`, (err) => {
                        if (err) reject(err);
                        else resolve();
                    });
                })
            ]);

            const { filmTitle, filmReleaseDate, filmAbout } = req.body;

            const dataUrlVideo = `${req.protocol}://${req.get("host")}/videos/${fileNameVideo}`;
            const dataUrlImageHorizontal = `${req.protocol}://${req.get("host")}/images/${fileNameImageHorizontal}`;
            const dataUrlImageVertikal = `${req.protocol}://${req.get("host")}/images/${fileNameImageVerikal}`;

            await Film.update(
                {
                    filmTitle: filmTitle,
                    filmAbout: filmAbout,
                    filmReleaseDate: filmReleaseDate,
                    video: fileNameVideo,
                    imageHorizontal: fileNameImageHorizontal,
                    imageVertikal: fileNameImageVerikal,
                    dataUrlVideo: dataUrlVideo,
                    dataUrlImageHorizontal: dataUrlImageHorizontal,
                    dataUrlImageVertikal: dataUrlImageVertikal,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            res.status(201).json({ msg: "Film created successfully" });

        } catch (error) {
            console.error(error.message);
            res.status(500).json({ msg: "Internal Server Error" });
        }

    }
};

export const deleteFilm = async (req, res) => {
    const film = await Film.findOne({
        where: {
            id: req.params.id,
        }
    });
    if (!film) return res.status(404).json({ msg: "No Data Found" });
    const filesToDelete = [
        `./public/videos/${film.video}`,
        `./public/images/${film.imageHorizontal}`,
        `./public/images/${film.imageVertikal}`,
    ];
    try {
        filesToDelete.forEach(filePath => fs.unlinkSync(filePath));
        await Film.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Product Deleted Successfuly" });

    } catch (error) {
        console.log(error.message);

    }
}