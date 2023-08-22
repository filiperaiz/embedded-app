import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./index.css";

import logo from "./logo.svg";

const HomePage = () => <h2>Home Page</h2>;
const AboutPage = () => <h2>About Page</h2>;
const SignPage = () => <h2>Sign Page</h2>;

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
          </nav>
        </div>
        <div className="embedded-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sign" element={<SignPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

renderApp();
