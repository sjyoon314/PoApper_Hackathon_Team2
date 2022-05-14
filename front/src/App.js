import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Project from "./pages/Project";
import Finish from "./pages/Finish";
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
          <Route exact path="/project" element={<Project/>}></Route>
          <Route exact path="/finish" element={<Finish/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
        </Routes>
      </header>
  );
}

export default App;