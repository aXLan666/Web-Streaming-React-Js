import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Sidebar from './pages/Sidebar';
import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import Produk from './pages/Produk';
import { FilmProvider } from './features/FilmContext.jsx';
import axios from "axios";
import Pembelian from './pages/Pembelian';
import Test from './pages/Test';

// import { getFilmById_1 } from "./features/FilmsAuth.js";

axios.defaults.withCredentials = true;

const App = () => {

  // const fetchFilmDataAndLog = async () => {
  //   try {
  //     const data = await getFilmById_1();
  //     console.log("Film Data:", data);
  //   } catch (error) {
  //     console.error("Error fetching film data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchFilmDataAndLog();
  // }, []);

  return (
    <div>
      {/* <FilmProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sidebar/*" element={<Sidebar />} />
          </Routes>
          <Routes>
            <Route path="/sidebar/dashboard" element={<Dashboard />} />
            <Route path="/sidebar/users" element={<UserList />} />
            <Route path="/sidebar/produk" element={<Produk />} />

            <Route path="/home" element={<Home />} />
            <Route path="/pembelian" element={<Pembelian />} />
          </Routes>
        </BrowserRouter>
      </FilmProvider> */}
      <Test />
    </div>
  );
};

export default App;