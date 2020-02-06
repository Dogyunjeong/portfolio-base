import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { IndexRouter } from './routers/IndexRouter'

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
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
