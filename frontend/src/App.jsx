// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MatchedBooksGallery from "./Pages/MatchedBooksGallery";
import Home from "./Pages/Home";
import UserDashboard from "./Pages/UserDashboard";
import Swiper from "./Pages/Swiper";
import UserSignUp from './Pages/UserSignUp'

const App = () => {
  return (
    <div>
      <>
      <UserSignUp/>
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
