import '../styles/App.scss';
import { Link, Route, Routes } from 'react-router-dom';
// import callToApi from '../services/api';
// import { useEffect, useState } from 'react';
// import ls from '../services/localStorage';

function App() {
  return (
    <div>
      <header>
        <h1>Copiando a Github</h1>
        <Routes>
          <Route path="/repositories" />
          <Route path="/packages" />
          <Route path="/people" />
          <Route path="/teams" />
          <Route path="/projects" />
          <Route path="/settings" />
        </Routes>

        <nav>
          <ul>
            <li>
              <Link to="#">Overview</Link>
            </li>
            <li>
              <Link to="#">Repositories</Link>
            </li>
            <li>
              <Link to="#">Packages</Link>
            </li>
            <li>
              <Link to="#">People</Link>
            </li>
            <li>
              <Link to="#">Teams</Link>
            </li>
            <li>
              <Link to="#">Projects</Link>
            </li>
            <li>
              <Link to="#">Settings</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
