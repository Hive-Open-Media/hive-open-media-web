import React from 'react';
import './App.css';
import GoogleSignIn from './GoogleSignIn';
import CreateFolder from './CreateFolder';
const logo = require('./logo-1.png');

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hive Open Media
        </h1>
      </header>
      <GoogleSignIn />
      <CreateFolder />
    </div>
  );
}

export default App;