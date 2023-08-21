import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import logo from "./logo.svg";

function App() {
  console.log('entrou');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Header App</h2>
      </header>
      <main>
        <h2>Main App</h2>
      </main>
    </div>
  );
}

const renderApp = () => {
  const APP_ID = "app_root";
  const RUNNER_KEY = `${APP_ID}_runner`;

  global[RUNNER_KEY] = (targetElementId) => {
    const root = ReactDOM.createRoot(document.getElementById(targetElementId));
    console.log('root', root);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  };

  if (!global.embedded) {
    window[RUNNER_KEY]("root");
    console.log('window[RUNNER_KEY]', window[RUNNER_KEY]);
  }
};

renderApp();
