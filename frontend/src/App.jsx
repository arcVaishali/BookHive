// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MatchedBooksGallery from "./Pages/MatchedBooksGallery";
import Home from "./Pages/Home";
import UserDashboard from "./Pages/UserDashboard";
import Swiper from "./Pages/Swiper";
import Login from "./Pages/Login";
import UserSignUp from './Pages/UserSignUp'
// Building Home Page the User Header USerBody User Footer 
const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<UserSignUp/>} />
            <Route path="/login" element={<Login/>} />
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
