// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// function Produk() {
//   const [films, setFilms] = useState([]);

//   useEffect(() => {
//     getFilms();
//   }, []);

//   const getFilms = async () => {
//     try {
//       const response = await axios.get('http://localhost:5009/films');
//       setFilms(response.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   // const useFilm = async (filmId) => {
//   //     await axios.post(`http://localhost:5009/produkfilm/${filmId}`);
//   //     getFilms();
//   // };

//   const useFilm = async (filmId) => {
//     try {
//       // Send the POST request with the filmId as an object
//       await axios.post('http://localhost:5009/produkfilm', { id: filmId });

//       // After a successful POST request, update the film list
//       getFilms();
//     } catch (error) {
//       console.error('Error using film:', error.message);
//     }
//   };

//   const deletedFilm = async (filmId) => {
//     await axios.delete(`http://localhost:5009/produkfilm/${filmId}`);
//     getFilms();
//   };

//   return (
//     <div className="p-4 sm:ml-64 bg-yellow400 min-h-screen" id="Dashboard">
//       <div className="p-4 border-2 border-gray200 border-dashed rounded-lg dark:bordergray700 mt-14">
//         <h1>Film List</h1>

//         <div className="container mx-auto max-w-full h-full">
//           <div className="flex flex-wrap w-full mb-4 p-4">
//             <div className="w-full mb-6 lg:mb-0">
//               <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Films</h1>
//               <div className="h-1 bg-indigo-500 rounded"></div>
//             </div>
//           </div>

//           <div className="flex flex-wrap m-4">
//             {films.map((film) => (
//               <div key={film.id} className="w-full h-full p-2">
//                 <div className="bg-white p-6 rounded-lg">
//                   <img className="h-full w-full rounded object-cover object-center mb-4" src={film.dataUrlImageHorizontal} alt="Image Size 720x400" />
//                   <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{film.filmTitle}</h2>
//                   <p className="leading-relaxed text-base">{film.filmAbout}</p>
//                   <div className="flex mt-4">
//                     <input type="checkbox" value="" className="btn checkbox mr-3" />
//                     <div onClick={() => useFilm(film.id)} className="btn w-24 mr-3">Use</div>
//                     <div onClick={() => deletedFilm(film.id)} className="btn w-24">unUse</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Produk;


import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

function Produk() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms();
    dataProdukFilms();
  }, []);

  const getFilms = async () => {
    try {
      const response = await axios.get('http://localhost:5009/films');
      setFilms(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const dataProdukFilms = async () => {
    try {
      const response = await axios.get('http://localhost:5009/produkfilms'); // Use the correct endpoint
      setFilms(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const useFilm = async (filmId) => {
    try {
      // Send the POST request with the filmId as an object
      await axios.post('http://localhost:5009/produkfilm', { id: filmId });

      // After a successful POST request, update the film list
      getFilms();
    } catch (error) {
      console.error('Error using film:', error.message);
    }
  };

  const deleteFilm = async (filmId) => {
    await axios.delete(`http://localhost:5009/produkfilm/${filmId}`);
    getFilms();
  };

  const handleToggle = async (filmId) => {
    const filmInUse = films.some((film) => film.id === filmId);
    if (filmInUse) {
      await deleteFilm(filmId);
    } else {
      await useFilm(filmId);
    }
    getFilms(); // Refresh the films after using or deleting
  };

  return (
    <div className="p-4 sm:ml-64 bg-yellow400 min-h-screen" id="Dashboard">
      <div className="p-4 border-2 border-gray200 border-dashed rounded-lg dark:bordergray700 mt-14">
        <h1>Film List</h1>

        <div className="container mx-auto max-w-full h-full">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Films</h1>
              <div className="h-1 bg-indigo-500 rounded"></div>
            </div>
          </div>

          <div className="flex flex-wrap m-4">
            {films.map((film) => (
              <div key={film.id} className="w-full h-full p-2">
                <div className="bg-white p-6 rounded-lg">
                  <img className="h-full w-full rounded object-cover object-center mb-4" src={film.dataUrlImageHorizontal} alt="Image Size 720x400" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{film.filmTitle}</h2>
                  <p className="leading-relaxed text-base">{film.filmAbout}</p>
                  <div className="">
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      onClick={() => handleToggle(film.id)} // Call handleToggle on label click
                    >
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {films.some((f) => f.id === film.id) ? 'Unuse' : 'Use'} Film
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produk;
