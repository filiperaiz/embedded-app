import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import logo from './logo.svg';

function App() {

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
  const root = ReactDOM.createRoot(document.getElementById('root'))

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

renderApp()


