import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logoImage from '../images/SpaceSight.png';

function Login(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [error, setError] = useState('');

  // Recebendo setIsLoggedIn do componente pai para atualizar o estado de login (Definido inicialmente no app.js como status 'falso')
  const { setIsLoggedIn } = props;

  // Função para lidar com mudanças nos inputs do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificação simples para garantir que ambos os campos, email e senha, estão preenchidos
    if (!formData.email || !formData.senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // TODO: Autenticação.
    setIsLoggedIn(true); // Define o estado do usuário como logado
    navigate('/perfil'); // Navega para a página de perfil
  };

  return (
    <div className="login">
      <div className="logo-container">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} />
        <button type="submit">Login</button>
        <p>Não tem conta? <Link to="/registro">Registro</Link></p>
      </form>
    </div>
  );
}

export default Login;
