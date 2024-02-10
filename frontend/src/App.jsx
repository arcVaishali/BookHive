import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MatchedBooksGallery from "./Pages/MatchedBooksGallery";

const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MatchedBooksGallery/>} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
