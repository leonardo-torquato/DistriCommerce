import React, { useState } from 'react';
import { RegisterContainer, Form, Input, Button, LinkText, Logo } from './styles';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica de cadastro aqui
    navigate('/user');
  };

  return (
    <RegisterContainer>
      <BackButton onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>Voltar</BackButton>
      <Logo>Distrcommerce</Logo>
      <h2>Cadastrar</h2>
      <Form onSubmit={handleRegister}>
        <Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
      <LinkText onClick={() => navigate('/login')}>
        Já tem uma conta? Entrar
      </LinkText>
    </RegisterContainer>
  );
};

export default Register;
