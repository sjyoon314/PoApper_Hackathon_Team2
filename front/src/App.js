import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Project from "./pages/Project";
import Finish from "./pages/Finish";
import {BrowserRouter, Link, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
      <header>
        <div className="app"></div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/problem" element={<Problem/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/finish" element={<Finish/>}></Route>
        </Routes>
      </header>
  );
}

export default App;