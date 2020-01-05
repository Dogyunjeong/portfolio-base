import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { IndexRouter } from './routers/IndexRouter'

import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Router>
          <Link to="/build" >Build Test</Link>
          <IndexRouter />
        </Router>
      </main>
    </div>
  );
}

export default App;
