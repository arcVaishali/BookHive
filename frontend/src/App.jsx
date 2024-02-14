import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MatchedBooksGallery from "./Pages/MatchedBooksGallery";
import Home from "./Pages/Home";
import UserDashboard from "./Pages/UserDashboard";
import Swiper from "./Pages/Swiper";

const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/books-gallery" element={<MatchedBooksGallery/>} />
            <Route path="/user" element={<UserDashboard/>} />
            <Route path="/swipe" element={<Swiper />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
