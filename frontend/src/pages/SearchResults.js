import React, { useState, useEffect } from 'react';
import ImageModal from './ImageModal';
import { Link, useLocation } from 'react-router-dom';
import './SearchResults.css';
import logoImage from '../images/SpaceSight.png';

function SearchResults() {
  const [results, setResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  const searchInput = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    console.log('useEffect acionado. Search Input:', searchInput);
  
    const fetchData = async () => {
      console.log('Iniciando chamada à API...');
      
      try {
        const response = await fetch(`http://localhost:4000/search-images?query=${searchInput}`);
        const data = await response.json();
        console.log('Data from API:', data);
  
        if (data && data.collection && data.collection.items && data.collection.items.length > 0) {
          const formattedResults = data.collection.items.map(item => ({
            id: item.data.length > 0 ? item.data[0].nasa_id : '',
            src: item.links.length > 0 ? item.links[0].href : '',
            title: item.data.length > 0 ? item.data[0].title : '',
            description: item.data.length > 0 ? item.data[0].description : '',
            siteUrl: item.links.length > 0 ? item.links[0].href : ''
          }));
  
          console.log('Formatted Results:', formattedResults);
  
          setResults(formattedResults);
        } else {
          console.warn('No items found in data.');
          setResults([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setResults([]);
      }
    };
  
    fetchData();
  }, [searchInput]);
  

  const handleImageClick = (imageData, event) => {
    event.stopPropagation();
    if (event.target.tagName === 'IMG') {
      setSelectedImage(imageData);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
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