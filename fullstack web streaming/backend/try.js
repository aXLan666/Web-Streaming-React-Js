export const InputFilm = async (req, res) => {
  try {
    const { id } = req.body;

    // Check if the film with the provided id exists in the produkfilms table
    const existingProdukFilm = await ProdukFilm.findByPk(id);
    if (existingProdukFilm) {
      return res.status(400).json({ error: "Film with the provided ID already exists." });
    }

    // Fetch data from the Film table based on the provided id
    const filmData = await Film.findByPk(id);

    // Check if the film with the provided id exists in the Film table
    if (!filmData) {
      return res.status(404).json({ error: "Film not found." });
    }

    const {
      filmTitle,
      filmAbout,
      filmReleaseDate,
      dataUrlVideo,
      dataUrlImageHorizontal,
      dataUrlImageVertikal,
    } = filmData;

    // Check if there are any deleted IDs available to reuse
    const existingFilmIds = await ProdukFilm.findAll({ attributes: ['id'] });
    const usedFilmIds = existingFilmIds.map((film) => film.id);

    // Decide the condition based on the number of used IDs (for example, allow only 5 records)
    const MAX_ALLOWED_FILMS = 5;
    if (usedFilmIds.length >= MAX_ALLOWED_FILMS) {
      return res.status(400).json({ error: "Maximum number of films reached. Cannot add more. Must delete 1." });
    }

    let newFilmId;

    // If there are available deleted IDs, reuse the first one
    const allFilmIds = Array.from({ length: MAX_ALLOWED_FILMS }, (_, index) => index + 1);
    const availableFilmIds = allFilmIds.filter((id) => !usedFilmIds.includes(id));

    if (availableFilmIds.length > 0) {
      newFilmId = availableFilmIds[0];
    } else {
      // If no available deleted IDs, generate a new ID (one greater than the current maximum ID)
      const maxFilmId = Math.max(...usedFilmIds);
      newFilmId = maxFilmId + 1;
    }

    // Check if there is an existing film with the same title, about, and releaseDate
    const existingFilm = await ProdukFilm.findOne({
      where: {
        title: filmTitle,
        about: filmAbout,
        releaseDate: filmReleaseDate,
      },
    });

    if (existingFilm) {
      return res.status(400).json({ error: "Film already exists." });
    }

    // Proceed with creating a new film record with the selected or generated ID
    const newProdukFilm = await ProdukFilm.create({
      id: newFilmId,
      title: filmTitle,
      about: filmAbout,
      releaseDate: filmReleaseDate,
      urlVideo: dataUrlVideo,
      urlImageHorizontal: dataUrlImageHorizontal,
      urlImageVertikal: dataUrlImageVertikal,
    });

    res.status(201).json({ msg: "Input Data", InputFilm: newProdukFilm });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Error adding film." });
  }
};







export const InputFilm = async (req, res) => {
  try {
    const { id } = req.body;

    // Check if the film with the provided id exists in the produkfilms table
    const existingProdukFilm = await ProdukFilm.findByPk(id);
    if (existingProdukFilm) {
      return res.status(400).json({ error: "Film with the provided ID already exists." });
    }

    // Fetch data from the Film table based on the provided id
    const filmData = await Film.findByPk(id);

    // Check if the film with the provided id exists in the Film table
    if (!filmData) {
      return res.status(404).json({ error: "Film not found." });
    }

    const {
      filmTitle,
      filmAbout,
      filmReleaseDate,
      dataUrlVideo,
      dataUrlImageHorizontal,
      dataUrlImageVertikal,
    } = filmData;

    // Check if there are any deleted IDs available to reuse
    const existingFilmIds = await ProdukFilm.findAll({ attributes: ['id'] });
    const usedFilmIds = existingFilmIds.map((film) => film.id);

    // Decide the condition based on the number of used IDs (for example, allow only 5 records)
    const MAX_ALLOWED_FILMS = 5;
    if (usedFilmIds.length >= MAX_ALLOWED_FILMS) {
      return res.status(400).json({ error: "Maximum number of films reached. Cannot add more. Must delete 1." });
    }

    let newFilmId;

    // If there are available deleted IDs, reuse the first one
    const allFilmIds = Array.from({ length: MAX_ALLOWED_FILMS }, (_, index) => index + 1);
    const availableFilmIds = allFilmIds.filter((id) => !usedFilmIds.includes(id));

    if (availableFilmIds.length > 0) {
      newFilmId = availableFilmIds[0];
    } else {
      // If no available deleted IDs, generate a new ID (one greater than the current maximum ID)
      const maxFilmId = Math.max(...usedFilmIds);
      newFilmId = maxFilmId + 1;
    }

    // Check if there is an existing film with the same title, about, and releaseDate
    const existingFilm = await ProdukFilm.findOne({
      where: {
        title: filmTitle,
        about: filmAbout,
        releaseDate: filmReleaseDate,
      },
    });

    if (existingFilm) {
      return res.status(400).json({ error: "Film already exists." });
    }

    // Proceed with creating a new film record with the selected or generated ID
    const newProdukFilm = await ProdukFilm.create({
      filmId: id, // Add the id from the Film table to the filmId column in the produkfilms table
      title: filmTitle,
      about: filmAbout,
      releaseDate: filmReleaseDate,
      urlVideo: dataUrlVideo,
      urlImageHorizontal: dataUrlImageHorizontal,
      urlImageVertikal: dataUrlImageVertikal,
    });

    res.status(201).json({ msg: "Input Data", InputFilm: newProdukFilm });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Error adding film." });
  }
};