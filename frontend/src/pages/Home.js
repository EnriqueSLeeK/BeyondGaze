import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';
import logo from '../images/SpaceSight.png';

function Home() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  // Chamado quando o usuário clica em "Search"
  function handleSearch() {
    console.log('handleSearch called with input:', searchInput);
    // Navegar para a rota de resultados de pesquisa com a consulta
    navigate(`/search?query=${searchInput}`);
  
    // Aguardar um curto período de tempo antes de verificar a URL
    setTimeout(() => {
      console.log('Navigation completed. Current URL:', window.location.href);
    }, 1000); // Aguarde 1 segundo (ajuste conforme necessário)
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
