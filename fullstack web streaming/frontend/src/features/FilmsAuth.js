// // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getFilmById_1 = async () => {
//     const response = await axios.get("http://localhost:5009/film/2");
//     const filmData = response.data; // Assuming the API response is an object with film data

//     // Access individual properties
//     const title = filmData.title;
//     const about = filmData.about;
//     const releaseDate = filmData.releaseDate;
//     const genreId = filmData.genreId;
//     const urlVideo = filmData.urlVideo;
//     const urlImageHorizontal = filmData.urlImageHorizontal;
//     const urlImageVertical = filmData.urlVideo;

//     // You can now use these variables as needed, for example:
//     console.log("Url Video:", urlVideo);
//     console.log("Url Image Horizontal:", urlImageHorizontal);
//     console.log("Url Image Vertikal:", urlImageVertical);
//     // ... and so on

//     return filmData; // If you want to return the entire film data object
// };

useEffect(() => {
  getUsers();
}, []);

const getUsers = async () => {
  const response = await axios.get("http://localhost:5009/film/2");
  setUsers(response.data);
};