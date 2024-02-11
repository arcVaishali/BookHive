import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MatchedBooksGallery from "./Pages/MatchedBooksGallery";
import Home from "./Pages/Home";
import UserDashboard from "./Pages/UserDashboard";

const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/books-gallery" element={<MatchedBooksGallery/>} />
            <Route path="/user" element={<UserDashboard/>} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
