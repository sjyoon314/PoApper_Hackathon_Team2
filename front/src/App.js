import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Progressing from "./pages/Progressing";
import Finished from "./pages/Finished";
import Register from "./pages/Register";
import {BrowserRouter, Link, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
      <header>
        <div className="app"></div>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/problem" element={<Problem/>}></Route>
          <Route exact path="/progressing" element={<Progressing/>}></Route>
          <Route exact path="/finished" element={<Finished/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
        </Routes>
      </header>
  );
}

export default App;