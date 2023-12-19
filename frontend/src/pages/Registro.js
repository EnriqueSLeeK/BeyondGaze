import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registro.css'; 
import logoImage from '../images/SpaceSight.png';

function Registro() {
  const navigate = useNavigate();

  // Estado iniciais do formulário
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    nickname: '',
    email: '',
    senha: ''
  });

  // Estado para armazenar e exibir mensagens de erro
  const [error, setError] = useState('');

  // Função para lidar com mudanças nos campos de entrada
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    for (let key in formData) {
      if (formData[key] === '') {
        setError(`Por favor, preencha o campo ${key}`);
        return;
      }
    }

    // Se todos os campos estiverem preenchidos, assumimos um registro bem-sucedido
    setError('');
    alert('Registro bem-sucedido!');
    navigate('/Login'); // Navega para a página de Login
  };

  return (
    <div className="registro">
      <div className="logo-container">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <input type="text" name="nome" placeholder="Nome" onChange={handleChange} />
        <input type="text" name="sobrenome" placeholder="Sobrenome" onChange={handleChange} />
        <input type="text" name="nickname" placeholder="Nickname" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} />
        <button type="submit">Registro</button>
        <p>Já tem conta? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Registro;
