import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Perfil from './pages/Perfil';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <div className="top-right-links">
          {isLoggedIn ? (
            <Link to="/perfil">Perfil</Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/registro">Registro</Link>
            </>
          )}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
