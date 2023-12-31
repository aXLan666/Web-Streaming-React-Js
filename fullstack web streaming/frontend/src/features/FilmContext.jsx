import React, { createContext, useState } from 'react';

export const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <FilmContext.Provider value={{ selectedFilm, setSelectedFilm }}>
      {children}
    </FilmContext.Provider>
  );
};