import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Components 
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loader, { Spinner } from "./components/loader/Loader";

const App = () => {
  axios.defaults.withCredentials = true;

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
