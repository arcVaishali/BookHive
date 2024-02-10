import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./Pages/TestPage";

const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TestPage/>} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
