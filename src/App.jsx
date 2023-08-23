import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import logo from "./logo.svg";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SignPage from "./pages/Sign";
import TestPage from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <div className="embedded-app">
        <div className="embedded-header">
          <img src={logo} className="embedded-logo" alt="logo" />

          <nav className="embedded-menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sign">Sign</Link>
            <Link to="/test">Test</Link>
          </nav>
        </div>
        <div className="embedded-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sign" element={<SignPage />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App