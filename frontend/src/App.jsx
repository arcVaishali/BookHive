import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookCard from "./components/BookCard";

const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookCard />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
