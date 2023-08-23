import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const renderApp = async () => {
  const APP_ID = 'app_test'
  const RUNNER_KEY = `${APP_ID}_runner`

  global[RUNNER_KEY] = async (targetElementId) => {
    const root = ReactDOM.createRoot(document.getElementById(targetElementId))

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  if (!global.embedded) {
    window[RUNNER_KEY]('root')
  }
}

renderApp();
