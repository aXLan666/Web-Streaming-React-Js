import Genre from '../../models/VideoModel/GenreModal.js'

export const getGenre = async (req, res) => {
  try {
      const response = await Genre.findAll();
      res.json(response);
  } catch (error) {
      console.log(error.message);
  }
}

export const getGenreById = async (req, res) => {
  try {
      const response = await Genre.findOne({
          where: {
              id: req.params.id
          }
      });
      res.json(response);
  } catch (error) {
      console.log(error.message);
  }
}


export const saveGenre = async (req, res) => {
  try {
    const { nameGenre } = req.body;
    const genre = await Genre.create({ nameGenre });
    res.status(201).json({ msg: "Genre created", genre });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to create genre" });
  }
};

export const updateGenre = async (req, res) => {
  try {
    const { nameGenre } = req.body;
    const updatedRows = await Genre.update(
      { nameGenre },
      { where: { id: req.params.id } }
    );
    if (updatedRows[0] === 0) {
      return res.status(404).json({ error: "Genre not found" });
    }
    res.status(200).json({ msg: "Genre updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to update genre" });
  }
};

export const deleteGenre = async (req, res) => {
  try {
    const deletedRows = await Genre.destroy({ where: { id: req.params.id } });
    if (deletedRows === 0) {
      return res.status(404).json({ error: "Genre not found" });
    }
    res.status(200).json({ msg: "Genre deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to delete genre" });
  }
};