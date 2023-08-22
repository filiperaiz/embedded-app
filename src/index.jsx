import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import logo from "./logo.svg";

const getAuth = async (credentials) => {
  const safetyMargin = 5 * 60 * 1000
  const expiresAt = new Date(
    new Date().getTime() + credentials.expires_in * 1000 - safetyMargin
  ).getTime()
  credentials.expires_at = expiresAt

  try {
    sessionStorage.setItem('credentials_embedded', JSON.stringify(credentials))
    return credentials
  } catch (error) {
    return null
  }
}

function App(props) {
  console.log(props);
  useEffect(() => {
    getAuth(props.credentials)
   
  }, [])

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
  const APP_ID = "embedded_app";
  const RUNNER_KEY = `${APP_ID}_runner`;

  global[RUNNER_KEY] = (targetElementId, config) => {
    // console.log("config", config);
    const root = ReactDOM.createRoot(document.getElementById(targetElementId));
    root.render(
      <React.StrictMode>
        <App {...config}/>
      </React.StrictMode>
    );
  };

  if (!global.embedded) {
    window[RUNNER_KEY]("root");
  }
};

renderApp();
