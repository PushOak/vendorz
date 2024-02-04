import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import axios from "axios";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { getLoginStatus } from "./redux/features/auth/authSlice";

// Pages
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/profile/Profile";

// Components 
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loader, { Spinner } from "./components/loader/Loader";

const App = () => {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
