import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from './ImageModal';
import './Perfil.css';
import logoImage from '../images/SpaceSight.png';
import fav1 from '../images/fav1.jpg';
import fav2 from '../images/fav2.jpg';
import fav3 from '../images/fav3.jpg';
import fav4 from '../images/fav4.jpg';
import fav5 from '../images/fav5.jpg';
import fav6 from '../images/fav6.jpg';
import perfil from '../images/Perfil.png'


function Perfil() {
  const profilePic = perfil; // Foto do perfil
  const favorites = [
    { id: 1, src: fav1, title: 'Favorite 1' ,description: 'Description 1' , siteUrl: 'http://example.com'},
    { id: 2, src: fav2, title: 'Favorite 2' ,description: 'Description 2' , siteUrl: 'http://example.com'},
    { id: 3, src: fav3, title: 'Favorite 3' ,description: 'Description 3' , siteUrl: 'http://example.com'},
    { id: 4, src: fav4, title: 'Favorite 4' ,description: 'Description 4' , siteUrl: 'http://example.com'},
    { id: 5, src: fav5, title: 'Favorite 5' ,description: 'Description 5' , siteUrl: 'http://example.com'},
    { id: 6, src: fav6, title: 'Favorite 6' ,description: 'Description 6' , siteUrl: 'http://example.com'},
  ];

  // Inicializa estado para armazenar a imagem selecionada para o modal, inicialmente null
  const [selectedImage, setSelectedImage] = useState(null);

  // Função para lidar com o clique em uma imagem favorita
  const handleImageClick = (favorite) => {
    setSelectedImage(favorite);
};

  // Função para fechar o modal
  const handleCloseModal = () => {
    setSelectedImage(null); // Reseta o estado, fechando o modal
};

  return (
    <div className="profile-container">
        
        <div className="logo-container">
            <Link to="/">
                <img src={logoImage} alt="Logo" />
            </Link>
        </div>
        
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={handleCloseModal} />
        )}

        <div className="profile-content">
            <div className="profile-pic-container">
                <img src={profilePic} alt="Profile" className="profile-pic" />
            </div>
            <div className="favorites-container">
            {favorites.map(favorite => (
              <div
                key={favorite.id}
                className="favorite-item"
                onClick={() => handleImageClick(favorite)}
              >
                <img src={favorite.src} alt={favorite.title} />
              </div>
            ))}
            </div>
        </div>
    </div>
);
}

export default Perfil;