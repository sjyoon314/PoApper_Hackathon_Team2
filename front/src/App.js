import React from "react";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;