import React, { useState } from 'react';
import ImageModal from './ImageModal';
import { Link, useNavigate } from 'react-router-dom';
import './SearchResults.css';
import logoImage from '../images/SpaceSight.png';
import testImage1 from '../images/TestImage1.jpg';
import testImage2 from '../images/TestImage2.jpg';


function SearchResults() {
  
  const [results, setResults] = useState([
    { id: 1, src: testImage1, title: 'Image 1', description: 'Description 1' , siteUrl: 'http://example.com'},
    { id: 2, src: testImage2, title: 'Image 2', description: 'Description 2' , siteUrl: 'http://example.com'},
    { id: 3, src: testImage1, title: 'Image 3', description: 'Description 3' , siteUrl: 'http://example.com'},
    { id: 4, src: testImage2, title: 'Image 4', description: 'Description 4' , siteUrl: 'http://example.com'},
    { id: 5, src: testImage1, title: 'Image 5', description: 'Description 5' , siteUrl: 'http://example.com'},
    { id: 6, src: testImage2, title: 'Image 6', description: 'Description 6' , siteUrl: 'http://example.com'},
    { id: 7, src: testImage1, title: 'Image 7', description: 'Description 7' , siteUrl: 'http://example.com'},
    { id: 8, src: testImage2, title: 'Image 8', description: 'Description 8' , siteUrl: 'http://example.com'},
    { id: 9, src: testImage1, title: 'Image 9', description: 'Description 9' , siteUrl: 'http://example.com'},
    { id: 10, src: testImage2, title: 'Image 10', description: 'Description 10' , siteUrl: 'http://example.com'},
  ]);

  // Inicializa estado para armazenar a imagem selecionada para o modal, inicialmente null
  const [selectedImage, setSelectedImage] = useState(null); 

  // Função para lidar com o clique em uma imagem.
  const handleImageClick = (imageData, event) => {
    event.stopPropagation();
    if (event.target.tagName === 'IMG') {
      setSelectedImage(imageData);
    }
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setSelectedImage(null); // Reseta o estado, fechando o modal
  };


  return (
    <div className="search-results">
      
      <div className="logo-container">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>
      
      <div className="search-bar-container">
        <input type="text" placeholder="Buscar no SpaceSight" className="search-input" />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <ImageModal image={selectedImage} onClose={handleCloseModal} />
      
      <div className="results-container">
        {results.map(result => (
          <div className="result-item" key={result.id} onClick={(e) => handleImageClick(result, e)}>
           <img src={result.src} alt={result.title} style={{ width: '200px', height: '200px' }} />
          </div>
        ))}
      </div>

      <div className="pagination-container">
        <div className="page-item">1</div>
      </div>
    </div>
  );
}

export default SearchResults;
