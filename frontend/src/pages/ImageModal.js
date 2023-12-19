import './ImageModal.css'; 
import React, { useState } from 'react';

const ImageModal = ({ image, onClose }) => {

  // Estado para controlar se a imagem está favoritada
  const [isFavorited, setIsFavorited] = useState(false);

  // Função para alternar o estado de favorito.
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    // TODO: Adicionar código para comunicar com o backend aqui.
  };

  // Se não tiver imagem, não renderiza o componente
  if (!image) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={image.src} alt={image.title} />
        <div className="image-info">
          <div className="image-header">
            <h2>{image.title}</h2>
              <button onClick={toggleFavorite} className="favorite-button">
                <i className={`fa${isFavorited ? 's' : 'r'} fa-star`}></i>
              </button>
          </div>
          <p>{image.description}</p>
          <p><a href={image.siteUrl} target="_blank" rel="noopener noreferrer">Visitar site</a></p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
