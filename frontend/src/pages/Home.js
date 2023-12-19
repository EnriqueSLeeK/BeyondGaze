import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css'; 
import logo from '../images/SpaceSight.png'; 

function Home() {
  let navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  // Chamado quando o usuário clica em "Serch"
  function handleSearch() {
    // TODO: Código backend
    navigate('/search');
  }

  return (
      <div className="home">

      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Buscar no SpaceSight" 
          className="search-input" 
          value={searchInput}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Home;
