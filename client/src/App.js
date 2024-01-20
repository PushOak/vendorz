import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";

// Components 
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loader, { Spinner } from "./components/loader/Loader";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
